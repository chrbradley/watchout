// start slingin' some d3 here.
var width = 500;
var height = 500;

var radius = 10;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var nodes = d3.range(10);
var heroObject = {x: width / 2, y: height / 2};

var enemies = svg.selectAll('.enemies')
  .data(nodes)
  ;

var currentScore = 0;
var currentCollisions = 0;
var currentHighScore = 0;
var setScore = d3.select('.current').select('span');
var setHighScore = d3.select('.high').select('span');
var setCollisions = d3.select('.collisions').select('span');

var dragmove = function(d) {
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

hero.enter().append("circle")
  .attr("r", radius)
  .attr("cx", function(d){ return d.x; })
  .attr("cy", function(d){ return d.y; })
  .attr('class', 'hero')
  .call(drag);

// at an iterval
setInterval(function(){
  var hx = d3.select('.hero').attr('cx');
  var hy = d3.select('.hero').attr('cy');
  var hr = d3.select('.hero').attr('r');

  currentScore += 1;
  setScore.text(currentScore);
  if( currentHighScore < currentScore ){ 
    currentHighScore = currentScore
    setHighScore.text(currentHighScore);
  }

  d3.selectAll('.enemies').each(function (d, i ){
      var ex = d3.select(this).attr('cx');
      var ey = d3.select(this).attr('cy');
      var er = d3.select(this).attr('r');
      var distance = Math.sqrt(Math.pow((hx - ex),2) + Math.pow((hy - ey),2));
      var combinedRadius = parseInt(hr)+ parseInt(er);
      if ( distance < combinedRadius){
// debugger;
        currentCollisions++; 

        setCollisions.text(currentCollisions);



        currentScore = 0;
        setScore.text(currentScore);
      }
    });

}, 50);
 
setInterval(function() {
enemies.transition().duration(900)
  .attr("cx", function(d,i){ return (Math.random()*width)-(radius);})
  .attr("cy", function(d,i) { return (Math.random()*height)-(radius);});
  }, 1500);
