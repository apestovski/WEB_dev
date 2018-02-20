/*Andrei Pestovski
Date: 2/18/2018
Description: asynchronous POST request javasript for the Ajax/forms assignment
*/

document.addEventListener('DOMContentLoaded', bindPost);
function bindPost(){
    var url = "http://httpbin.org/post";
    document.getElementById('textSubmit').addEventListener('click', function(event){
      var req = new XMLHttpRequest();
      var payload = {inputText:null};
      payload.inputText = document.getElementById('inputText').value;
      req.open('POST', url, true);
      req.setRequestHeader('Content-Type', 'application/json');
      req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
          var response = JSON.parse(req.responseText);
          console.log(response);
            document.getElementById('outputText').textContent = response.data;
        } else {
          console.log("Error in network request: " + req.statusText);
        }});
      req.send(JSON.stringify(payload));
      event.preventDefault();
    })};