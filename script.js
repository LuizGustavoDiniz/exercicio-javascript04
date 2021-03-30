//programa para pegar o valor do salario de uma pessoa  e mostrar pra ela com 15% de desconto


var nome = prompt('qual seu nome:')

var empresa = prompt('qual o nome da empresa em que voce trabalha:')

var salario = Number(prompt('qual seu salário:'))

var aumento = salario*15/100

alert(`olá ${nome} \n você é funcionário da empresa ${empresa} \n seu salário é ${salario.toLocaleString('pt-br' , {style:'currency' , currency:'BRL'})} reais \n e seu salário com aumento de 15% é ${(salario + aumento).toLocaleString('pt-br' , {style:'currency' , currency:'BRL'})} reais`)