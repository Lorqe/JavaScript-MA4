fetch('https://jsonplaceholder.typicode.com/todos')
    .then(result => result.json())
    .then((res) => {
    createList(res);
})
.catch(err => console.log(err))

function createList(result) {
    
    var i;
    
    for(i = 0; i < result.length; i++) {
        var newElement = document.createElement("div");
        newElement.id = "card" + result[i].id;
        newElement.className = "todoCard";
        newElement.innerHTML = "<h1>" + result[i].userId + "</h1><h2>" + result[i].id + ": " + result[i].title + "</h2><div class='btnarea'><button class='status'>" + result[i].completed + "</button></div>";
        document.getElementById("container").appendChild(newElement); 
    }
}