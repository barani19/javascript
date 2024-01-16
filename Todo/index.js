const todo = JSON.parse(localStorage.getItem('tostore')) || [];
console.log(localStorage.getItem('tostore'))

function rendertodo(){
    let toshow = '';
    let render = document.querySelector('.tolist');
  
    for(let i=todo.length-1;i>=0;i--){
        toshow += `
        <div class="c">${todo[i].name}</div>
        <div class="c">${todo[i].dueDate}</div>
        <div><button class="del" onclick="todo.splice(${i},1)
        rendertodo()
        localStorage.setItem('tostore',JSON.stringify(todo));
        ">Delete</button></div>
        `
    }
    render.innerHTML = toshow
}

function addtodo(event){
    let totext = document.querySelector('.todotext');
    let todate = document.querySelector('.todate');
    let date = todate.value;
    let text = totext.value;
    todo.push(
    // name: name,Date:Date instead of writing this    
    {name:text,dueDate:date}
    // todo.name = text,
    // todo.dueDatedate = date
    );
    console.log(date);
    totext.value = '';
    rendertodo();
    localStorage.setItem('tostore',JSON.stringify(todo));
}