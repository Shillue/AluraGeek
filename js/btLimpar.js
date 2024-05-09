const btnLimpar = document.querySelector('.add__produto__limpar');

btnLimpar.addEventListener('click', function(){
    const campos = document.querySelectorAll('.campo__input');

    campos.forEach(function(campo){
        campo.value = '';
    })
})