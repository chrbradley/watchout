// start slingin' some d3 here.
var width = 500;
var height = 500;

var radius = 10;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var nodes = d3.range(50);
var heroObject = {x: width / 2, y: height / 2};

var enemies = svg.selectAll('.enemies')
  .data(nodes)
  ;

var dragmove = function(d) {
  // console.log('ln 19: this is d');
  // console.log(d)
    d3.select(this)
      .attr("cx", d.x = Math.max(radius, Math.min(width - radius, d3.event.x)))
      .attr("cy", d.y = Math.max(radius, Math.min(height - radius, d3.event.y)))
      ;

};

var drag = d3.behavior.drag()
  .origin(function(d) { return d; })
  .on("drag", dragmove)
  ;


var hero = svg.selectAll('.hero')
    .data([heroObject])
    ;

enemies.enter().append("circle")
  .attr("r", radius)
  .attr("cx", function(d,i){ return (Math.random()*(width)-(radius));})
  .attr("cy", function(d,i) { return (Math.random()*(height)-(radius));})
  .attr('class', 'enemies')
  ;

 // d3.select('body').selectAll('.enemies').each(console.log(enemies));




// d3.select("body").selectAll("div")

hero.enter().append("circle")
  .attr("r", radius)
  .attr("cx", function(d){ return d.x; })
  .attr("cy", function(d){ return d.y; })
  .attr('class', 'hero')
  .call(drag);
  
// console.log(d3.selectAll('.enemies').attr('cx'));
// console.log(d3.select(this).attr('cx'));

console.log(d3.select('.hero').attr('cx'));
// at an iterval
setInterval(function(){
  var hx = d3.select('.hero').attr('cx');
  var hy = d3.select('.hero').attr('cy');
  var hr = d3.select('.hero').attr('r');

  d3.selectAll('.enemies').each(function (d, i ){
       // debugger; 

      var ex = d3.select(this).attr('cx');
      var ey = d3.select(this).attr('cy');
      var er = d3.select(this).attr('r');
      var distance = Math.sqrt(Math.pow((hx - ex),2) + Math.pow((hy - ey),2));
      var combinedRadius = parseInt(hr)+ parseInt(er);
      // debugger;
      if ( distance < combinedRadius){
        // console.log('distance: ' + distance + ' hr: ' + hr + ' er: ' + er);
        // console.log(hr);
        // console.log(er);
        console.log('collide');
      }
    });

}, 50);
 




setInterval(function() {
enemies.transition().duration(900)
  .attr("cx", function(d,i){ return (Math.random()*width)-(radius);})
  .attr("cy", function(d,i) { return (Math.random()*height)-(radius);});
  }, 1500);
