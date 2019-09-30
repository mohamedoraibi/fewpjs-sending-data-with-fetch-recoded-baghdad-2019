// Add your code here
let formData = {
  dogName: "Byron",
  dogBreed: "Poodle"
};

let configObj = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  method: "POST",
  body: JSON.stringify(formData)
};

fetch("http://localhost:3000/dogs", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  })
  .catch(function(error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  });


function submitData(name, email) {

  let body=document.querySelector('body');
  body=[];

  fetch("http://localhost:3000/users", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ name: name, email: email })

  }).then(function(response) {
    return response.json();
  }).then(function(object) {
    let body=document.querySelector('body');
    let node = document.createElement("li");  
    let content=document.createTextNode(object.name+" "+object.email);
    node.appendChild(content);
    body.appendChild(node);
    object.body.appendChild

  }).catch(function(error) {
    return error.message;
  })
  

}

