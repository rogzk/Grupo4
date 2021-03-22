function cambiarFondo() {
  // color = 'rgb(0-255,0-255,0-255)'
  var color = 'rgb(' + Math.floor((Math.random() * 255))+ ',';
  color += Math.floor((Math.random() * 255)) + ',';
  color += Math.floor((Math.random() * 255)) + ')';
  document.body.style.backgroundColor= color;
  console.info("Nuevo color:", color);
 }
