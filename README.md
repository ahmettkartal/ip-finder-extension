[![N|Solid](http://yazilimhayati.com/medianova-tech.png)](https://www.medianova.com)


# How To Make a Simple Browser Extension?

## What is an extension?

Extensions are small software that runs on browsers and provides additional features to browsers and websites. It is very easily accessible in terms of user experience. Also, it is very easy to develop for software developers, for these reasons the popularity of extensions is constantly increasing. 

## Let's build step by step

In this article, we will make a very small and simple plugin that will find the IP address we use. We will use the
[Ipify][ipify] API for get the IP information.

#### 1- Manifest.json file

We start our project by first creating a folder. The first file we will necessarily add to this folder will be manifest.json. This file will be a guide file like the contents of our plugin. 

```sh
{
 "name": "IP Finder",
 "version": "1.0",
 "description": "Find your ip with this extension",
 "manifest_version": 3
}
```
> name => Name of extension
> 
> version => Version of extension
> 
> description => Description of extension 
> 
> manifest_version => The manifest version that we will use in the extension

The Manifest.json file is sufficient to create an extension. You can start testing your extension now. 
#### 2- Enabling developer mode on the browser

To test your plugin, you first need to activate developer mode on your browser. You can find this in the extensions (chrome: // extensions) section of your browser.

[![N|Solid](http://yazilimhayati.com/image-1.png)](https://www.medianova.com)

After doing this, the "Load Unpacked" button will appear on your screen which you can install your plugin. You can open your plugin by selecting the project folder via the button.


#### 3- Plugin view and functionality

We will use HTML and Js to create the overview and functionality of our extension. First, we create app.js and app.html files. Then we introduce these files to our manifest file so that we can use them.

```sh
...
"manifest_version": 3,
"web_accessible_resources":[
   {
     "matches":[
        "<all_urls>" 
      ],
     "resources": [ 
         "app.js"
      ]
    }
 ],
"action": {
     "default_popup": "app.html"
}

```
> matches => The extension will work in case of which urls you have
> 
> resources => Source files to create the extension action
> 
> default_popup => HTML file that will create the general interface of the extension 

We will use HTML for the extension's interface. Create a button to trigger the API for pulling IP information into the app.html file and create a paragraph element to reflect the returned result on the screen. We also add style to the body element for the size of the plugin. Finally, we add the app.js file which we will use.

```sh
<!doctype html>
<html lang="en">
  <head>
    <style>
        body{min-width: 400px;}
    </style>
  </head>
  <body>
    <h1>Find My IP</h1>
    <p id="result"></p>
    <button id="find">Find</button>
    <script src="app.js"></script>
  </body>
</html>

```

At the app.js file, we first create a click function for the button. In the function, we create a GET request and send a request to the API, after that fetch the returned JSON response and print the IP information on the screen.

```sh
document.getElementById("find").onclick = function() {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://api.ipify.org?format=json", false );
    xmlHttp.send( null );
    try{
        let obj = JSON.parse(xmlHttp.responseText);
        document.getElementById("result").innerHTML = obj.ip;
    }catch(e){
        document.getElementById("result").innerHTML = "An error occured";
    }
};
```

Finally, when an update is made in the plugin, source codes will not update dynamically. So, in case of a change, don't forget to refresh the source code on the extensions page.

[![N|Solid](http://yazilimhayati.com/image-2.png)](https://www.medianova.com)



[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [ipify]: <https://api.ipify.org/>
  
