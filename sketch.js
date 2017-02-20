var grid = []
var n = 0;

function setup() {
	createCanvas(400, 400);
	
	frameRate(1);
	
	for (var x = 0; x * 10 < height; x ++) {
		grid[x] = [];
	}
	for (var x = 0; x * 10 < width; x ++) {
		for (var y = 0; y * 10 < height; y ++) {
			grid[x][y] = new Grid(10 * x + 10, 10 * y + 10, "white", "black", true);
		}
	}
	grid[width / 20][height / 20].col = "red";
}

function draw() {
  for (var x = 0; x < grid.length; x ++) {
  	for (var y = 0; y < grid[x].length; y ++) {
  		if (grid[x][y].cont) {
  			if (grid[x][y].col === "red") {
  				if (grid[x - 1][y].col != "blue" && grid[x - 1][y].shade != "blue") {
  					grid[x - 1][y].col = "blue";
  					grid[x - 1][y].cont = false;
  				} else if (grid[x - 1][y].col === "blue") {
  					grid[x - 1][y].shade = "blue";
  					grid[x - 1][y].cont = false;
  				}
  				
  				if (grid[x + 1][y].col != "blue" && grid[x + 1][y].shade != "blue") {
  					grid[x + 1][y].col = "blue";
  					grid[x + 1][y].cont = false;
  				} else if (grid[x + 1][y].col === "blue") {
  					grid[x + 1][y].shade = "blue";
  					grid[x + 1][y].cont = false;
  				}
  			} else if (grid[x][y].col === "blue") {
  				if (grid[x][y - 1].col != "red" && grid[x][y - 1].shade != "red") {
  					grid[x][y - 1].col = "red";
  					grid[x][y - 1].cont = false;
  				} else if (grid[x][y - 1].col === "red") {
  					grid[x][y - 1].shade = "red";
  					grid[x][y - 1].cont = false;
  				}
  				
  				if (grid[x][y + 1].col != "red" && grid[x][y + 1].shade != "red") {
  					grid[x][y + 1].col = "red";
  					grid[x][y + 1].cont = false;
  				} else if (grid[x][y + 1].col === "red")  {
  					grid[x][y + 1].shade = "red";
  					grid[x][y + 1].cont = false;
  				}
  			}
  		}
  	}
  }
  
  for (var x = 0; x < grid.length; x ++) {
  	for (var y = 0; y < grid[x].length; y ++) {
  		if (grid[x][y].col === "blue" || grid[x][y].col === "red") {
  			grid[x][y].show();
  			grid[x][y].cont = true;
  		}
  	}
  }
}