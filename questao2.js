function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    while (a <= numero) {
        if (a === numero) {
            return true;
        }
        let temp = a;
        a = b;
        b = temp + b;
    }
    return false;
}

function main() {
    const numero = parseInt(prompt("Informe um número para verificar se pertence à sequência de Fibonacci: "));
    if (verificaFibonacci(numero)) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
    }
}

main();