var mensagem = "Hello World";
console.log(mensagem);
var i = 0;
var vetor = [1, 5, 25, 30, 8, 47, 9];
while (i < 10) {
    console.log(i);
    i++;
}
for (i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log("aqui " + i);
}
i = 0;
do {
    console.log("Imprime " + i);
    i++;
} while (i < 10);
try {
    for (var key in vetor) {
        switch (vetor[key]) {
            case 30:
                console.log(vetor[key]);
                break;
        }
    }
}
catch (_a) {
    console.log("Ocorreu um erro");
}
window.onload = function () {
    function showMessage(text) {
        alert(" mensagem :" + text);
    }
    function somaNumeros(n1, n2) {
        alert(n1 + n2);
    }
    function verificaPar(n1) {
        if (n1 % 2 == 0) {
            return true;
        }
        return false;
    }
    showMessage("Hello World");
    somaNumeros(5, 12);
    console.log(verificaPar(5));
};
