

function loadPage(){
   const container = document.querySelector('#content');

   const tabs = document.createElement('div');
   tabs.setAttribute('id','tabs');

   const homebtn = document.createElement('button');
   homebtn.setAttribute('id','homebtn');
   homebtn.classList.add('tab');
   homebtn.textContent = 'HOME';
   tabs.appendChild(homebtn)

   const menubtn = document.createElement('button');
   menubtn.setAttribute('id','menubtn');
   menubtn.classList.add('tab');
   menubtn.textContent='MENU';
   tabs.appendChild(menubtn);

   const contactbtn = document.createElement('button');
   contactbtn.setAttribute('id','contactbtn');
   contactbtn.classList.add('tab');
   contactbtn.textContent='CONTACT';
   tabs.appendChild(contactbtn);

   const header = document.createElement('div');
   header.setAttribute('id','header');

   const headerimg = document.createElement('img');
   headerimg.setAttribute('src','../src/logo1nb.png');
   headerimg.setAttribute('alt','Cocina amiga logo');
   header.appendChild(headerimg);
   
   container.appendChild(tabs);
   container.appendChild(header);

}

export default loadPage;