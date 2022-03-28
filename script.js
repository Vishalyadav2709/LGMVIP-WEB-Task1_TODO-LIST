document.querySelector('#add').onclick = function(){
    if(document.querySelector('#todo').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#viewlist').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#todo').value}
                </span>
                <button class="delete">
                <img src="trash.png" alt="" >
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
         todo.value = '';
    }
}
