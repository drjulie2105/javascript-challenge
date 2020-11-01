// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach(function(UFOSighting) {
    console.log(UFOSighting);
    });

data.forEach(function(UFOSighting) {
    console.log(UFOSighting);
    var row = tbody.append("tr");
      });

data.forEach(function(UFOSighting) {
    console.log(UFOSighting);
    var row = tbody.append("tr");

    Object.entries(UFOSighting).forEach(function([key, value]) {
        console.log(key, value);
      });
    });


data.forEach(function(UFOSighting) {
    console.log(UFOSighting);
    var row = tbody.append("tr");
        
    Object.entries(UFOSighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        
        cell.text(value);
        });
      });
  
// Assign the data from `data.js` to a descriptive variable
var sighting = data;

// Select the button
var button = d3.select("#filter-btn");


button.on("click", function() {
  d3.select("tbody").html("");

  d3.event.preventDefault();

  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = sighting.filter(sightingDate => sightingDate.datetime === inputValue);

  console.log(filteredData);

  filteredData.forEach ((UFOSighting) => {
    var row = tbody.append ('tr');

    Object.entries(UFOSighting).forEach (([key, value]) => {
      console.log (key, value);
      var cell = row.append ('td');
      cell.text(value);
    });
  });

});




  

  