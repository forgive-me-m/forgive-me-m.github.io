const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

let yesSize = 16;
let noSize = 16;

noBtn.addEventListener("click", () => {
    
    yesSize += 15;
    noSize -= 50;
    yesBtn.style.fontSize = `${yesSize}px`;
    noBtn.style.fontSize = `${noSize}px`;

    // NO butonunu rastgele bir konuma taşı
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

document.getElementById("yes-btn").onclick = function() {
    window.location.href = "yes.html";  
}

