class Hero extends HTMLElement {
    constructor() {
      super();
  
     this._style = document.createElement('style');
    }
    _updateStyle() {
        // Menghapus seluruh kode CSS dari sini
        this._style.textContent = `
           
        `;
    }
    
    connectedCallback() {
        this.render();
    }
    
    render() {
        this._updateStyle();
    
        this.innerHTML = `
        ${this._style.outerHTML}
    
        <div class="jumbotron">
            <h1>Urun Dana Investasi Bisnis Saham Tani</h1>
            <p>Platform Equity Crowdfunding pertama yang berizin dan diawasi Otoritas Jasa Keuangan berdasarkan Surat Keputusan Nomor: KEP-59/D.04/2019.</p>
            <a href="#" class="btn">Learn More</a>
        </div>    
        `;
    }
}

customElements.define('hero-section', Hero);
