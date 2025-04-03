/**
 * @param {import('typescript').Program} program 
 * @param {import('ts-patch').PluginConfig} pluginConfig 
 * @param {import('ts-patch').TransformerExtras} extras 
 */
module.exports = (program, pluginConfig, { ts: tsInstance }) => {
  /** @param {import('typescript').TransformationContext} context */
  return (context) => {
    const { factory } = context

    /** @param {import('typescript').SourceFile} sourceFile */
    return (sourceFile) => {
      /**
     * @param {import('typescript').Node} node 
     * @returns {import('typescript').Node}
     */
      const visitor = (node) => {
        if (
          tsInstance.isEnumDeclaration(node) &&
          (!node.modifiers || node.modifiers.every(modifier => modifier.kind !== tsInstance.SyntaxKind.DeclareKeyword))
        ) {
          let variableStatementModifiers

          if (node.modifiers?.some(modifier => modifier.kind === tsInstance.SyntaxKind.ExportKeyword)) {
            variableStatementModifiers = [
              factory.createModifier(tsInstance.SyntaxKind.ExportKeyword)
            ]
          }

          const properties = []
          let currentValue = 0

          for (const member of node.members) {
            const name = member.name.text
            let value
            let isNumeric = true
            let hasMinus = false

            if (!member.initializer) {
              value = currentValue.toString()
              currentValue++
            } else if (tsInstance.isStringLiteral(member.initializer)) {
              value = member.initializer.text
              isNumeric = false
            } else if (tsInstance.isNumericLiteral(member.initializer)) {
              value = member.initializer.text
              currentValue = Number(value) + 1
            } else if (
              tsInstance.isPrefixUnaryExpression(member.initializer) &&
              member.initializer.operator === tsInstance.SyntaxKind.MinusToken
            ) {
              value = member.initializer.operand.text
              hasMinus = true
              currentValue = (-1 * Number(value)) + 1
            } else {
              console.warn(`Unsupported enum member initializer "${tsInstance.SyntaxKind[member.initializer.kind]}" in "${node.name.text}", using original enum output.`)
              return tsInstance.visitEachChild(node, visitor, context);
            }

            if (isNumeric) {
              if (hasMinus) {
                properties.push(
                  factory.createPropertyAssignment(
                    name,
                    factory.createPrefixUnaryExpression(
                      tsInstance.SyntaxKind.MinusToken,
                      factory.createNumericLiteral(value)
                    )
                  ),
                  factory.createPropertyAssignment(
                    factory.createStringLiteral(`-${value}`),
                    factory.createStringLiteral(name)
                  )
                )
              } else {
                properties.push(
                  factory.createPropertyAssignment(
                    name,
                    factory.createNumericLiteral(value)
                  ),
                  factory.createPropertyAssignment(
                    value,
                    factory.createStringLiteral(name)
                  )
                )
              }
            } else {
              properties.push(
                factory.createPropertyAssignment(
                  name,
                  factory.createStringLiteral(value)
                )
              )
            }
          }

          const convertedEnum = factory.createVariableStatement(
            variableStatementModifiers,
            factory.createVariableDeclarationList(
              [
                factory.createVariableDeclaration(
                  factory.createIdentifier(node.name.text),
                  undefined,
                  undefined,
                  factory.createObjectLiteralExpression(
                    properties,
                    true
                  )
                )
              ],
              tsInstance.NodeFlags.Const
            )
          )

          return convertedEnum
        }

        return tsInstance.visitEachChild(node, visitor, context);
      };

      return tsInstance.visitNode(sourceFile, visitor);
    }
  }
}
