import './style.scss';
import loadPage from './page-load.js';
import makeHome from './home';
import makeMenu from './menu.js';
import makeContact from './contact';  

loadPage()

homebtn.addEventListener('click',makeHome);
menubtn.addEventListener('click',makeMenu);
contactbtn.addEventListener('click',makeContact);

