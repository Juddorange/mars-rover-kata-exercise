
/*function print_rover(rover){
    for(var boom in rover){
        console.log(boom);
        console.log(rover[boom]);
    }
}
*/

function turnLeft(rover){
    console.log("turnLeft was called!");
    switch (rover.direction){
        case "N":
            rover.direction = "W";
            break;
        case "S":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "N";
            break;
        case "W":
            rover.direction = "S";
            break;
    }
  console.log("The new direction is " + rover.direction);
}

function turnRight(rover){
    console.log("turnRight was called!");
    switch (rover.direction){
        case "N":
            rover.direction = "E";
            break;
        case "S":
            rover.direction = "W";
            break;
        case "E":
            rover.direction = "S";
            break;
        case "W":
            rover.direction = "N";
            break;
    }
  console.log("The new direction is " + rover.direction);
}

function moveForward(rover, une_grid){
        console.log("moveForward was called");
    if (rover.direction === "N" && rover.y>0 && une_grid[rover.y-1][rover.x]!="O"){        
            rover.y -= 1;
            console.log("The new position is " + rover.x + "," + rover.y);}
    else if (rover.direction === "S" && rover.y<9 && une_grid[rover.y+1][rover.x]!="O"){
            rover.y += 1;
            console.log("The new position is " + rover.x + "," + rover.y);}
    else if (rover.direction === "E" && rover.x<9 && une_grid[rover.y][rover.x+1]!="O"){
            rover.x += 1;
            console.log("The new position is " + rover.x + "," + rover.y);}
    else if (rover.direction === "W" && rover.x>0 && une_grid[rover.y][rover.x-1]!="O"){
            rover.x -= 1;
            console.log("The new position is " + rover.x + "," + rover.y);}
    rover.travelLog.push([rover.x, rover.y]);
}

function moveBackward(rover, une_grid){
    console.log("moveBackward was called");
    if (rover.direction === "N" && rover.y<9 && une_grid[rover.y+1][rover.x]!="O"){
            rover.y += 1;
            console.log("The new position is " + rover.x + "," + rover.y);}
    else if (rover.direction === "S" && rover.y>0 && une_grid[rover.y-1][rover.x]!="O"){
            rover.y -= 1;
            console.log("The new position is " + rover.x + "," + rover.y);}
    else if (rover.direction === "E" && rover.x>0 && une_grid[rover.y][rover.x-1]!="O"){
            rover.x -= 1;
            console.log("The new position is " + rover.x + "," + rover.y);}
    else if (rover.direction === "W" && rover.x<9&& une_grid[rover.y][rover.x+1]!="O"){
            rover.x += 1;
            console.log("The new position is " + rover.x + "," + rover.y);}
    rover.travelLog.push([rover.x, rover.y]);
}


function goForward(list, rover, une_grid){
    validateLetter();
    for(let i = 0; i <list.length; i++){
        switch (list[i]){
            case "f":
                moveForward(rover, une_grid);
                break;
            case "r":
                turnRight(rover);
                break;
            case "l":
                turnLeft(rover);
                break;
            case "b":
                moveBackward(rover, une_grid);
                break;
            default:
                console.log("stop");
        }  
        console.log(i);
    }
}

function validateLetter() {
  var patt = new RegExp("fbrl");

  if (patt.test(commands)) {
    console.log("You are not using the write letter. Try again !");
  } else {
    console.log("The letter are correct. You can continue");
  }
}

function log_travelLog(rover){
    for(let i = 0; i<rover.travelLog.length; i++){
        console.log(rover.travelLog[i]);
    }
}

var rover = {
    direction: "N", 
    x: 0,
    y: 0,
    travelLog: [],
}


var grid = [
    [",","O",",",",",",",",",",",",",",",","],
    [",",",","O",",",",",",",",",",",",",","],
    [",",",",",","O",",",",",",",",",",",","],
    [",",",",",",",","O",",",",",",",",",","],
    [",",",",",",",",",","O",",",",",",",","],
    [",",",",",",",",",",",","O",",",",",","],
    [",",",",",",",",",",",",",","O",",",","],
    [",",",",",",",",",",",",",",",","O",","],
    [",",",",",",",",",",",",",","O",",",","],
    [",",",",",",",",",",",","O",",",",",","],
];

var commands = "rffrfflfrff";

goForward(commands, rover, grid);

log_travelLog(rover);

//exemple nested loop matrice
/* 
for (var i = 0; i < grid.length; i++){
  var row = grid[i];
  for (var j = 0; j < row.length; j++){
    var column = row[j];
    if (column === "O"){
      console.log("Obstacle Found at: " + i + ", " + j);
        moveBackward(rover);}
    else {moveForward(rover);}
    }
  }

print_rover(rover);
*/