let currentPage = 1;
const totalPages = 7;

const progressBar = document.getElementById("progressBar");

const letter = `Dear Jalpari,

Before you continue, I would like to formally complain.

I think it's highly unfair that one person gets to be this caring, this thoughtful, and this beautiful all at the same time.

You have this strange habit of pretending you're not paying attention...

and then weeks later remembering some tiny random thing I mentioned once.

I still haven't figured out how you do that.

You're one of the few people who makes others feel important without even trying.

You show up.

You listen.

You care.

And somehow you do it all so naturally that you probably don't even realize it.

Also...

whoever approved those eyes should probably be investigated.

And that smile.

Definitely suspicious.

Anyway...

I hope you're having a wonderful retreat.

I hope you're smiling.

I hope you're collecting stories that you'll tell me later.

And selfishly...

I hope you miss me at least a little bit.

❤️

* Vikalp`;

let laterClicks = 0;
let typingStarted = false;

function nextPage() {

const current = document.getElementById(`page${currentPage}`);
current.style.opacity = "0";

setTimeout(()=>{

    current.classList.remove("active");

},300);

currentPage++;

if (currentPage > totalPages) {
    currentPage = totalPages;
}

const next = document.getElementById(`page${currentPage}`);
next.classList.add("active");

setTimeout(()=>{

    next.style.opacity="1";

},50);

updateProgress();

if (currentPage === 5) {
    startTypewriter();
}

if (currentPage === 6) {
    startHearts();
}

}

function updateProgress() {

const percentage = (currentPage / totalPages) * 100;
progressBar.style.width = percentage + "%";

}

function maybeLater(){

laterClicks++;

const btn =
    document.getElementById("laterBtn");

const messages = [
    "🥺 Wait wait wait...",
    "🌹 The roses aren't ready yet...",
    "🧜‍♀️ Jalpari detected. Escape sequence activated.",
    "😭 Fine. You win."
];

showBubble(
    messages[
        Math.min(
            laterClicks - 1,
            messages.length - 1
        )
    ]
);

if(laterClicks < 4){

    const distance =
       150 + (laterClicks * 120);

    const x =
        Math.floor(
            Math.random() * distance * 2
        ) - distance;

    const y =
        Math.floor(
            Math.random() * distance
        ) - distance / 2;

    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

}


function showVerdict() {

const verdict =
    document.getElementById("verdict");

verdict.classList.remove("hidden");

setTimeout(() => {
    nextPage();
}, 2000);


}

function startTypewriter() {


if (typingStarted) {
    return;
}

typingStarted = true;

const target =
    document.getElementById("typewriter");

const button =
    document.getElementById("finalButton");

let index = 0;

function type() {

    if (index < letter.length) {

        target.innerHTML +=
            letter.charAt(index);

        index++;

        setTimeout(type, 25);

    } else {

        button.classList.remove("hidden");
    }
}

type();

}

function startHearts() {


setInterval(() => {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
        (20 + Math.random() * 20) + "px";

    document
        .getElementById("hearts-container")
        .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 300);
}

function showBubble(message){

const bubble =
    document.getElementById(
        "messageBubble"
    );

bubble.innerHTML = message;

bubble.classList.add("show");

setTimeout(() => {

    bubble.classList.remove("show");

},2200);

}

setInterval(()=>{

    const sparkle =
        document.createElement("div");

    sparkle.className =
        "sparkle";

    sparkle.innerHTML =
        "✨";

    sparkle.style.left =
        Math.random()*100 + "%";

    sparkle.style.top =
        Math.random()*100 + "%";

    document.body
        .appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },5000);

},800);