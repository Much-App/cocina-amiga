import './styles/style.scss';
import {loadPage , reset} from './page-load.js';
import makeHome from './pages/home';
import makeMenu from './pages/menu';
import makeContact from './pages/contact';  

loadPage();
makeHome();



homebtn.addEventListener('click',reset);
menubtn.addEventListener('click',reset);
contactbtn.addEventListener('click',reset);
homebtn.addEventListener('click',makeHome);
menubtn.addEventListener('click',makeMenu);
contactbtn.addEventListener('click',makeContact);


 

