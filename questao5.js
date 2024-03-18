function inverterString(string) {
    let stringAoContrario = '';

    for (let i = string.length-1; i >= 0; i--) {
        stringAoContrario += string[i];
    }

    console.log(stringAoContrario);
}

function main() {
    const string = prompt("Informe uma string: ");
    
    inverterString(string);
}

main();