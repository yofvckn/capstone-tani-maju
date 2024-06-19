// App.js
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // Initialize other components if needed
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithoutCombiner(); // Use correct function name
    const page = routes[url];
    if (page) {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } else {
      // Handle page not found
      this._content.innerHTML = '<p>Page not found</p>';
    }
  }
}

export default App;
