function Grid(x, y, col, shade, cont, showing) {
	this.x = x; //Initialize each grid-rectangle with an x
	this.y = y; //Initialize each grid-rectangle with a y
	
	this.col = col; //Give it a color in the form of a string
	this.shade = shade; //Give it a shade in the form of a string
	
	this.cont = cont; //Tells whether to run code on that grid or not
	this.showing = showing; //Whether to reshow it or not	
}

Grid.prototype.show = function() { //Makes the function run quicker
	switch(this.col) {
		case "red":
			stroke(255, 0, 0); //If it's color is red, outline the grid-rectangle red
			break;
			
		case "blue":
			stroke(0, 0, 255); //If its color is blue, outline it blue
			break;
			
		default:
			stroke(0);
			break;
	}
		
	switch(this.shade) {
		case "red":
			fill(255, 0, 0); //If its shade is red, shade the grid-rectangle red
			break;
			
		case "blue":
			fill(0, 0, 255); //If its blue, shade it blue
			break;
			
		default:
			fill(255);
			break;
	}
		
	rect(this.x, this.y, gw, gw); //Make rectangle at x, y
}