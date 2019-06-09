/* PERGUNTA:

Escreva um programa que imprima usando console.log() todos os números de 1 a 100 com duas exceções. Para números divisíveis por 3, imprima Fizz ao invés do número, e para números divisíveis por 5 (e não 3), imprima Buzz.

Quando o programa estiver funcionando, modifique-o para imprimir FizzBuzz para números que são divisíveis ambos por 3 e 5 (e continue imprimindo Fizz e Buzz para números divisíveis por apenas um deles). */

// RESPOSTA:

var counter = 1;
while(counter <= 100){
	
	if(counter % 5 === 0 && counter % 3 ==! 0){ // Divisivel por 5 mas não por 3
		console.log('Buzz');
	}else if(counter % 3 === 0){ // Divisivel por 3
		if(counter % 5 === 0){ // Divisilvelpor 3 e 5
			console.log('FizBuzz');
		}else{
			console.log('Fizz');
		}
    }else{ // Números não divisíveis por 3 e 5
		console.log(counter);	
	}
	counter+=1;
};
