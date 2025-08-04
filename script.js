const todo=JSON.parse(localStorage.getItem("todo"))||[];
rendertodo()

function rendertodo(){
    let todohtml="";
    for(let i=0;i<todo.length;i++){
        let html=`<div>
        <a>${todo[i].name}</a>
        <a>${todo[i].date}</a>
        <button class="delete" onclick="deleterow(${i})">Delete</button>
        </div>`;
        todohtml+=html;
    }
    document.querySelector(".todo-list").innerHTML=todohtml;
}

function addtask(){
    let name=document.querySelector(".name").value;
    let date=document.querySelector(".date").value;
    if(name&&date){
        let data={name,date};
        todo.push(data);
        console.log(todo);
        document.querySelector(".name").value='';
        document.querySelector(".date").value='';
        localStorage.setItem("todo",JSON.stringify(todo));
        rendertodo();
    }
}

function deleterow(i){
    todo.splice(i,1);
    rendertodo();
}