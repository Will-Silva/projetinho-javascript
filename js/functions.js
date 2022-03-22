function bhaskara(){
    var baskA = parseInt(window.prompt('Informe o valor inteiro de a:'));
    var baskB = parseInt(window.prompt('Informe o valor inteiro de b:'));
    var baskC = parseInt(window.prompt('Informe o valor inteiro de c:'));
    var coeficiente1 ;
    var coeficiente2 ;
    
    var delta = (baskB * baskB) - 4 * baskA * baskC;
    window.alert("Valor de Delta => " + delta + "");

    if(delta < 0){
        window.alert("Para Delta negativo, não existem raízes reais.");  
      } else{
        
        window.alert("Para Delta positivo, raízes diferentes: ");  
        
        coeficiente1 = (-baskB + Math.sqrt(delta)) / (2 * baskA);
        coeficiente2 = (-baskB - Math.sqrt(delta)) / (2 * baskA);
        
        window.alert("x' = " + coeficiente1 );
        window.alert("x'' = " + coeficiente2 );
      }
}
function calcularSalario(){
    var salarioBase = parseInt(window.prompt('Informe o seu salario base:'));
    var salarioFinal ;

    var bonus = (salarioBase * 0.05);
    var imposto = (salarioBase * 0.07);
    var salarioFinal = (salarioBase + bonus - imposto);
    window.alert(
        'Salario Base: R$ ' + salarioBase + '\n' +
        'Valor da Gratificação: R$ ' + bonus + '\n' +
        'Valor do desconto: R$ ' + imposto + '\n' +
        'Salario Final: R$' + salarioFinal
    );
}

function produto(){
    var nomeProduto = String(window.prompt('Informe o nome do produto:'));
    var quantidadeProduto = parseInt(window.prompt('informe a quantidade de produtos:'));
    var valorUnitario = parseInt(window.prompt('informe o valor por unidade do produto:'));

    var valorTotal = (valorUnitario * quantidadeProduto);
    var valorJuros = (valorTotal * 0.035);
    var valorJurosFinal = (valorTotal + valorJuros);
    var valorDesconto = (valorTotal * 0.025);
    var ValorFinalDesconto = (valorTotal - valorDesconto);

    window.alert(
        'Nome do produto: ' + nomeProduto + '\n' +
        'quantidade de produtos: ' + quantidadeProduto + '\n' +
        "valor Unitario: R$ " + valorUnitario + '\n' +
        'valor Total: R$ ' + valorTotal + '\n' +
        'Valor com juros: R$ ' + valorJurosFinal + '\n' + 
        'Valor com desconto: R$ ' + ValorFinalDesconto
    );

}

function mediaAluno(){
    var nomeAluno = String(window.prompt('Informe o nome do aluno: '));
    var raAluno = parseInt(window.prompt('informe o RA:'));
    var nota1 = parseInt(window.prompt('informe a nota 1: '));
    var nota2 = parseInt(window.prompt('informe a nota 2: '));

    var somaNotasAluno = (nota1 + nota2);
    var resultadoMedia = (somaNotasAluno / 2);
    window.alert(
        'Nome do aluno: ' + nomeAluno + '\n' +
        'RA do aluno:' + raAluno + '\n' +
        'Nota 1:' + nota1 + '\n' +
        'Nota 2:' + nota2 + '\n' +
        'media do aluno: ' + resultadoMedia
    );

    if( resultadoMedia > 6){
        window.alert('O aluno foi aprovado, parabens!!')
    } else {
        window.alert('o aluno foi reprovado')
    } 
}

function numeroPositivo(){
    var numero1 = parseInt(window.prompt('Insira um valor para verificar'))

    if(numero1 < 0){
        window.alert('o numero é negativo')
    }
    else{
        window.alert('o numero é positivo')
    }
}

function parOuImpar(){
    var numeroTeste = parseInt(window.prompt('Insira um valor para verificar'))

    if(numeroTeste  % 2==0){
        window.alert('o numero é par')
    }
    else{
        window.alert('o numero é impar')
    }
}