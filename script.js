const addName = function(){
    let text = document.querySelector(".form-control").value
    let li = document.createElement("li")
    li.classList.add("list-group-item")
    li.innerHTML = text
    document.querySelector(".list-group").appendChild(li)


}
const assignName = function(){
    let name = document.querySelector("li")
    
}