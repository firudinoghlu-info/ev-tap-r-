const num = document.getElementById("number");
const name = document.getElementById("fullname");
const currentName = document.getElementById("currentName");
num.addEventListener("input", (e) => {
    e.preventDefault();
    const updateName = usernameInput.value;
    currentName.textContent = updateName;
    currentName.reset();
    
});

// task -4
const checkbox = document.getElementById("checkbox");
const sessiyaChoose = document.getElementById("sessiyaChoose");
checkbox.addEventListener("input", (e) => {
    e.defaultPrevented();
})



