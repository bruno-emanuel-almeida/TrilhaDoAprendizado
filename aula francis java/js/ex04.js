var a, b, c, d, e 

a=prompt("O que é que você quer fazer meu caro gafanhoto? (soma=1, div=2, mult=3)")


if(a==1)
    {
        var ab, bc, cd
      ab=parseFloat (prompt("Digite aqui os valores"))
      bc=parseFloat (prompt("Agora o outro parceiro"))
      cd= (ab+bc)

      alert(cd)
      document.write("<h2> O resultado da soma é "+cd)
    }

    
if(a==2)
{
    var ab, bc, cd
    ab=parseFloat (prompt("Digite aqui os valores"))
    if(ab==0)
    {
        alert("erro!!!!!!!!!!!!!!!")
    }
    bc=parseFloat (prompt("Agora o outro parceiro"))
    
    if(bc==0)
    {
        alert("erro!!!!!!!!!!!!!!!!!!!")
    }
    cd= (ab/bc)

    alert(cd)
    document.write("<h2> O resultado da divisão é "+cd)
}


if(a==3)
    {
        var ab, bc, cd
        ab=parseFloat (prompt("Digite aqui os valores"))
        bc=parseFloat (prompt("Agora o outro parceiro"))
        cd= (ab*bc)
        
        alert(cd)
        document.write("<h2> O resultado da multiplicação é "+cd)
    }

   