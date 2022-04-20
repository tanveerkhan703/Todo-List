// <==========Getting All required Elements=======>
const inputBox = document.querySelector(".inputField input")
const plusBtn = document.querySelector(".inputField button")
const todoList = document.querySelector(".todolist")
const deleteAllBtn = document.querySelector(".footer button")

inputBox.onkeyup = () =>{
    let userData = inputBox.value; // Getting User Entered Value
    if(userData.trim() !=0){
        plusBtn.classList.add("active") //Active the Plus Btn
    }else{
        plusBtn.classList.remove("active") // Unactive The Plus Button
    }
}
showTasks(); //CALLING ShowTasks Function


plusBtn.onclick =() =>{
    let userData = inputBox.value; // Getting User Entered Value
    let getLocalStorage = localStorage.getItem("New todo"); //Getting local storage
     if(getLocalStorage == null){   // IF local storage is null
        listArry = [];    //Creating Blank array
     }else{
        listArry = JSON.parse(getLocalStorage)  //transforming json string into a js object
     }
     listArry.push(userData); // Pushing or adding user data
     localStorage.setItem("New todo", JSON.stringify(listArry)); //transforming js object into a json string
      showTasks(); //CALLING ShowTasks Function
      plusBtn.classList.remove("active") // Unactive The Plus Button
}

//Function to add task list inside ul

function showTasks(){
    let getLocalStorage = localStorage.getItem("New todo"); //Getting local storage
    if(getLocalStorage == null){   // IF local storage is null
        listArry = [];    //Creating Blank array
     }else{
        listArry = JSON.parse(getLocalStorage)  //transforming json string into a js object
     }
     const pendingNum = document.querySelector(".pendingNum");
     pendingNum.textContent = listArry.length;  // Passing the Value in Pending Number
     if(listArry.length > 0){     // if array lenght is greater than 0
         deleteAllBtn.classList.add("active")   //then activate the clear button
     }else{
        deleteAllBtn.classList.remove("active")  
     }
     let newLiTag = '';
      listArry.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`;

      });
      todoList.innerHTML = newLiTag;  // Adding new li TAG Insid Ul Tag
      inputBox.value = "";  //Once task added leave the input fieldblack
}


// Deleting Task Function

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New todo"); //Getting local storage
    listArry = JSON.parse(getLocalStorage);
    listArry.splice(index, 1); //Delete Or Remove the particular indexed li
    localStorage.setItem("New todo", JSON.stringify(listArry)); 
    showTasks(); //CALLING ShowTasks Function 

}



//Clear Button Function
deleteAllBtn.onclick = ()=>{
    listArry = [];

    //after deleting all task and again updating the local storage

    localStorage.setItem("New todo", JSON.stringify(listArry)); //transforming js object into a json string
    showTasks(); //CALLING ShowTasks Function 


}
