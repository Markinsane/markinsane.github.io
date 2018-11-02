

var filteredItem
var loadedData

$(document).ready(function() {
   loadData()
    visulizeLinear()

    $("SELECT").change( function () {
                  var color = $(this).val();
                  console.log(color); 
                  findDataItem(loadedData, color)
                  visulizeMap(filteredItem);
  
});

})



function visulizeMap(mydata){
  var w = 900; 
  var h = 580;  

  var projection = d3.geoAlbersUsa()

  var path = d3.geoPath()
    .projection(projection);

  var svg = d3.select('#map')
    .append('svg')
    .attr('width', w)
    .attr('height', h)


    


  svg.append('rect')
    .attr('width', w)
    .attr('height', h)
    .attr('fill', 'white');

  var g = svg.append("g");

  d3.json('https://d3js.org/world-50m.v1.json', function(error, data) {
    if (error) console.error(error);
    g.append('path')
      .datum(topojson.feature(data, data.objects.countries))
      .attr('d', path)
   
       
    // zoom effect
    var zoom = d3.zoom()
      .on("zoom", function() {
        g.attr("transform", d3.event.transform);
        g.selectAll("path")
          .attr("d", path.projection(projection));
      });
    svg.call(zoom);

   
      
      var locations = mydata

      var hue = 0; 
  
      
      
      locations.map(function(d) { 
        hue += 0.36               
        d.color = 'hsl(' + hue + ', 100%, 50%)';
      });
      
  
      g.selectAll('circle')
     
        .data(locations)
        .enter()
        .append('circle') //show the circles
        .attr('cx', function(d) {
          if ( projection([d.Longitude, d.Latitude])) {
             // console.log([d.Latitude, d.Longitude])
            return projection([d.Longitude, d.Latitude])[0];
          }
        })
        .attr('cy', function(d) {
          if (projection([d.Longitude, d.Latitude])) {
            return projection([d.Longitude, d.Latitude])[1];
          }
        })
         .attr('r', 1 

        //   function(d) {
        //   if (d["Duration (Seconds)"]) {
        //     return Math.pow(parseInt(d["Duration (Seconds)"]), 1 / 9);
        //   }
        // }
        )
        // .attr('r', d["Duration (Seconds)"]/10)
        .style('fill', function(d) {

          return d.color;
        })
         .style('opacity', 0.8)

      
    

      //mouseover



        .on('mouseover', function(d) {
          d3.select(this).style('fill', 'black'); 
          d3.select('#datetime').text(d.Datetime);
          d3.select('#city').text(d.City);
          d3.select('#shape').text(d.Shape);
          d3.select('#duration').text(d["Duration (Seconds)"]);
          d3.select('#comments').text(d.Comments);
      
          d3.select('#tooltip')
            .style('left', (d3.event.pageX + 20) + 'px')
            .style('top', (d3.event.pageY - 80) + 'px')
            .style('display', 'block')
            .style('opacity', 0.8)
        })
        //Add Event Listeners | mouseout
        .on('mouseout', function(d) { 
          d3.select(this).style('fill', d.color);
          d3.select('#tooltip')
            .style('display', 'hidden')
            .style('opacity', 0)
        });
    });

}



 function loadData(){
  d3.json('data/UFO Sighting.json', function(error, data) {
      if (error) 
        console.error(error);

        loadedData = data
          
        console.log(loadedData)

           
        visulizeMap(loadedData);
    
    })
}
 console.log(filteredItem)

function findDataItem(data, year){

   d3.select("svg")

    .remove();

 
        if (year=="all") {

          filteredItem = data

          return filteredItem} 

        else{

        filteredItem = data.filter(function (d) {

        console.log(year)

  

        if (d.Datetime.slice(6, 8)==year) {return d} 
      

      })}



      console.log(filteredItem)


}










