import '../styles/style.css';
import '../styles/responsive.css';
import './views/custom-elemen/hero';
import './views/custom-elemen/nav';
import './views/custom-elemen/header';
import App from './views/app';


const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  hero: document.querySelector('hero-section'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
 
});
