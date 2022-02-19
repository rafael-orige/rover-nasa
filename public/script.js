// Grid = Grid size. *IF NO SIZE IS GIVEN, SIZE WILL BE 5/5*
// Location = Where it will start inside the grid.
// Direction = Wich direction it will be facing when it starts.
// Movements = What movements the rover will make.
function handleRover(grid, location, direction, movements) {
    location = location != undefined ? location : [0, 0];
    direction = direction != undefined ? direction : "N";
    grid = grid != undefined ? grid : [5, 5];
    movements = movements != undefined ? movements : "";
    // Checks if location is inside the grid.
    var checkGrid = grid[1] >= location[1] && grid[0] >= location[0] ? true : false;
    if (!checkGrid) {
        console.log("Não está dentro do grid.");
        return null;
    }
    //
    // Ambient variables.
    var x = location[0];
    var y = location[1];
    var rotations = ["N", "E", "S", "W"];
    var rotationIndex = 0;
    var commands = movements.split("");
    //
    // Sets initial direction.
    for (var i = 0; i < rotations.length; i++) {
        if (rotations[i] === direction) {
            rotationIndex = i;
        }
    }
    function moveRoverForward(direction) {
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
    function turnRover(side) {
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
        }
        else if (rotationIndex < 0) {
            rotationIndex = 3;
        }
    }
    function handleRoverMovements(commandsInput) {
        for (var i = 0; i < commandsInput.length; i++) {
            if (commandsInput[i] === "R" || commandsInput[i] === "L") {
                turnRover(commandsInput[i]);
            }
            else if (commandsInput[i] === "M") {
                moveRoverForward(rotations[rotationIndex]);
            }
        }
    }
    handleRoverMovements(commands);
    console.log("Este \u00E9 o X: ".concat(x, "    -    Este \u00E9 o Y: ").concat(y, "    -    Este \u00E9 o \u00E2ngulo: ").concat(rotations[rotationIndex]));
}
handleRover([5, 5], [1, 2], "N", "LMLMLMLMM");
handleRover([5, 5], [3, 3], "E", "MMRMMRMRRM");
