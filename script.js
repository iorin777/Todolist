const clickAdd = () => {
    console.log("追加が押されました")
    const inputText = document.getElementById("inputText").value;
    //console.log(inputText);
    createTodo(inputText);
    document.getElementById("inputText").value= "";
};

const createTodo = (todo) => {
    if(todo == ""){
        alert("値が空です");
    } else{
        const li = document.createElement("li");
        li.innerText = todo;

        //console.log(li);

        const compliteButton = document.createElement("button");
        compliteButton.innerText = "完了";

        compliteButton.addEventListener("click",() => {
        console.log("完了が押された");

        const moveTarget = compliteButton.closest("li");
        console.log(moveTarget);

        compliteButton.remove();

        document.getElementById("compliteList").appendChild(moveTarget);
    });


    document.getElementById("incompliteList").appendChild(li).appendChild(compliteButton);

    }

};

document.getElementById("addButton").addEventListener("click",clickAdd);