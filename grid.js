function Grid(x, y, c1, c2, c3, s1, s2, s3) {
	this.x = x;
	this.y = y;
	this.c1 = c1; 
	this.c2 = c2; 
	this.c3 = c3;
	this.s1 = s1; 
	this.s2 = s2; 
	this.s3 = s3;

	this.show = function() {
		fill(this.s1, this.s2, this.s3);
		stroke(this.c1, this.c2, this.c3);
		rect(this.x, this.y, 10, 10);
	}
}