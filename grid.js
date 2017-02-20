function Grid(x, y, col, shade, cont) {
	this.cont = cont;
	this.x = x;
	this.y = y;
	this.col = col;
	this.shade = shade;
	this.show = function() {
		switch(this.col) {
			case "red":
				stroke(255, 0, 0);
				break;
			case "blue":
				stroke(0, 0, 255);
				break;
			default:
				stroke(0);
				break;
		}
		switch(this.shade) {
			case "red":
				fill(255, 0, 0);
				break;
			case "blue":
				fill(0, 0, 255);
				break;
			default:
				fill(255);
				break;
		}
		rect(this.x, this.y, gw, gw);
	}
}