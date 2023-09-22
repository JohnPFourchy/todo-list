function component() {
    const element = document.createElement('div');
 
    element.innerHTML = "working???";
 
    return element;
  }
 
  document.body.appendChild(component());