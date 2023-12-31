export class Module {
  constructor(type, text) {
    if (!type) {
      throw new Error('Please specify "type" param')
    }
    if (!text) {
      throw new Error('Please specify "text" param')
    }
    this.type = type
    this.text = text
  }

  trigger() {
    throw new Error(`Trigger method should be implemented in module "${this.type}"`)
  }

  toHTML() {
    const li = document.createElement('li');
    li.className = 'menu-item';
    li.setAttribute('data-type', this.type);
    li.textContent = this.text;
    
    return li;
  }
}