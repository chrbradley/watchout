// start slingin' some d3 here.
var width = 500;
var height = 500;

var radius = 10;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("fill", "red");

var data = [1,1,1,1,1];
var nodes = d3.range(200);

// var enemies = svg.selectAll('enemies')
  // .data(data);


  // enemies.enter().append('text')
  //   .attr('class', 'enemies')
  //   .text('asd')
  //   .attr("x", 100);

svg.selectAll('enemies').data(nodes)
    .enter().append("circle")
    .attr("r", radius)
    .attr("cx", function(d,i){ return (Math.random()*width)+(radius*.5);})
    .attr("cy", function(d,i) { return (Math.random()*height)+(radius*.5);})
    ;
  
console.log(nodes);

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