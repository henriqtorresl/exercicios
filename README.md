Estágio Ribeirão Preto - 2024

1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);



Ao final do processamento, qual será o valor da variável SOMA?



2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;



3) Descubra a lógica e complete o próximo elemento:



a) 1, 3, 5, 7, ___

b) 2, 4, 8, 16, 32, 64, ____

c) 0, 1, 4, 9, 16, 25, 36, ____

d) 4, 16, 36, 64, ____

e) 1, 1, 2, 3, 5, 8, ____

f) 2,10, 12, 16, 17, 18, 19, ____



4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

 

5) Escreva um programa que inverta os caracteres de um string.


IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;

- Respostas:

1) 91

3)

a) 1, 3, 5, 7, 9

b) 2, 4, 8, 16, 32, 64, 128

c) 0, 1, 4, 9, 16, 25, 36, 49

d) 4, 16, 36, 64, 100

e) 1, 1, 2, 3, 5, 8, 13

f) 2, 10, 12, 16, 17, 18, 19, 20

4) Para descobrir qual interruptor controla cada lâmpada em uma sala com três interruptores e três lâmpadas, siga estes passos: Primeiro, ligue o primeiro interruptor e aguarde um tempo. Em seguida, desligue o primeiro interruptor e ligue o segundo interruptor. Após isso, entre na sala onde estão as lâmpadas. A lâmpada que estiver acesa corresponderá ao interruptor que foi ligado e desligado inicialmente, ou seja, o primeiro interruptor. Identifique então a lâmpada que está quente, indicando que foi acesa anteriormente pelo primeiro interruptor. Ao tocar nela, confirme qual interruptor está conectado a essa lâmpada. O interruptor restante, que não foi tocado e nem foi o primeiro a ser ligado, corresponderá à lâmpada que não foi acesa anteriormente, ou seja, ao segundo interruptor. Dessa forma, em apenas duas idas até a sala das lâmpadas, é possível determinar qual interruptor controla cada lâmpada.