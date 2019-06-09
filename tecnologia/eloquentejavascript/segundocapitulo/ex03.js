/* PERGUNTA:

Escreva um programa que cria uma string que representa uma grade 8x8, usando novas linhas para separar os caracteres. A cada posição da grade existe um espaço ou um caractere "#". Esses caracteres formam um tabuleiro de xadrez.
*/

// RESPOSTA:

var tab;
for(var i=0; i<=7;i++){
	for(var j=0; j<=7;i++){
		if(i%2==0 && j){
			tab = "#";
			console.log(tab);
        }else{
			tab = " ";
			console.log(tab);
        }
	}
}
