//declare paused as false on load.
let paused = false;
let interval = null;

//start clock
function counter() {
    let time = 0;
    interval = window.setInterval(function() {
        let time = document.getElementById("counter").innerText;
        time = parseInt(time);
        time = time + 1;
        document.getElementById("counter").innerText = time;
    }, 1000)
};

//minus & plus counter
function minus() {
    let counter = document.getElementById("counter").innerText;
    counter = counter - 1;
    document.getElementById("counter").innerText = counter;
}
function plus() {
    let counter = document.getElementById("counter").innerText;
    counter = parseInt(counter) + 1;
    document.getElementById("counter").innerText = counter;
}

//like function
function createLike(number) {
    const likeList = document.getElementsByClassName("likes")
    const thisLike = document.createElement("li")
    thisLike.id = `${number}-likes`;
    thisLike.innerHTML = `The number ${number} has <span id="${number}">1</span> like.`;
    likeList[0].appendChild(thisLike);
}
function addLike(number) {
    const thisLike = document.getElementById(`${number}-likes`)
    const span = document.getElementById(`${number}`);
    let likeNumber = span.innerText;
    let newNumber = parseInt(likeNumber) + 1;
    span.innerText = newNumber;
}

//pause functionality
function pause() {
    const pauseButton = document.getElementById("pause");
    pauseButton.innerText = "resume";
    const counter = document.getElementById("counter").innerText
    paused = true;
    const minusBtn = document.getElementById("minus");
    const plusBtn = document.getElementById("plus");
    const heartBtn = document.getElementById("heart");
    minusBtn.disabled = true;
    plusBtn.disabled = true;
    heartBtn.disabled = true;
    clearInterval(interval);
};
function unpause() {
    const pauseButton = document.getElementById("pause");
    pauseButton.innerText = "pause";
    paused = false;
    const minusBtn = document.getElementById("minus");
    const plusBtn = document.getElementById("plus");
    const heartBtn = document.getElementById("heart");
    minusBtn.disabled = false;
    plusBtn.disabled = false;
    heartBtn.disabled = false;
    counter();
}

//comment functionality
function addComment(comment) {
    const commentBox = document.getElementById("list");
    const p  = document.createElement("p");
    p.innerText = comment;
    commentBox.appendChild(p);
}

document.addEventListener("DOMContentLoaded", function() {
    counter();
    
    //minus & plus functionality
    const minusButton = document.getElementById("minus");
    minusButton.addEventListener("click", function() {
        minus();
    })
    const plusButton = document.getElementById("plus");
    plusButton.addEventListener("click", function(){
        plus();
    })
    
    // like functionality
    const likeButton = document.getElementById("heart")
    likeButton.addEventListener("click", function(){
        const number = document.getElementById("counter").innerText;
        const check = document.getElementById(`${number}-likes`);
        if(check) {
            addLike(number);
        } else {
            createLike(number);
        }
    })
    
    const pauseButton = document.getElementById("pause")
    pauseButton.addEventListener("click", function(){
        // pause counter if pause is false, unpause if pause is false
        if (paused) {
            unpause()
        } else {
            pause()
        }
    });

    const commentForm = document.getElementById("comment-form")
    commentForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const comment = event.target["comment"].value;
        addComment(comment);
        // console.log(p);
    })

})

