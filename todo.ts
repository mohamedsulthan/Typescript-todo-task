var arr:string[]= [];

var flag:number = 0;

function search(){
    var input= document.getElementById("search_task") as HTMLInputElement;
    var input1 :string = input.value.toLowerCase();
    var ul= document.getElementById("list") as HTMLUListElement ;
    var li= ul.getElementsByTagName("li");

    for (var i = 0; i < li.length; i++) {

        if (li[i].innerText.toLowerCase().indexOf(input1)>-1)
        {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function removetask(e){
    var ul=document.getElementById("list") as HTMLElement;
    var my_ele = e.target.closest('li');
    arr=arr.filter((e)=>e!=my_ele.querySelector(".span").innerText);
    
    ul.removeChild(my_ele);
}





function changefunction(e) {
    var my_ele = e.target.closest('li')
    // console.log(my_ele);
    var val = my_ele.querySelector("#task_option");
    
    if (val.value === "Completed") {

        my_ele.querySelector("#spanid").style.textDecoration = "line-through";
        my_ele.querySelector("#task_ck").checked = true;
    }
    else {
        my_ele.querySelector("#spanid").style.textDecoration = "none";
        my_ele.querySelector("#task_ck").checked = false;
    }
}
function addTask() {
    var task = document.getElementById("task") as HTMLInputElement
    var task1 : string = task.value;

    if (task1.trim() === "") {
        
        flag = 2;

    }

    else {
        if (arr.length == 0) {
            flag = 1;

        }
        else {
           
            if (arr.indexOf(task1.trim()) !== -1){
                    flag = 0;

                    
                }
                else {
                    flag = 1;

                }
            
        }
    }
    if (flag == 1) {
        arr.push(task1.trim());
        var ul = document.getElementById("list") as HTMLUListElement;

        var li = document.createElement("li");
        li.setAttribute('id', 'lid');
        li.setAttribute('class', 'lic');

        var span = document.createElement('span');
        span.setAttribute('class', 'span');
        span.setAttribute('id', 'spanid');

        var sel = document.createElement("select");
        sel.setAttribute('id', 'task_option');

        var check = document.createElement("input");
        check.setAttribute('id', 'task_ck');
        check.setAttribute('type', 'checkbox');
      
        var btnRemove = document.createElement("INPUT");
        btnRemove.setAttribute('type', 'button');
        btnRemove.setAttribute('value', 'Remove');
        btnRemove.setAttribute('id', 'Remove');
     
        btnRemove.className = "btn btn-danger";
        btnRemove.onclick = function () {
            ul.removeChild(this.parentNode);
        };

        span.innerHTML = task1;

        sel.appendChild(new Option("To do", "To do"));
        sel.appendChild(new Option("In progress", "In progress"));
        sel.appendChild(new Option("Completed", "Completed"));





        li.className = "styl";

        li.appendChild(check);
        li.appendChild(span)
        li.appendChild(sel);
        li.appendChild(btnRemove);
        ul.appendChild(li);

        task.value= '';
        sel.addEventListener('change', (e) => {
            console.log(e);
            changefunction(e)
        })
        btnRemove.addEventListener('click',(e)=>{
            removetask(e);
        })
        
    }
    else if(flag===2){
        alert("Enter Task name");
        task.value = '';
    }
    else {
        alert("Task already exists!");
        task.value = '';
    }
    console.log(arr);
}







