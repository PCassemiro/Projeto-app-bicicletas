//todo-Olhar se existe o e-mail e senha no banco de dados
function entrar() {
    var email= document.getElementById('email').value;
    var senha= document.getElementById('senha').value;
    if (email && senha) {
        window.location.href="../../Menu/index.html"  
    }else{
        window.alert('senha ou E-Mail incorretos')
    }
    }
       

    

