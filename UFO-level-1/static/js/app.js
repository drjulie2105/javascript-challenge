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