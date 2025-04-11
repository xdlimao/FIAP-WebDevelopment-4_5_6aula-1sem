//DECLARARAÇÕES E VARIAVEIS

var nome ="fiap";
console.log(nome);

let idade = 19;
console.log(idade)

const sobrenome="Fiapinho";
console.log(sobrenome)

//declarando uma variavel indefinida
let nome1;
console.log(nome1)

//declarando uma variavel nula
let nome2=null;
console.log(nome2)

//TIPOS DE VARIAVEIS

let exemplo1 =10;
console.log(typeof exemplo1)

let exemplo2 ="Tecnologia";
console.log(typeof exemplo2)

let exemplo3 =true;
console.log(typeof exemplo3)

let exemplo4={};
console.log(typeof exemplo4)

let exemplo5 =[];
console.log(typeof exemplo5)

//CONVERSÕES

let numFloat =123.456;
console.log(parseInt(numFloat));

let numString ="123.456";
console.log(parseFloat(numString));

let numInt = 123456
console.log(numInt.toString())

//METODOS

//length = verifica o tamanho da string
let frase ="O mundo da tecnologia";
console.log(frase.length);

//indexOf -retorna um trecho do texto

let texto="A programação indomável e sustentavel";
console.log(texto.indexOf("ão"))

console.log(texto.lastIndexOf("ão"))


//slice - retorna um trecho do texto com inicio e final

let info ="Processamento de ponta";
console.log(info.slice(16,25))

//OPERADORES ARITIMÉTICOS

const num1=10;
const num2=20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

//OPERADORES LÓGICOS

const num3=20;
const num4=30;

console.log(num3 < num4);
console.log(num3 > num4 && num4 < num3);
console.log(num3 < num4 || num4 < num3); 

//OPERADORES DE COMPARAÇÃO

console.log(num3 == num4); // (float 30 == int 30 -> True)
console.log(num3 === num4); //aqui o tipo e o valor tem que ser iguais (int 30 === int 30 -> True)
console.log(num3 != num4); // float 30 != float 20 -> True
console.log(!(num3 == num4)); //(20 == 30) -> False, porém com o !, ele inverte, então -> True

//CONDICIONAL
if(true){
    console.log("é verdadeiro")
}

let valor = 1
if (valor == 1){
    console.log(valor)
}

let nome = "peralta"
if (nome == "peralta"){
    console.log("Peralta")
}else{
    console.log("Não é o peralta")
}

let idade2 = 18
if(idade2 > 18){
    console.log(idade2)
}else if(idade2 == 18){
    console.log(idade2)
}else{
    console.log(idade2)
}

//Switch case
let torre = "macaco dardo"
switch (torre){
    case "macaco dardo":
        console.log("jamanta")
        break
    case "quincy":
        console.log("muito ruim")
        break
    case "sauda":
        console.log("boa")
        break
    default:
        console.log("na duvida, sniper")
        break
}
    

//ternario
//? -> True (if)
//: -> False (else)
let eae = 1 == 1 ? "Salve" : "oi"


//ESTRUTURA DE REPETIÇÃO
for (let index = 0; index < 10; index++) {
    console.log(i);
}

let c = 0
while(c < 10){
    console.log(c)
    c++
}

let f = 0
do{ //Ele executa de primeira e depois verifica o while
    console.log(f)
    f++
}while(f < 0)


    //Função
function salve(a){
    console.log("Salve")
    console.log("a")
}
salve("Peralta")