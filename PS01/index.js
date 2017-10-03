var svg = d3.select('svg');

/* Your code goes here */

var myArray = [];

for (i=0; i < 200; i++) {

  var object = {cx: 50 + i * i * Math.random(), cy: 10 + i * i * Math.random(), r : 1.5*i};

  myArray.push(object);


}

svg.selectAll('circle')
  .data(myArray)
  .enter()
  .append('circle')
  .attr("cx", function(d){
    console.log(d.cx)
  return d.cx;
  })
  .attr("cy", function(d){
    return d.cy;

  })

  .attr('r', function(d){
    return d.r;

  })

.attr("fill", function() { return "hsl(" + Math.random() * 360 + ", 100%, 75%)"

})


  .attr('fill', function(d){
    return randomColor();

  });
