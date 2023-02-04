export async function* fromSingle<T>(value: T): AsyncGenerator<T> {
  yield value;
}

export async function first<T>(
  generator: AsyncGenerator<T>,
): Promise<T> {
  const { done, value } = await generator.next();
  if (done) throw Error("The generator should yield at least one value.");
  return value;
}
