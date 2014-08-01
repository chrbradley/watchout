// start slingin' some d3 here.
var width = 500;
var height = 500;

var radius = 10;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var nodes = d3.range(50);

var circle = svg.selectAll('circle')
  .data(nodes);


  // enemies.enter().append('text')
  //   .attr('class', 'enemies')
  //   .text('asd')
  //   .attr("x", 100);

circle.enter().append("circle")
  .attr("r", radius)
  .attr("cx", function(d,i){ return (Math.random()*(width)-(radius));})
  .attr("cy", function(d,i) { return (Math.random()*(height)-(radius));})
  .attr('class', 'enemies')
  ;
 
 
setInterval(function() {
circle.transition().duration(900)
  .attr("cx", function(d,i){ return (Math.random()*width)-(radius);})
  .attr("cy", function(d,i) { return (Math.random()*height)-(radius);});
  }, 1500);


// d3.select("body").selectAll("p")
//     .data([4, 8, 15, 16, 23, 42])
//   .enter().append("p")
//     .text(function(d) { return "I number " + d + "!"; });


//  1//Make an SVG Container
//  2var svgContainer = d3.select("body").append("svg")
//  3                                    .attr("width", 200)
//  4                                    .attr("height", 200);
//  5
//  6//Draw the Circle
//  7var circle = svgContainer.append("circle")
//  8                         .attr("cx", 30)
//  9                         .attr("cy", 30)
// 10                         .attr("r", 20)