// Grid = Grid size. *IF NO SIZE IS GIVEN, SIZE WILL BE 5/5*
// Location = Where it will start inside the grid.
// Direction = Wich direction it will be facing when it starts.
// Movements = What movements the rover will make.

function handleRover(grid: number[], location: number[], direction: string, movements: string): void | null {
    location = location != undefined ? location : [0, 0];
    direction = direction != undefined ? direction : "N";
    grid = grid != undefined ? grid : [5, 5];
    movements = movements != undefined ? movements : "";

    // Checks if location is inside the grid.
    const checkGrid: boolean = grid[1] >= location[1] && grid[0] >= location[0] ? true : false;

    if (!checkGrid) {
        console.log("Não está dentro do grid.");
        return null;
    }
    //

    // Ambient variables.
    let x: number = location[0];
    let y: number = location[1];
    let rotations: string[] = ["N", "E", "S", "W"];
    let rotationIndex: number = 0;
    let commands: string[] = movements.split("");
    //

    // Sets initial direction.
    for (let i = 0; i < rotations.length; i++) {
        if (rotations[i] === direction) {
            rotationIndex = i;
        }
    }

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

    function handleRoverMovements(commandsInput: string[]) {
        for (let i = 0; i < commandsInput.length; i++) {
            if (commandsInput[i] === "R" || commandsInput[i] === "L") {
                turnRover(commandsInput[i]);
            } else if (commandsInput[i] === "M") {
                moveRoverForward(rotations[rotationIndex]);
            }
        }
    }

    handleRoverMovements(commands);

    console.log(
        `Este é o X: ${x}    -    Este é o Y: ${y}    -    Este é o ângulo: ${rotations[rotationIndex]}`
    );
}

handleRover([5, 5], [1, 2], "N", "LMLMLMLMM");

handleRover([5, 5], [3, 3], "E", "MMRMMRMRRM");