<h1>Rover Nasa</h1>

<h2>O Desafio: </h2>

A posição e localização de um rover é representada pela combinação das coordenadas e uma letra representando um dos quatro pontos cardeais de uma bússola. O planalto é representado por um grid para simplificar a navegação. Um exemplo de posição pode ser 0, 0, N, que significa que o rover está no canto inferior esquerdo e encarando o Norte.


Para controlar o rover, A NASA envia uma simples combinação de letras. As letras possíveis são "L", "R" e "M". "L" e "R" fazem o rover girar em 90 graus para esquerda ou direita respectivamente, sem move-lo do seu ponto atual. "M" significa que deverá andar para frente uma vez, mantendo a mesma direção.


Entrada do teste:

5 5

1 2 N

LMLMLMLMM

3 3 E

MMRMMRMRRM

A saída deverá ser:

1 3 N

5 1 E

<hr/>
<br/><br/>

<h2>Sobre o projeto:</h2>

O projeto Rover Nasa consiste em desenvolver um código que consiga imprimir na saída o resultado de uma série de comandos passados para um rover.
<br/><br/>


Para iniciar a função são necessários quatro propriedades, elas:

    grid: number[],
    //Tamanho do Grid.

    location: number[],
    //Localização do Rover.

    direction: string,
    //A direção para a qual o rover está direcionado.

    movements: string
    //Os movimentos que ele irá fazer a partir da posição que ele se encontra.

O próximo passo então é se certificar de que todas as variáveis tem os seus valores corretos, caso contrário, iremos então atribuir valores padrões para elas.

    location = location != undefined ? location : [0, 0];
    direction = direction != undefined ? direction : "N";
    grid = grid != undefined ? grid : [5, 5];
    movements = movements != undefined ? movements : "";

Agora, precisamos verificar se a localização passada pelo usuário se encontra dentro do grid. Se a localização for maior, a função irá finalizar com um aviso.

    const checkGrid: boolean = grid[1] >= location[1] && grid[0] >= location[0] ? true : false;

    if (!checkGrid) {
        console.log("Não está dentro do grid.");
        return null;
    }

A partir deste ponto as propriedades serão atribuidas às variáveis de ambiente para facilitar a mutação das informações.<br/>
Além disso, iremos criar também duas novas variáveis, sendo elas **rotations** e **rotationIndex**.

    let x: number = location[0];
    let y: number = location[1];
    
    let rotations: string[] = ["N", "E", "S", "W"];
    //Representa as direções que o rover poderá seguir.

    let rotationIndex: number = 0;
    //Está variavél fica responsável por movimentar o rover.

    let commands: string[] = movements.split("");
    //Aqui iremos transformar os comandos em um array para verificar um por um.

O último passo agora antes de começarmos é atribuir o valor correto do **rotationIndex** para podermos identificar a direção que o rover está encarando.

    for (let i = 0; i < rotations.length; i++) {
        if (rotations[i] === direction) {
            rotationIndex = i;
        }
    }

Neste momento estaremos dando início às operações. Há três funcões que operam todo o código, sendo elas:
- **moveRoverForward**: Recebe a direção como propriedade e move o rover nos eixos X e Y. Esta função funciona com um *Switch*.

        function moveRoverForward(direction: string) {
            switch (direction) {
                case "N":
                    y = y + 1;
                    break;

                case "S":
                    y = y - 1;
                    break;

                case "E":
                    x = x + 1;
                    break;

                case "W":
                    x = x - 1;
                    break;
            }
        }

- **turnRover**: Recebe o lado para qual o rover irá virar, sendo **R** (Direita) e **L** (Esquerda). Esta função também opera através de um *Switch*.

        function turnRover(side: string) {
            switch (side) {
                case "L":
                    rotationIndex = rotationIndex - 1;
                    break;

                case "R":
                    rotationIndex = rotationIndex + 1;
                    break;
            }

            if (rotationIndex > 3) {
                rotationIndex = 0;
            } else if (rotationIndex < 0) {
                rotationIndex = 3;
            }
        }

- **handleRoverMovements**: Por fim temos a principal função que utilizará as outras duas anteriores. Esta função recebe como propriedade o array com os comandos. Através de um loop for é possível identificar cada comando e poderemos criar um *if* para executar as funções corretamente.

        function handleRoverMovements(commandsInput: string[]) {
            for (let i = 0; i < commandsInput.length; i++) {
                if (commandsInput[i] === "R" || commandsInput[i] === "L") {
                    turnRover(commandsInput[i]);
                } else if (commandsInput[i] === "M") {
                    moveRoverForward(rotations[rotationIndex]);
                }
            }
        }

Por fim, executamos a função passando a variável com os comandos e então finalizamos com um *console.log* para exibir as informações no terminal.

    handleRoverMovements(commands);

    console.log(
        `Este é o X: ${x}    -    Este é o Y: ${y}    -    Este é o ângulo: ${rotations[rotationIndex]}`
    );
<hr/>

O projeto foi proposto pela empresa <a href="https://fidelizou.me">Fidelizou-me</a> como um processo seletivo.<br/>
<sub><sup>Muito obrigado!</sup></sub>
