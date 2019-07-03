### PERGUNTA

No texto, afirmamos que a introdução do 1 na entrada inferior do flip-flop da Figura 1.3 (mantendo fixo o 0 para a entrada superior) forçará a saída do flip-flop a ser 0. Descreva a
sucessão de eventos que ocorreram neste caso, dentro do flip-flop.

![Figura 1.3](https://pbs.twimg.com/media/D-gtuQyXoAAO0Si?format=jpg&name=small)

#### RESPOSTA

- OPERAÇÃO: ENTRADA INFERIOR

Visto pelo bit 1 da entrada inferior, como a primeira porta lógica pelo qual ele passa é uma porta NOT, o bit 1 se convertera em sua negação 0. Logo após, o bit 0 passa por uma porta AND (que exige que os dois bits de sua entrada sejam 1 para a saída ser 1, e tudo diferente disto resulta em 0), como um bit é 0, sua saída, independente do outro bit, será 0.

![Figura 1.2](https://pbs.twimg.com/media/D9mgNsFXUAAaAZH?format=jpg&name=small)

- OPERAÇÃO: ENTRADA SUPERIOR

Agora, visto pelo bit 0 superior, sua primeira porta lógica pelo qual passa é uma porta OR (desde que tenha um bit 1, sua saída será 1 independente de que o outro bit seja 1 ou 0). Como a saída da porta AND é inevitavelmente 0, a operação da porta OR é entre o bit 0 fornecido pela entrada inferior e o bit 0 fornecido pela entrada superior, a porta OR fornece a **saida 0** pois não há nenhum valor 1.
