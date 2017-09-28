var svg = d3.select('svg');

/* var array = [ "milk", "eggs", "bread", "butter" ]
console.log(array)

var student = { "name": "Stephen", "job":"student" , "age": 26};
console.log(student.name)

var classRoom = [
  { "name": "Stephen", "job":"student" , "age": 26},
  { "name": "George", "job":"student" , "age": 26},
  { "name": "Sophia", "job":"student" , "age": 25},
  { "name": "Felippe", "job":"student" , "age": 28}

]

console.log (classRoom[1].name) */

/*var myCircle = {"cx":100, "cy":200 , "r":20, "color":"blue"};

var myArray = [
  {"cx":25, "cy":40 , "r":20, "color":"blue"},
  {"cx":50, "cy":80 , "r":20, "color":"red"},
  {"cx":100, "cy":160 , "r":20, "color":"yellow"},
  {"cx":200, "cy":320 , "r":20, "color":"green"},
  {"cx":300, "cy":640 , "r":20, "color":"purple"}
];

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

  .attr('fill', function(d){
    return d.color;

  });

  */

/*var myArray = [{}, {}, {}, {}, {}];

for (i = 0; i < 5; i++){

  //console.log('circle' + i)
  //myArray[i].name = "circle" + i;

  myArray[i].cx = Math.random() * 100;
  myArray[i].cy = 10+ Math.random() * 400;
  myArray[i].r = Math.random() * 100

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

  .attr('fill', function(d){
    return d.color;

  });



console.log(myArray) */

/*var myArray = [{}, {}, {}, {}, {}, {}, {}, {}];

myArray.forEach(function (element, i){

  element.cx = 100 + i * i;
  element.cy = 100 + i * 100;
  element.r = 25 ;

})

console.log(myArray)

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

  .attr('fill', function(d){
    return d.color;

  }); */


var myArray = [];

for (i=0; i < 100; i++) {

  var object = {cx: Math.random() * 400, cy: i * i, r : 10};

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

  .attr('fill', function(d){
    return d.color;

  });

console.log(myArray)
