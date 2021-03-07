document.getElementById("find").onclick = function() {
    // Create Request
    let xmlHttp = new XMLHttpRequest();

    // Request to ipify for ip information
    xmlHttp.open( "GET", "https://api.ipify.org?format=json", false ); // false for synchronous request
    xmlHttp.send( null );

    try{
        // Cast request response to JSON object
        let obj = JSON.parse(xmlHttp.responseText);
        // Display IP information to our extension
        document.getElementById("result").innerHTML = obj.ip;
    }catch(e){
        // Display error information to our extension
        document.getElementById("result").innerHTML = "An Error Occurred!";
    }
};

