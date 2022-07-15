let menuItems = ['chicken','res','sandwich','helado','etc'];

function makeMenu (){
   const content = document.querySelector('#content');
   const menupage = document.createElement('div');
   menupage.setAttribute('id','menu-tab');

   for (let i = 0; i < menuItems.length; i++){
      const div = document.createElement('div');
         div.setAttribute('data-item',`${i}`);
      const h1 = document.createElement('h1');
         h1.textContent = `Opcion #${i + 1}`;
         div.appendChild(h1);
      const img = document.createElement('img');
         img.setAttribute('src',`../src/plato${i}.png`);
         img.classList.add('menu-img');
      div.appendChild(img);

      menupage.appendChild(div);
   }
      content.appendChild(menupage)

}

export default makeMenu