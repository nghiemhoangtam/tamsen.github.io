let isActive = false;
let arrNavLink = document.getElementsByClassName("nav-link");
let arrArrowDropDown = document.getElementsByClassName("arrow-dropdown");
// for (let i = 0; i < arr.length; i++) {
//     arr[i].addEventListener("click", handleActive)
// }
// console.log(arr);

// function handleActive(event) {

//     event.preventDefault();
//     console.log(event);
// }

for (let i = 0; i < arrArrowDropDown.length; i++) {
    arrArrowDropDown[i].addEventListener("click", handleActive);
}

function handleActive(event) {
    console.log(event);
    let currentTag = event.target
    if (currentTag.classList.contains('active')) {
        currentTag.classList.remove('active');
    } else {
        currentTag.classList.add('active');
    }
    event.preventDefault();

}