const nome_apresentacao = document.getElementById('nome-apresentacao');

nome_apresentacao.addEventListener("mouseover", function() {
    console.log("mouse entrou no elemento");
    this.style.color = "#D4CDAC";
});

nome_apresentacao.addEventListener("mouseout" , function(){
    console.log("mouse saiu do elemento");
    this.style.color = "";
});


const evento_do_h2 = document.querySelectorAll('section h2');

evento_do_h2.forEach(corzinha_frufru_h2 => {
   corzinha_frufru_h2.addEventListener('click', () => {
        corzinha_frufru_h2.classList.toggle('titulo-clicado');
    console.log("Clicou!");
    });
});