function visulizeLinear() {

 var data =  [


 {
    name: "ca",
    values: [
      { date: "2004", value: 478 },
      { date: "2005", value: 463},
      { date: "2006", value: 466},
      { date: "2007", value: 516},
      { date: "2008", value: 614},
      { date: "2009", value: 558},
      { date: "2010", value: 512 },
      { date: "2011", value: 535 },
      { date: "2012", value: 636},
      { date: "2013", value: 619},
      // { date: "2014", value: 265},

    ]
  },



 {
    name: "wa",
    values: [
      { date: "2004", value: 206 },
      { date: "2005", value: 168},
      { date: "2006", value: 148},
      { date: "2007", value: 194},
      { date: "2008", value: 172},
      { date: "2009", value: 197},
      { date: "2010", value: 238 },
      { date: "2011", value: 261 },
      { date: "2012", value: 366 },
      { date: "2013", value: 283},
      // { date: "2014", value: 92},

    ]
  },



  {
    name: "tx",
    values: [
      { date: "2004", value: 165 },
      { date: "2005", value: 187},
      { date: "2006", value: 187},
      { date: "2007", value: 179 },
      { date: "2008", value: 328 },
      { date: "2009", value: 220},
      { date: "2010", value: 200},
      { date: "2011", value: 222 },
      { date: "2012", value: 223},
      { date: "2013", value: 211},
      // { date: "2014", value: 66},

    ]
  },


  {
    name: "ny",
    values: [
      { date: "2004", value: 156 },
      { date: "2005", value: 138},
      { date: "2006", value: 108},
      { date: "2007", value: 146 },
      { date: "2008", value: 181 },
      { date: "2009", value: 164},
      { date: "2010", value: 149 },
      { date: "2011", value: 218 },
      { date: "2012", value: 330},
      { date: "2013", value: 209},
      // { date: "2014", value: 54},

    ]
  },



  {
    name: "nv",
    values: [
      { date: "2004", value: 156 },
      { date: "2005", value: 138},
      { date: "2006", value: 108},
      { date: "2007", value: 146 },
      { date: "2008", value: 181 },
      { date: "2009", value: 164},
      { date: "2010", value: 149 },
      { date: "2011", value: 218 },
      { date: "2012", value: 330},
      { date: "2013", value: 209},
      // { date: "2014", value: 54},

    ]
  },


  {
    name: "il",
    values: [
      { date: "2004", value: 187},
      { date: "2005", value: 176},
      { date: "2006", value: 116},
      { date: "2007", value: 160 },
      { date: "2008", value: 143 },
      { date: "2009", value: 123},
      { date: "2010", value: 180 },
      { date: "2011", value: 200 },
      { date: "2012", value: 250},
      { date: "2013", value: 155},
      // { date: "2014", value: 26},

    ]
  },


  {
    name: "pa",
    values: [
      { date: "2004", value: 117 },
      { date: "2005", value: 82},
      { date: "2006", value: 113},
      { date: "2007", value: 126 },
      { date: "2008", value: 159 },
      { date: "2009", value: 146},
      { date: "2010", value: 141 },
      { date: "2011", value: 157 },
      { date: "2012", value: 259},
      { date: "2013", value: 258},
      // { date: "2014", value: 64},

    ]
  },


  {
    name: "az",
    values: [
      { date: "2004", value: 163 },
      { date: "2005", value: 162},
      { date: "2006", value: 112},
      { date: "2007", value: 110 },
      { date: "2008", value: 147 },
      { date: "2009", value: 139},
      { date: "2010", value: 95 },
      { date: "2011", value: 136},
      { date: "2012", value: 176},
      { date: "2013", value: 194},
      // { date: "2014", value: 98},

    ]
  },



  {
    name: "oh",
    values: [
      { date: "2004", value: 111 },
      { date: "2005", value: 74},
      { date: "2006", value: 80},
      { date: "2007", value: 97},
      { date: "2008", value: 117},
      { date: "2009", value: 111},
      { date: "2010", value: 112 },
      { date: "2011", value: 135 },
      { date: "2012", value: 235},
      { date: "2013", value: 320},
      // { date: "2014", value: 58},

    ]
  },


  {
    name: "nc",
    values: [
      { date: "2004", value: 71},
      { date: "2005", value: 90},
      { date: "2006", value: 65},
      { date: "2007", value: 98 },
      { date: "2008", value: 116 },
      { date: "2009", value: 104},
      { date: "2010", value: 112 },
      { date: "2011", value: 160 },
      { date: "2012", value: 213},
      { date: "2013", value: 175},
      // { date: "2014", value: 65},

    ]
  },


  {
    name: "or",
    values: [
      { date: "2004", value: 77 },
      { date: "2005", value: 95},
      { date: "2006", value: 72},
      { date: "2007", value: 100},
      { date: "2008", value: 80 },
      { date: "2009", value: 71},
      { date: "2010", value: 73 },
      { date: "2011", value: 99 },
      { date: "2012", value: 154},
      { date: "2013", value: 169},
      // { date: "2014", value: 57},

    ]
  },
  

];

// d3.json('data/finaljson.json', function(error, data) {
//   if (error) console.error(error); 

var width = 1000;
var height = 500;
var margin = 50;
var duration = 250;

var lineOpacity = "0.25";
var lineOpacityHover = "0.85";
var otherLinesOpacityHover = "0.1";
var lineStroke = "1.5px";
var lineStrokeHover = "2.5px";

var circleOpacity = "0.85";
var circleOpacityOnLineHover = "0.25";
var circleRadius = 3;
var circleRadiusHover = 6;

/* Format Data */
var parseDate = d3.timeParse("%Y");


/* Scale */
var xScale = d3
.scaleTime()
.domain(d3.extent(data[0].values, d => d.date))
.range([0, width - margin]);

var yScale = d3
.scaleLinear()
.domain([0, d3.max(data[0].values, d => d.value)])
.range([height - margin, 0]);

var color = d3.scaleOrdinal(d3.schemeCategory10);

/* Add SVG */
var svg = d3
.select("#chart")
.append("svg")
.attr("width", width + margin + "px")
.attr("height", height + margin + "px")
.append("g")
.attr("transform", `translate(${margin}, ${margin})`);

/* Add line into SVG */
var line = d3
.line()
.x(d => xScale(d.date))
.y(d => yScale(d.value));

let lines = svg.append("g").attr("class", "lines");

lines
  .selectAll(".line-group")
  .data(data)
  .enter()
  .append("g")
  .attr("class", "line-group")
  .on("mouseover", function(d, i) {
  svg
    .append("text")
    .attr("class", "title-text")
    .style("fill", color(i))
    .text(d.name)
    .attr("text-anchor", "middle")
    .attr("x", (width - margin) / 2)
    .attr("y", 5);
})
  .on("mouseout", function(d) {
  svg.select(".title-text").remove();
})
  .append("path")
  .attr("class", "line")
  .attr("d", d => line(d.values))
  .style("stroke", (d, i) => color(i))
  .style("opacity", lineOpacity)
  .on("mouseover", function(d) {
  d3.selectAll(".line").style("opacity", otherLinesOpacityHover);
  d3.selectAll(".circle").style("opacity", circleOpacityOnLineHover);
  d3
    .select(this)
    .style("opacity", lineOpacityHover)
    .style("stroke-width", lineStrokeHover)
    .style("cursor", "pointer");
})
  .on("mouseout", function(d) {
  d3.selectAll(".line").style("opacity", lineOpacity);
  d3.selectAll(".circle").style("opacity", circleOpacity);
  d3
    .select(this)
    .style("stroke-width", lineStroke)
    .style("cursor", "none");
});

/* Add circles in the line */
lines
  .selectAll("circle-group")
  .data(data)
  .enter()
  .append("g")
  .style("fill", (d, i) => color(i))
  .selectAll("circle")
  .data(d => d.values)
  .enter()
  .append("g")
  .attr("class", "circle")
  .on("mouseover", function(d) {
  d3
    .select(this)
    .style("cursor", "pointer")
    .append("text")
    .attr("class", "text")
    .text(`${d.value}`)
    .attr("x", d => xScale(d.date) + 5)
    .attr("y", d => yScale(d.value) - 10);
})
  .on("mouseout", function(d) {
  d3
    .select(this)
    .style("cursor", "none")
    .transition()
    .duration(duration)
    .selectAll(".text")
    .remove();
})
  .append("circle")
  .attr("cx", d => xScale(d.date))
  .attr("cy", d => yScale(d.value))
  .attr("r", circleRadius)
  .style("opacity", circleOpacity)
  .on("mouseover", function(d) {
  d3
    .select(this)

    .transition()
    .duration(duration)
    .attr("r", circleRadiusHover);
})
  .on("mouseout", function(d) {
  d3
    .select(this)
    .transition()
    .duration(duration)
    .attr("r", circleRadius);
});

/* Add Axis into SVG */
var xAxis = d3.axisBottom(xScale).ticks(5);
var yAxis = d3.axisLeft(yScale).ticks(5);

svg
  .append("g")
  .attr("class", "x axis")
  .attr("transform", `translate(0, ${height - margin})`)
  .call(xAxis);

svg
  .append("g")
  .attr("class", "y axis")
  .call(yAxis)
  .append("text")
  .attr("y", 15)
  .attr("transform", "rotate(-90)")
  .attr("fill", "#000")
  .text("Total values");
// })

}










