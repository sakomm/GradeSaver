// check and see what state the on and off buttons are in and log them to consoel
// every time it changes

const switchToggle = document.querySelector(".onoffswitch");

switchToggle.addEventListener("change", () => {
    console.log(onoffswitch.checked);
});