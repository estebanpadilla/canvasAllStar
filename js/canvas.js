window.addEventListener('load', init, false);
function init() {
    var canvas = undefined;
    var context = undefined;
    const width = window.innerWidth;
    const height = window.innerHeight;
    var piersSlider = undefined;
    var outerRadiusSlider = undefined;
    var innerRadiusSlider = undefined;
    var star = undefined;
    var xpos = 100;
    var ypos = 400;

    canvas = createCanvas();
    context = canvas.getContext('2d');
    piersSlider = createSlider(xpos, ypos, 'Piers:', 5, 2, 20);
    ypos += 40;
    outerRadiusSlider = createSlider(xpos, ypos, 'Outer Radius:', 100, 50, 180);
    ypos += 40;
    innerRadiusSlider = createSlider(xpos, ypos, 'Inner Radius:', 25, 25, 180);
    star = new Star(230, 200, 100, 50, 5, 'yellow');

    piersSlider.addEventListener('click', piersSliderHandler, false);
    outerRadiusSlider.addEventListener('click', outerRadiusSliderHandler, false);
    innerRadiusSlider.addEventListener('click', innerRadiusSliderHandler, false);

    function update() {
        context.clearRect(0, 0, width, height);
        star.update(context);
        requestAnimationFrame(update);
    }

    update();

    function createCanvas() {
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.style.top = '0px';
        canvas.style.left = '0px';
        canvas.style.position = 'absolute';
        canvas.style.background = '#ee3344';
        document.body.appendChild(canvas);
        return canvas;
    }

    function createSlider(x, y, text, value, min, max) {
        var p = document.createElement('p');
        p.innerHTML = text;
        p.style.position = 'absolute';
        p.style.left = '' + (x + 160) + 'px';
        p.style.top = '' + (y - 22) + 'px';
        p.style.fontFamily = 'Lato';
        p.style.fontSize = '20px';
        p.style.color = 'white';
        p.style.textAlign = 'left';
        p.width = '200px';
        document.body.appendChild(p);

        var slider = document.createElement('input')
        slider.setAttribute('type', 'range');
        slider.setAttribute('value', '' + value);
        slider.setAttribute('min', '' + min);
        slider.setAttribute('max', '' + max);
        slider.style.position = 'absolute';
        slider.style.top = '' + y + 'px';
        slider.style.left = '' + x + 'px';
        slider.style.height = '10px';
        document.body.appendChild(slider);
        return slider
    }

    function piersSliderHandler(e) {
        star.piers = piersSlider.value;
        star.calculatePoints();
        console.log("Piers:" + star.piers);
    }

    function outerRadiusSliderHandler(e) {
        star.outerRadius = outerRadiusSlider.value;
        star.calculatePoints();
        console.log("OuterRadius:" + star.outerRadius);
    }

    function innerRadiusSliderHandler(e) {
        star.innerRadius = innerRadiusSlider.value;
        star.calculatePoints();
        console.log("InnerRadius:" + star.innerRadius);
    }
}