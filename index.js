(function(){
  var circle = d3.selectAll("circle");

  // circle.style("fill", "steelblue");
  circle.attr("r", 20);

function moveCirclesX() {
  return circle.attr("cx", function() { return Math.random() * 1000; });
}

function moveCirclesY() {
  return circle.attr("cy", function() { return Math.random() * 1000; });
}

function colorCircles() {
  return circle.style("fill", function() {
      return "hsl(" + Math.random() * 360 + ",100%,50%)";
    });
}

setInterval(colorCircles, 500);
setInterval(moveCirclesX, 500);
setInterval(moveCirclesY, 300);
  // circle.attr("cx", function() { return Math.random() * 720; });


})();
