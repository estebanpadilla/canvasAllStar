
function Star(x, y, outerRadius, innerRadius, piers, color) {
    this.x = x;
    this.y = y;
    this.piers = piers;
    this.outerRadius = outerRadius;
    this.innerRadius = innerRadius;
    this.color = color;
    this.points = [];
    this.angleBetweenPoints = 360 / (piers * 2);
    this.starAngle = -90;
    this.calculatePoints();
}

Star.prototype.calculatePoints = function calculatePoints() {

    this.points = [];
    this.angleBetweenPoints = 360 / (this.piers * 2);

    for (var i = 0; i < (this.piers * 2); i++) {
        if (i % 2 == 0) {
            sideB = (Math.sin((this.starAngle * (Math.PI / 180)))) * this.outerRadius;
            sideB += this.y;
            sideA = (Math.cos((this.starAngle * (Math.PI / 180)))) * this.outerRadius;
            sideA += this.x;
            this.points.push({ x: sideA, y: sideB });
            this.starAngle += (this.angleBetweenPoints);
        } else {
            sideB = (Math.sin((this.starAngle * (Math.PI / 180)))) * (this.innerRadius);
            sideB += this.y;
            sideA = (Math.cos((this.starAngle * (Math.PI / 180)))) * (this.innerRadius);
            sideA += this.x;
            this.points.push({ x: sideA, y: sideB });
            this.starAngle += (this.angleBetweenPoints);
        }
    }
}

Star.prototype.update = function update(context) {

    context.fillStyle = this.color;
    context.beginPath();
    context.moveTo(this.points[0].x, this.points[0].y);
    for (var i = 1; i < this.points.length; i++) {
        context.lineTo(this.points[i].x, this.points[i].y);
    }
    context.lineWidth = 4;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.closePath();
    //context.stroke();

    context.fill();

    //Enable to show circles
    // context.beginPath();
    // context.arc(this.x, this.y, this.outerRadius, 0, (Math.PI * 2), false);
    // context.lineWidth = 1;
    // context.stroke();
    // context.closePath();

    // context.beginPath();
    // context.arc(this.x, this.y, this.innerRadius, 0, (Math.PI * 2), false);
    // context.lineWidth = 1;
    // context.stroke();
    // context.closePath();
}