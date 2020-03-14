var numSquares = 6;
var color = generateRandomColors(numSquares);
var square = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var pickedColor = rancol();
var pickedcol = document.getElementById("pick");
var head = document.querySelector("h1");
var resetButton = document.getElementById("reset");
resetButton.addEventListener("click",function(){
    //generate new six colors
    color = generateRandomColors(numSquares);
    //pick a new guessing color
    pickedColor = rancol();
    //change the heading color display
    pickedcol.textContent = pickedColor;
    //change button name
    resetButton.textContent = "Change Colors";
    head.style.background = "steelblue";
    message.textContent = "";
    //display the six colors
    for(var i = 0; i< square.length; i++)
    {
        square[i].style.backgroundColor = color[i];
    }
});
var easybutton = document.querySelector("#easy");
var hardbutton = document.querySelector("#hard");
hardbutton.classList.add("selected");
easybutton.addEventListener("click",function(){
    numSquares = 3;
    easybutton.classList.add("selected");
    hardbutton.classList.remove("selected");
    color = generateRandomColors(numSquares);
    pickedColor = rancol();
    for(var i = 0; i<square.length; i++)
    {
        if(color[i]){
            square[i].style.backgroundColor = color[i];
        }
        else{
            square[i].style.display = "none";
        }
    }
});
hardbutton.addEventListener("click",function(){
    numSquares = 6;
    easybutton.classList.remove("selected");
    hardbutton.classList.add("selected");
    color = generateRandomColors(numSquares);
    pickedColor = rancol();
    for(var i = 0; i<square.length; i++){
        square[i].style.display = "block";
        square[i].style.backgroundColor = color[i];
    }
});
pickedcol.textContent = pickedColor;
for(var i = 0; i<square.length; i++)
{
    square[i].style.background = color[i];
    square[i].addEventListener("click",function(){
        if(this.style.background === pickedColor){
            message.textContent = "CORRECT! :)";
            head.style.background = pickedColor;
            fillcol(pickedColor);
            resetButton.textContent = "Play Again?";
        }
        else{
            this.style.background = "#232323";
            message.textContent = "TRY AGAIN :(";
        }
    });
}
function rancol(){
    var random = Math.floor((Math.random() * color.length));
    return color[random];
}
function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i<num; i++)
    {
        arr[i] = generateColor();
    }
    return arr;
}
function generateColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var st = "rgb("+r+", "+g+", "+b+")";
    return st;
}
function fillcol(color){
    for(var i = 0; i<square.length; i++)
    {
        square[i].style.backgroundColor = color;
    }
}