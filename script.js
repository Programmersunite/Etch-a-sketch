/*   

randomColorGeneretor

function to assign color to
pick an object with hover event
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
*/

//Main Box
const blockContainer =document.createElement("div")
blockContainer.className = "container"
blockContainer.style.background='grey'
blockContainer.style.border="5px solid red"
blockContainer.style.width="480px"
blockContainer.style.height="480px"
blockContainer.style.margin='auto'
blockContainer.style.marginTop="150px"

document.body.appendChild(blockContainer)

//Little Boxes
/*
create a div called grid
16x16
text.forEach(function(el) {
    var div = document.createElement("div");
    div.className = "finalBlock";
    div.innerHTML = el;
    document.body.appendChild(div);
});
*/
let numberOfDivs = 20;

function assignColor (e) {
let randomColor = Math.floor(Math.random()*16777215).toString(16);
e.target.style.background = `#${randomColor}`

}

function createGrid(){
for(var i = 0; i < numberOfDivs; i += 1) {
    let div = document.createElement("div");
    div.className = "gridElement";
    div.textContent=`${i}`;
    div.style.background="white";
    blockContainer.appendChild(div)
    div.addEventListener('mouseover',assignColor)

 } }
 
createGrid()
//Reset button
let resetBtn = document.createElement("button")
resetBtn.textContent = "Reset"
resetBtn.style.display= "flex"

resetBtn.style.margin= "20px auto 0px auto"
document.body.appendChild(resetBtn)

function clearCanvas(){
    let canvas = document.querySelectorAll('.gridElement')
    canvas.forEach((block) => {
        block.style.background="white"

    })
    
}
resetBtn.addEventListener("click",clearCanvas)

/*
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      alert(button.id);
    });
  });
*/

/* 

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");


add style backgound with randomColorGenerator
div.setAttribute('style', 'color: blue; background: white'); 
div.getAttribute('id'); 

btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});





var text = ["text1", "tex2", "text3", "text4"];
for(var i = 0; i < text.length; i += 1) {
    var div = document.createElement("div");
    div.className = "finalBlock";
    div.innerHTML = text[i];
    document.body.appendChild(div);
}
*/