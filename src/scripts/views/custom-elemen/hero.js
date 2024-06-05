class Hero extends HTMLElement {
    constructor() {
      super();
  
     this._style = document.createElement('style');
    }
    _updateStyle() {
        this._style.textContent = `
        .jumbotron {
          background-color: #007bff;
          color: #fff;
          text-align: center;
          padding: 100px 0;
          background-size: cover;
          background-position: center;
        }
        
        .jumbotron h1 {
            font-size: 3em;
            margin-bottom: 20px;
        }
        
        .jumbotron p {
            font-size: 1.5em;
            margin-bottom: 30px;
            color: white;
        }
        
        .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #fff;
            color: #007bff;
            text-decoration: none;
            font-size: 1.2em;
            border-radius: 5px;
        }
        
        .btn:hover {
            background-color: #f0f0f0;
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
    
        <div class="jumbotron">
        <h1>Urun Dana Investasi Bisnis Saham Tani</h1>
        <p>Platform Equity Crowdfunding pertama yang berizin dan diawasi Otoritas Jasa Keuangan berdasarkan Surat Keputusan Nomor: KEP-59/D.04/2019.</p>
        <a href="#" class="btn">Learn More</a>
        </div>    
        `;
      }
    }
    
    
    
    
    customElements.define('hero-section', Hero);
    