document.getElementById("find").onclick = function() {
    // Create Request
    var xmlHttp = new XMLHttpRequest();

    // Request to ipify for ip information
    xmlHttp.open( "GET", "https://api.ipify.org?format=json", false ); // false for synchronous request
    xmlHttp.send( null );

    // Cast request response to JSON object
    var obj = JSON.parse(xmlHttp.responseText);

    // Display IP information to our extension
    document.getElementById("result").innerHTML = obj.ip;
};

