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

function changeText()
{
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