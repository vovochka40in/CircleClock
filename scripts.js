var elem = document.getElementById("canvas"),
    clc  = elem.getContext('2d'),
    x    = 240,
    y    = 240;

elem.width = 480;
elem.height = 480;


function drawDot(rot, grad, x0, y0, rad, col) {
// Функция для отрисовки точек. Параметры:
// количество точек, угол между точками (в градусах),
// координаты (x,y) начальной точки на окружности,
// радиус точки, цвет точки (без кавычек)
  rx = x0 - x;
  ry = y0 - y;
  for (var i=0; i<rot; i++) {
    alpha = Math.PI*(i*grad)/180;
    c = Math.cos(alpha);
    s = Math.sin(alpha);
    x1 = x + rx * c - ry * s;
    y1 = y + rx * s + ry * c;

    clc.fillStyle = col;
    clc.beginPath();
    clc.arc(x1, y1, rad, 0, 2*Math.PI, false);
    clc.closePath();
    clc.fill();
  }
}


function drawDotTime(grad, x0, y0, rad, col) {
// Функция для отрисовки точек. Параметры:
// угол между точками (в градусах),
// координаты (x,y) начальной точки на окружности,
// радиус точки, цвет точки (без кавычек)
  rx = x0 - x;
  ry = y0 - y;
  alpha = Math.PI*(grad)/180;
  c = Math.cos(alpha);
  s = Math.sin(alpha);
  x1 = x + rx * c - ry * s;
  y1 = y + rx * s + ry * c;

  clc.fillStyle = col;
  clc.beginPath();
  clc.arc(x1, y1, rad, 0, 2*Math.PI, false);
  clc.closePath();
  clc.fill();
}


function setTimeDots() {
  var date = new Date();
  var sec = date.getSeconds();
  var min = date.getMinutes() + (sec/60);
  var hour;
  if (date.getHours() <= 12) {
    hour = date.getHours() + (min/60);
  } else {
    hour = date.getHours() - 12 + (min/60);
  }

  clc.clearRect(0, 0, elem.width, elem.height);
  drawDot(60, 6, 240, 20, 2, "#b5b5b5"); // мелкие точки
  drawDot(12, 30, 240, 20, 6, "#b5b5b5"); // средние точки
  drawDot(4, 90, 240, 20, 13, "#b5b5b5"); // крупные точки

  drawDotTime(6*sec, 240, 3, 3, "#cc8c00");
  drawDotTime(6*min, 240, 20, 6, "#cc8c00");
  drawDotTime(30*hour, 240, 48, 14, "#cc8c00");
  setTimeout(setTimeDots, 1000);
}


setTimeDots();
