// 1 ) Exemplificando como declarar uma variável do tipo undefined, vazio e com valor.

let valor // declarando a variável como o valor "undefined"
console.log(valor)

let valor2 = null // Declarando a variável com o valor "vazio/null"
console.log(valor2)

let valor3 = 'fiap'
console.log(valor3) // Declarando a variável com valor.


//  2 ) Declarando a variável como String, depois convertendo para float, e apresentando o tipo da variável.

let variavel = '123'
console.log(typeof variavel) // Declarando a variável como "String".

let variavel2 = parseFloat(variavel)
 console.log(variavel2) // Convertendo a variável "String" para "Float".
 
 console.log(typeof variavel2) // Apresentando o tipo da variável depois da conversão.

// 3 ) Declarando a variável como Int, depois convertendo para float, e apresentando o tipo da variável.

let numeroInteiro = 456
console.log(numeroInteiro)
console.log(typeof numeroInteiro) // Declarando a variável como "Int"

let numeroFloat = numeroInteiro * 1.0 // Convertendo a variável "Int" para "Float"
console.log(numeroFloat) 
console.log(typeof numeroFloat) // Apresentando o tipo da variável.