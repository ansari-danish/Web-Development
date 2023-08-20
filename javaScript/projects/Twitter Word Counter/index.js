let textarea = document.querySelector("textarea");
let counter = document.querySelector(".counter")
textarea.addEventListener("input", () => {

    let length = textarea.value.length;
    if(length === 0){
        textarea.style.display("none")
        return;
    }else {
        counter.innerHTML = `${280 - textarea.value.length}`
    }
})