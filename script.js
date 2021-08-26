const addName = function(){
    let text = document.querySelector(".form-control").value
    let li = document.createElement("li")
    li.classList.add("list-group-item")
    li.innerHTML = text
    document.querySelector(".list-group").appendChild(li)


}
const genTeams = function(){
    let x = document.querySelector(".Teams")
    x.innerHTML = ""
    let numOfTeams = document.querySelector("#group-number").value
     numOfTeams = parseInt(numOfTeams)
     console.log(numOfTeams)
    for(let i=1; i<=numOfTeams ;i++){
        let parent = document.createElement("ul")
        parent.classList.add("list-group")
        parent.classList.add(i)

        document.querySelector(".Teams").appendChild(parent)
        
    }

}
