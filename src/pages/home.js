import profileImg1 from "../imgs/profile1.jpeg";


function makeHome (){
   const content = document.querySelector('#content');
   const homepage = document.createElement('div');
   homepage.setAttribute('id','home-tab');
   const profileDiv = document.createElement('div');
   const profileImg = document.createElement('img');
   profileImg.setAttribute('src',profileImg1);
   profileImg.setAttribute('alt','Profile picture');
   profileDiv.appendChild(profileImg);
   const intro = document.createElement('div');
   intro.classList.add('intro');
   const heading = document.createElement('h1');
   heading.textContent = 'Salud, Sabor y Placer';
   intro.appendChild(heading);

   const paragraph = document.createElement('p');
   paragraph.textContent = 'Cocina Amiga busca crear una experiencia culinaria que se resume en esas tres palabras. Queremos ayudar a nuestros clientes a aprender que comer saludable no significa dejar de disfrutar la comida.'
   intro.appendChild(paragraph);

      homepage.appendChild(profileDiv);
      homepage.appendChild(intro);
      content.appendChild(homepage)

}

export default makeHome