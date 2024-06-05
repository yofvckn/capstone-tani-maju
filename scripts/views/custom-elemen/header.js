class Header extends HTMLElement {
    constructor() {
      super();
  
      this._style = document.createElement('style');
    }
  
    _updateStyle() {
      this._style.textContent = `
      .header {
        display: flex;
        align-items: center;  
        width :100%;
        
      }
    
    .header_title {
        flex: 1; 
        display: flex;
        align-items: center; 
    }    
      `;
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this._updateStyle();
  
      this.innerHTML = `
      ${this._style.outerHTML}
  
      <header class="header">
      <div tabindex="0" class="header_title">
        <h1>TANI MAJU</h1>
      </div>
      <button id="menu" class="header__menu">☰</button>
     <nav-section></nav-section>
    </header>
  
      `;
    }
  }
  
  
  
  
  customElements.define('header-section', Header);
  