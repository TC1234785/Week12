//1. get a reference to the button -> querySelector
const button = document.querySelector("#clickMe");
//2. define a function to alert the user
function alertUser(){
    alert('You Clicked');
    // used if  we do not have an option parameter button.removeEventListener("click",alertUser);
}
//3. add the function as event listener
// used if  we do not have an option parameter  button.addEventListener("click", alertUser);
//button.addEventListener("click", alertUser, {once: true});

//button.addEventListener("click", alertUser, {once:true});

function changeBGPink()
{
    document.body.classList.add('pinkBG')
    //document.body.classList.toggle('pinkBG')
}
button.addEventListener("click", changeBGPink);

function changeText(event)
{ console.log(event)
    //if it says click me! change it to click
    //else chang it to clicked
    if (button.textContent=== "Click Me!"){
        button.textContent= 'Clicked!'
    }
    else {
        button.textContent= "Click Me!"
    }

}
button.addEventListener("click", changeText);

//1. find the div
const buttonContainer = document.querySelector(".button-container")
//2. define changeBGGreen function
function changeBGGreen(event){
    if(event.target.tagName === "BUTTON"){
        event.target.classList.add('greenBG')
    }
}
///3. add the fnc as event listener
buttonContainer.addEventListener("mouseover", changeBGGreen)

//Define a function to change text color
function changeTextColor(event)
{
    //with style
//event.target.style.color = event.target.textContent

    //with classList
//event.target.classList.add(event.target.textContent)
if(event.target.tagName === "BUTTON"){
    event.target.classList.add(event.target.textContent)
}

//if 'red button is clicked -> the text color should be red
}
buttonContainer.addEventListener("click", changeTextColor)

//1. find the element
//2. define function
function addNewElements(){
    //createElement x2 -> button and p
    const newButton = document.createElement('button');
    const newP = document.createElement('p');

    newButton.addEventListener("mouseover", changeBGGreen)
    newP.addEventListener("mouseover", changeBGGreen)
    //append Child x2
    document.body.appendChild(newP)
    document.body.appendChild(newButton)    
    
    //textContent x2
    newButton.textContent = "purple"
    newP.textContent = "something"
    
}
//3. addEventListener
button.addEventListener("click", addNewElements)
