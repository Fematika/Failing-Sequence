var grid = []
var n = 0;
gw = 1;

function setup() {
	createCanvas(1000, 1000);
	
	frameRate(150);
	
	for (var x = 0; x * gw < width; x ++) {
		grid[x] = [];
	}
	for (var x = 0; x * gw < width; x ++) {
		for (var y = 0; y * gw < height; y ++) {
			grid[x][y] = new Grid(gw * x + gw, gw * y + gw, "white", "black", true);
		}
	}
	grid[width / (2 * gw)][height / (2 * gw)].col = "red";
}

function draw() {
  for (var x = 0; x < grid.length; x ++) {
  	for (var y = 0; y < grid[x].length; y ++) {
  		if (grid[x][y].cont === true) {
  			if (grid[x][y].col === "red" && grid[x][y].shade === "black") {
  				grid[x][y].cont = "close";
  				
  				if (grid[x - 1][y].col != "blue" && grid[x - 1][y].shade != "blue") {
  					grid[x - 1][y].col = "blue";
  					grid[x - 1][y].cont = false;
  				} else if (grid[x - 1][y].col === "blue") {
  					grid[x - 1][y].shade = "blue";
  					grid[x - 1][y].cont = "close";
  				}
  				
  				if (grid[x + 1][y].col != "blue" && grid[x + 1][y].shade != "blue") {
  					grid[x + 1][y].col = "blue";
  					grid[x + 1][y].cont = false;
  				} else if (grid[x + 1][y].col === "blue") {
  					grid[x + 1][y].shade = "blue";
  					grid[x + 1][y].cont = "close";
  				}
  			} else if (grid[x][y].col === "blue" && grid[x][y].shade === "black") {
  				grid[x][y].cont = "close";
  				
  				if (grid[x][y - 1].col != "red" && grid[x][y - 1].shade != "red") {
  					grid[x][y - 1].col = "red";
  					grid[x][y - 1].cont = false;
  				} else if (grid[x][y - 1].col === "red") {
  					grid[x][y - 1].shade = "red";
  					grid[x][y - 1].cont = "close";
  				}
  				
  				if (grid[x][y + 1].col != "red" && grid[x][y + 1].shade != "red") {
  					grid[x][y + 1].col = "red";
  					grid[x][y + 1].cont = false;
  				} else if (grid[x][y + 1].col === "red")  {
  					grid[x][y + 1].shade = "red";
  					grid[x][y + 1].cont = "close";
  				}
  			}
  		}
  	}
  }
  
  for (var x = 0; x < grid.length; x ++) {
  	for (var y = 0; y < grid[x].length; y ++) {
  		if ((grid[x][y].col === "blue" || grid[x][y].col === "red") && grid[x][y] != "close") {
  			grid[x][y].show();
  			grid[x][y].cont = true;
  		}
  	}
  }
}