function somar()    
{
    var a, b, c

    a=parseFloat(document.getElementById(n1).value)
    b=parseFloat(document.getElementById(n2).value)
    c=a+b

    document.getElementById("res").innerHTML = `O resultado da soma é ${c}`  


}