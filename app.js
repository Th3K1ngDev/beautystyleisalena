const facebook = document.querySelector('#facebook');
const instagram = document.querySelector('#instagram');
const whatsapp = document.querySelector('#whatsapp');
const sobre = document.querySelector('#sobre');
var conteudo = document.querySelector('.conteudo')

facebook.addEventListener('click', ()=>{
    open('https://www.facebook.com/don.amora.10441')
});
instagram.addEventListener('click', ()=>{
    open('https://www.instagram.com/izalenasouzaitb/')
});
whatsapp.addEventListener('click', ()=>{
    open('https://wa.me/5593991463178?text=Ol%C3%A1.+gostaria+de+saber+sobre+as+novidade%21')
});
sobre.addEventListener('click', ()=>{
    facebook.style.marginRight = '440px';
    instagram.style.marginLeft = '440px';
    whatsapp.style.marginRight = '440px';
    sobre.style.marginLeft = '440px';

setTimeout(()=>{
    facebook.style.display = 'none';
    instagram.style.display = 'none';
    whatsapp.style.display = 'none';
    sobre.style.display = 'none';

    conteudo.innerHTML += 
    
    `
    <div class="conteudo">
    
    <h1>Qual seguimento tem essa empresa ?</h1>
    <p>Salão de beleza, vendas de roupas e cósmeticos.</p>
    <h1>Onde está localizado essa empresa fisicamente ?</h1>
    <p>26º Rua, Bairro Bom rémedio, Nª1310 Prox. Igreja prespiteriana.</p>

    <input id="localizacao" type="submit" value="Localização">
    <div class="retornar">
        <a href="./index.html"><button id="retornar">Retornar ao início!</button></a>
    </div>
    </div>

    `;
    var localizacao = document.querySelector('#localizacao');
    localizacao.addEventListener('click', ()=>{
        open('https://goo.gl/maps/XWzj1vBWjCzbiS2z5')
    });

}, 2000);






});