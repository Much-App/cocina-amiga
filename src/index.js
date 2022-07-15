import './style.scss';
import {loadPage , reset} from './page-load.js';
import makeHome from './home';
import makeMenu from './menu.js';
import makeContact from './contact';  

loadPage();
makeHome();



homebtn.addEventListener('click',reset);
menubtn.addEventListener('click',reset);
contactbtn.addEventListener('click',reset);
homebtn.addEventListener('click',makeHome);
menubtn.addEventListener('click',makeMenu);
contactbtn.addEventListener('click',makeContact);


 

