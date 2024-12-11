//EX1
let alunos = ['Ana', 'Carlos', 'João', 'Maria', 'Pedro'];
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}

//EX2
let numero = parseInt(prompt("Digite um número para ver sua tabuada:"));
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

//EX3
let notas = [];
for (let i = 0; i < 5; i++) {
    let nota = parseFloat(prompt(`Digite a nota ${i+1}:`));
    notas.push(nota);
}
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
let media = soma / notas.length;
console.log(`A média das notas é: ${media}`);

// EX4
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//EX5
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//EX6
let materiais = ['Caderno', 'Caneta', 'Lápis', 'Borracha', 'Régua'];
for (let i = 0; i < materiais.length; i++) {
    console.log(materiais[i]);
}

//EX7
let N = parseInt(prompt("Digite um número N:"));
let somaN = 0;
for (let i = 1; i <= N; i++) {
    somaN += i;
}
console.log(`A soma dos números de 1 a ${N} é: ${somaN}`);

//EX8
let num = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;
for (let i = 1; i <= num; i++) {
    fatorial *= i;
}
console.log(`O fatorial de ${num} é: ${fatorial}`);

//EX9
let palavra = prompt("Digite uma palavra:");
let vogais = 'aeiouAEIOU';
let contagemVogais = 0;
for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i])) {
        contagemVogais++;
    }
}
console.log(`A palavra ${palavra} tem ${contagemVogais} vogais.`);

//EX10
let numeros = [];
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt(`Digite o número ${i+1}:`));
    numeros.push(numero);
}
for (let i = 0; i < numeros.length; i++) {
    console.log(`${numeros[i]} multiplicado por 2 é: ${numeros[i] * 2}`);
}

//EX11
let palavraInvertida = '';
let palavraOriginal = prompt("Digite uma palavra:");
for (let i = palavraOriginal.length - 1; i >= 0; i--) {
    palavraInvertida += palavraOriginal[i];
}
console.log(`A palavra invertida é: ${palavraInvertida}`);

//EX12
let num1 = parseInt(prompt("Digite o primeiro número do intervalo:"));
let num2 = parseInt(prompt("Digite o segundo número do intervalo:"));
let somaPares = 0;
for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
        somaPares += i;
    }
}
console.log(`A soma dos números pares no intervalo de ${num1} a ${num2} é: ${somaPares}`);

//EX13
let frase = prompt("Digite uma frase:");
let contagemCaracteres = 0;
for (let i = 0; i < frase.length; i++) {
    if (frase[i] !== ' ') {
        contagemCaracteres++;
    }
}
console.log(`A frase tem ${contagemCaracteres} caracteres (sem contar espaços).`);

//EX14
let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}

//X15
let numeroPotencia = parseInt(prompt("Digite um número para calcular suas potências de 1 a 5:"));
for (let i = 1; i <= 5; i++) {
    console.log(`${numeroPotencia}^${i} = ${Math.pow(numeroPotencia, i)}`);
}

//EX16
let Nquadrados = parseInt(prompt("Digite um número N para criar um array de quadrados:"));
let quadrados = [];
for (let i = 1; i <= Nquadrados; i++) {
    quadrados.push(i * i);
}
console.log("Array de quadrados:", quadrados);

//EX17
let linhas = 5;
for (let i = 1; i <= linhas; i++) {
    let linha = '';
    for (let j = 1; j <= i; j++) {
        linha += '*';
    }
    console.log(linha);
}

//EX18
let notasPonderadas = [];
let pesos = [];
let somaNotas = 0;
let somaPesos = 0;
for (let i = 0; i < 3; i++) {
    let nota = parseFloat(prompt(`Digite a nota ${i+1}:`));
    let peso = parseFloat(prompt(`Digite o peso da nota ${i+1}:`));
    notasPonderadas.push(nota);
    pesos.push(peso);
    somaNotas += nota * peso;
    somaPesos += peso;
}
let mediaPonderada = somaNotas / somaPesos;
console.log(`A média ponderada das notas é: ${mediaPonderada}`);

//EX 19
let numeroDivisores = parseInt(prompt("Digite um número para contar seus divisores:"));
let divisores = 0;
for (let i = 1; i <= numeroDivisores; i++) {
    if (numeroDivisores % i === 0) {
        divisores++;
    }
}
console.log(`O número ${numeroDivisores} tem ${divisores} divisores.`);

//EX20
let participantes = [];
let qtdParticipantes = parseInt(prompt("Quantos participantes?"));
for (let i = 0; i < qtdParticipantes; i++) {
    let nome = prompt(`Digite o nome do participante ${i+1}:`);
    participantes.push(nome);
}
let vencedor = participantes[Math.floor(Math.random() * participantes.length)];
console.log(`O vencedor do sorteio é: ${vencedor}`);
