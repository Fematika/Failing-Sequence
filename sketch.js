var grid = []

function setup() {
	createCanvas(400, 400);
	frameRate(1);
	for (var i = 0; i * 10 < height; i++) {
		grid[i] = [];
	}
	for (var i = 0; i * 10 < width; i ++) {
		for (var j = 0; j * 10 < height; j ++) {
			grid[i][j] = new Grid(10 * i, 10 * j, 0, 0, 0, 255, 255, 255);
		}
	}
	grid[width / 20][height / 20].c1 = 128;
}

function draw() {
  for (var i = 0; i < grid.length; i++) {
  	for(var j = 0; j < grid[i].length; j++) {
  		if (grid[i][j].c1 === 128) {
  			grid[i - 1][j].c3 = 255;
  			grid[i - 1][j].show();
  			grid[i + 1][j].c3 = 255;
  			grid[i + 1][j].show();
  		}
  			
  		if (grid[i][j].c3 === 255) {
  			grid[i][j - 1].c1 = 255;
  			grid[i][j - 1].show();
  			grid[i][j + 1].c1 = 255;
  			grid[i][j + 1].show();
  		}
  		
  		if (grid[i][j].c1 === 255) {
  			grid[i - 1][j].c3 = 255;
  			grid[i - 1][j].show();
  			grid[i + 1][j].c3 = 255;
  			grid[i + 1][j].show();
  		}
  	}
  }
}