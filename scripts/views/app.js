import parselurl from '../routes/parsel-url';
import routes from '../routes/url';

class App {
  constructor({
    button, drawer, hero, content,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._hero = hero;
    this._content = content;
  }
  async renderPage() {
    const url = parselurl.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    // await page.afterRender();
  }
}

export default App;
