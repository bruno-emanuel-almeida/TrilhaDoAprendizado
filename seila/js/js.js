function Enviar()
{
    var nome= document.getElementById("nome")
    var email= document.getElementById("email")


    if(nome.value!="" && nome.value)
    {
        alert(nome.value+"Agradecemos o seu contato")
    }

    else
    {
        alert("Preencha o seu nome")
    }
}