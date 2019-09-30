
function submitData(name, email) {
    const URL='http://localhost:3000/users'
    const requestOptions={
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method:"POST",
        body: JSON.stringify({name: name, email:email})
    }
    return fetch(URL,requestOptions)
}

submitData("John","john@gmail.com")
.then(res=>{
    return res.json()
})
.then(json =>{
  let elem=document.createElement("div");
  elem.innerHTML=js._id_;
    document.body.appendChild(elem)
}).catch(err=>{
    document.body.innerHTML=err.message;
})
    