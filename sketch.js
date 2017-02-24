var grid = [] //Array for grid
gw = 1; //Grid-Width
var ix; //x-iterator
var iy; //y-iterator

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	for (var x = 0; x * gw < width; x ++) {
		grid[x] = []; //So I can make 2D array
	}
	
	ix = 0; //Start x-iterator at 0
	
	for (var x = 0; x * gw + ix < width; x ++) {
		iy = 0; //Start y-iterator at 0
		
		for (var y = 0; y * gw + iy < height; y ++) {
			grid[x][y] = new Grid(gw * x + ix, gw * y + iy, "black", "white", true, false); //Make each rectangle grid width apart and account for outline (so you can see it)
			iy++; //Iterating through y-iterator
		}
		ix++; //Iterating through x-iterator
	}
	
	var xc = floor(width / (2 * gw) - ix / (2 * gw)); //Center (x-wise)
	var yc = floor(height / (2 * gw) - iy / (2 * gw)); //Center (y-wise)
	
	for (var i = 0; i < 10; i++) {
		var ranx = random(xc - grid.length / (4 * gw) + ix / (4 * gw), xc + grid.length / (4 * gw) - ix / (4 * gw)); //Random x position within certain bounds
		var rany = random(yc - grid[0].length / (4 * gw), yc + grid[0].length / (4 * gw)); //Random y position within certain bounds
		
		grid[floor(ranx)][floor(rany)].col = "red"; //Make tile at random red
		//Iterate through 10 times
	}
	
	//grid[floor(xc - ix / (2 * gw))][floor(yc - iy / (2 * gw))].col = "red"; //Put red-outlined tile in center
}

function draw() {
  for (var x = 0; x < grid.length; x ++) {
  	for (var y = 0; y < grid[x].length; y ++) {
  		if (grid[x][y].cont) {
  			if (grid[x][y].col === "red" && grid[x][y].shade === "white") {
  				//If it is outlined red and isn't shaded
  				
  				grid[x][y].cont = "close"; //Close, so you don't repetitively shade the rectangles next to it
  				
  				if (grid[x - 1][y].col != "blue" && grid[x - 1][y].shade != "blue") {
  					//If grid to the left isn't shaded and outlined already
  					grid[x - 1][y].col = "blue"; //Outline it blue
  					grid[x - 1][y].cont = false; //Don't run through this until next frame
  				} else if (grid[x - 1][y].col === "blue") {
  					grid[x - 1][y].shade = "blue"; //If outlined blue already, shade blue
  					grid[x - 1][y].cont = "close"; //Don't run shaded tiles again
  				}
  				
  				//Repeat for right tile
  				
  				if (grid[x + 1][y].col != "blue" && grid[x + 1][y].shade != "blue") {
  					grid[x + 1][y].col = "blue";
  					grid[x + 1][y].cont = false;
  				} else if (grid[x + 1][y].col === "blue") {
  					grid[x + 1][y].shade = "blue";
  					grid[x + 1][y].cont = "close";
  				}
  			} else if (grid[x][y].col === "blue" && grid[x][y].shade === "white") {
  				//If it is outlined blue and isn't shaded
  				//Same as Blue code
  				
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
  		//Iterate through all tiles
  	
  		if (grid[x][y].col === "blue" || grid[x][y].col === "red") {
  			//If it is colored
  			
  			if (!grid[x][y].showing) {
  				//If it's not showing
  				
  				grid[x][y].show(); //Show it
  				grid[x][y].showing = true; //Say it is showing
  			}
  			if (grid[x][y].cont === "close") {
  				grid[x][y].cont = false; //Don't continue closed tiles
  			} else {
  				grid[x][y].cont = true; //Make sure to allow tiles just created to continue
  			}
  		}
  	}
  }
}