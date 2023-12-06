function scrollFunc(currentEl, toElemId){
    let allActive = document.getElementsByClassName("active");
    for (const element of allActive){
        element.classList.remove("active")
    }
    currentEl.classList.add("active");
    const body = document.querySelector("body");
    const toelemHeight = document.getElementById(toElemId).offsetTop;
    console.log(toElemId)
    console.log(toelemHeight)
    body.scrollTo({top:toelemHeight,behavior:'smooth'});
}