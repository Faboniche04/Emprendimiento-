import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { Home } from './views/Home.js';
import { Contact } from './views/Contact.js';

const app = document.getElementById('app');

function render(view) {
  app.innerHTML = `
    ${Navbar()}
    ${view()}
    ${Footer()}
  `;
}

function router() {
  const hash = location.hash;
  if (hash === '#contact') {
    render(Contact);
  } else {
    render(Home);
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
