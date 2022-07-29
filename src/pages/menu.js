
import item0 from "../imgs/plato0.png";
import item1 from "../imgs/plato1.png";
import item2 from "../imgs/plato2.png";
import item3 from "../imgs/plato3.png";
import item4 from "../imgs/plato4.png";
import item5 from "../imgs/plato5.png";
import item6 from "../imgs/plato6.png";

function makeMenu (){   
   const content = document.querySelector('#content');
   const menupage = document.createElement('div');
   menupage.setAttribute('id','menu-tab');

      const div0 = document.createElement('div');
         const h0 = document.createElement('h1');
         h0.textContent = `Opcion #1`;
         div0.appendChild(h0);
         const img0 = document.createElement('img');
         img0.setAttribute('src',item0);
         img0.classList.add('menu-img');
         div0.appendChild(img0);
         menupage.appendChild(div0);
      const div1 = document.createElement('div');
         const h1 = document.createElement('h1');
         h1.textContent = `Opcion #2`;
         div1.appendChild(h1);
         const img1 = document.createElement('img');
         img1.setAttribute('src',item1);
         img1.classList.add('menu-img');
         div1.appendChild(img1);
         menupage.appendChild(div1);
      const div2 = document.createElement('div');
         const h2 = document.createElement('h1');
         h2.textContent = `Opcion #2`;
         div2.appendChild(h2);
         const img2 = document.createElement('img');
         img2.setAttribute('src',item2);
         img2.classList.add('menu-img');
         div2.appendChild(img2);
         menupage.appendChild(div2);
      const div3 = document.createElement('div');
         const h3 = document.createElement('h1');
         h3.textContent = `Opcion #3`;
         div3.appendChild(h3);
         const img3 = document.createElement('img');
         img3.setAttribute('src',item3);
         img3.classList.add('menu-img');
         div3.appendChild(img3);
         menupage.appendChild(div3);
      const div4 = document.createElement('div');
         const h4 = document.createElement('h1');
         h4.textContent = `Opcion #4`;
         div4.appendChild(h4);
         const img4 = document.createElement('img');
         img4.setAttribute('src',item4);
         img4.classList.add('menu-img');
         div4.appendChild(img4);
         menupage.appendChild(div4);
      const div5 = document.createElement('div');
         const h5 = document.createElement('h1');
         h5.textContent = `Opcion #5`;
         div5.appendChild(h5);
         const img5 = document.createElement('img');
         img5.setAttribute('src',item5);
         img5.classList.add('menu-img');
         div5.appendChild(img5);
         menupage.appendChild(div5);
      const div6 = document.createElement('div');
         const h6 = document.createElement('h1');
         h6.textContent = `Opcion #6`;
         div6.appendChild(h6);
         const img6 = document.createElement('img');
         img6.setAttribute('src',item6);
         img6.classList.add('menu-img');
         div6.appendChild(img6);
         menupage.appendChild(div6);



      content.appendChild(menupage)

}



export default makeMenu