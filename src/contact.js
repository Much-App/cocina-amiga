
function makeContact (){
   const content = document.querySelector('#content');

   const contactpage = document.createElement('div');
   contactpage.setAttribute('id','contact-tab');

   const msg = document.createElement('div');
      msg.setAttribute('id','contact-msg');
      const msgh1 = document.createElement('h1');
      msgh1.textContent = 'Contactanos! Responderemos todas tus preguntas y nos encantaria recibir tu feedback.';
      msg.appendChild(msgh1);

   const emailList = document.createElement('div');
      emailList.setAttribute('id','email-list');
      const inscribete = document.createElement('p');
      inscribete.textContent = 'Inscribete a nuestro boletin para recibir ofertas, noticias y recursos!';
      emailList.appendChild(inscribete);
      const emailInput = document.createElement('input');
      emailInput.setAttribute('type','email');
      emailList.appendChild(emailInput);
      const emailBtn = document.createElement('button');
      emailBtn.textContent = 'Enviar';
      emailList.appendChild(emailBtn);

   const download = document.createElement('div');
      download.setAttribute('id','download-menu');
      const pMenu = document.createElement('p');
      pMenu.textContent = 'Descarga nuestros menus!';
      download.appendChild(pMenu);
      const monthBtn1 = document.createElement('button');
      monthBtn1.textContent = 'Julio';
      download.appendChild(monthBtn1);
      const monthBtn2 = document.createElement('button');
      monthBtn2.textContent = 'Agosto';
      download.appendChild(monthBtn2);
      const monthBtn3 = document.createElement('button');
      monthBtn3.textContent = 'Septiembre';
      download.appendChild(monthBtn3);

   const feedback = document.createElement('div');
      feedback.setAttribute('id','feedback');
      const pFeedback = document.createElement('p');
      pFeedback.textContent = 'Escribenos tus sugerencias o quejas!'
      feedback.appendChild(pFeedback);
      const label1 = document.createElement('label');
      label1.textContent='Correo Electronico';
      feedback.appendChild(label1);
      const inputFeed1 = document.createElement('input');
      inputFeed1.setAttribute('type','email');
      inputFeed1.setAttribute('placeholder','usuario@gmail.com');
      feedback.appendChild(inputFeed1);
      const label2 = document.createElement('label');
      label2.textContent = 'Mensaje';
      feedback.appendChild(label2);
      const inputFeed2 = document.createElement('input');
      inputFeed2.setAttribute('type','text');
      inputFeed2.setAttribute('id','feedback-input');
      feedback.appendChild(inputFeed2);

   contactpage.appendChild(msg);
   contactpage.appendChild(emailList);
   contactpage.appendChild(download);
   contactpage.appendChild(feedback);
   content.appendChild(contactpage);

}

export default makeContact