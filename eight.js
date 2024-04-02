alert("We're watching you!! HAHA :)");

fetch('response.txt')
.then(response=>response.text())
.then(data=>{
    document.getElementById('response').innerText(data);
})
.catch(error=>console.error('Error fetching response: ',error));