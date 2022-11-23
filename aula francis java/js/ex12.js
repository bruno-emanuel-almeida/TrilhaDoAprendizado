var dodge=[81,100,88,40]

//alert(dodge)
dodge[1]=12

//alert(dodge[2])

lista=["Zeca", 80, "Rua A", "Irati", "PR", 1900, true]

alert (lista)

for( var i=0; i<lista.length;i++)

{
    document.write("<h2>"+lista[i]+"</h2>")
}


lista.push("84500-000")// adiciona elemento na última posição
alert(lista)
lista.pop()// remove um elemento da lista
alert(lista)