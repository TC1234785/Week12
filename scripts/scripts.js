//1. get a reference to the button -> querySelector
const button = document.querySelector("#clickMe");
//2. define a function to alert the user
function alertUser(){
    alert('You Clicked');
    // used if  we do not have an option parameter button.removeEventListener("click",alertUser);
}
//3. add the function as event listener
// used if  we do not have an option parameter  button.addEventListener("click", alertUser);
button.addEventListener("click", alertUser, {once: true});
