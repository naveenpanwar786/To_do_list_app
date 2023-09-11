const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
function addTask(){
     if(inputBox.value===''){
          alert('You must write something!');
     }else{
          let li = document.createElement("li");
          li.innerHTML = inputBox.value;
          listContainer.appendChild(li);
          let span = document.createElement("span");
          
          /*The code span.innerHTML = "\u00d7"; 
          sets the inner HTML content of a span element to the Unicode character represented by the escape sequence "\u00d7", 
          which corresponds to the multiplication sign (×). */
          span.innerHTML = "\u00d7";
          li.appendChild(span);
     }
     inputBox.value = "";
     saveData();
}

listContainer.addEventListener("click",function(e){
     if(e.target.tagName==="LI"){

          /*When you click on an element in a web page, 
          like a checkbox or a list item, a JavaScript event is triggered.

          The e.target part refers to the specific element that you clicked on. 
          It's like pointing to the thing you just clicked with your mouse.

          classList is a special feature of that element that keeps track of the CSS classes applied to it. 
          Think of it as a list of all the style-related names this element has.

          toggle("checked") is a command you give to this list of style-related names (classList). 
          It says, "If the element has the class 'checked,' remove it. If it doesn't have the class 'checked,' add it." */
          e.target.classList.toggle("checked");
          saveData();
     }else if(e.target.tagName==="SPAN"){
          //span is a child of list
          e.target.parentElement.remove();
          saveData();
     }
},false);

function saveData(){
     localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
     listContainer.innerHTML = localStorage.getItem("data");
}
//still store in the browser
showTask();