let dayEl=document.getElementById("day-el")
let attEl=document.getElementById("att-el")
let perEl=document.getElementById("per-el")
let dayBtn=document.getElementById("day-btn")
let attBtn=document.getElementById("att-btn")
let moreEl=document.getElementById("more-el")

let a = 0;
let b = 0;
let c = 0;
let d = 0

dayBtn.addEventListener("click",inc)

function inc() {
    a += 1
    c = (b/a)*100
    dayEl.innerText = " " + a
    perEl.innerText = " " + c
    attBtn.addEventListener("click",att);
    let e=0
    e=((a+10)*0.75)-b
    let f=Math.ceil(e)
    if(e>10) {
        moreEl.innerText = "10 + "
    } else {
        moreEl.innerText = f
    }
}

function att(){
    if (a>d) {
        b += 1
        c = (b/a)*100
        attEl.innerText = " " + b
        perEl.innerText = " " + c
        d += 1
        d=a;
    }
    let e=0
    e=((a+10)*0.75)-b
    let f=Math.ceil(e)
    if(e>10) {
        moreEl.innerText = "10 +"
    } else {
        moreEl.innerText = f
    }
}

