class ChildElement {
  static type = 'ChildElement';

  text: string | null;
  properties;
  child_elements?: ChildElement[];

  constructor(data: any) {
    this.text = data.type.textType?.text?.content || null;
    this.properties = data.properties;

    if (data.childElements) {
      this.child_elements = data.childElements.map((el: any) => new ChildElement(el));
    }
  }
}

export default ChildElement;