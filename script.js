document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    //1//
var button = document.createElement("button");
button.innerHTML = "ALERT";
var hello = document.getElementsByClassName("hello")[0];
hello.appendChild(button);
button.addEventListener ("click", function() {
  alert("Easy!");
});
//2//
var message = document.getElementById("message");
document.getElementById("myButton").addEventListener("click", function() {
    alert( message.value );
});
//3//
var div = document.getElementById( 'mydiv' );
div.onmouseover = function() {
  div.style.backgroundColor = 'orange';
};
div.onmouseout = function() {
  div.style.backgroundColor = 'lightblue';
};
//4//
document.getElementById('name').onclick = randomize;   
     function randomize() {
        return false;
    }   
function randomize() {
  document.getElementById('name').style.color = randomColors();
}
function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
//5//
var button = document.createElement("button");
button.innerHTML = "My Name is";
var genName = document.getElementsByClassName("addName")[0];
genName.appendChild(button);
button.addEventListener ("click", function() {
   var p = document.getElementById("JB");
  document.getElementById("JB").innerText="JB!";
  genName.appendChild(p);
});
//6//
var friends=['JB', 'Lil Wayne', 'J.cole', 'dude', 'luke', 'darth vader', 'spongebob', 'patrick', ' squidward', 'sandy']
var addList= document.getElementById('list')
var btn1 = document.getElementById('btn1')
btn1.addEventListener('click', function(){
for(i=0; i<friends.length; i++){
var li= document.createElement('li')
li.innerHTML=friends[i]
addList.appendChild(li)
}
});
//7//
var sentence = 'hello world my name is Jamaris Buford, goodbye forever world';
var btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function(){
    var split = sentence.split(" ");
   for(i = 0; i < split.length; i++){
       list.children[i].innerText = split[i];
   }

})
  });