
function submitData(name, email) {
    const URL='http://localhost:3000/users'
    const requestOptions={
        headers: {
            'Content-Type' : 'application/json',
            'Accepts' : 'application/json'
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
    console.log(json)
})