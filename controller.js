function victory() {
    const win_or_lose = document.getElementById("whowins");
    win_or_lose.textContent = "Congratulations!";

    const second = document.getElementById("second");
    second.textContent = "Rock beats scissors.";

    const brock = document.getElementById("b1");
    const bpaper = document.getElementById("b2");
    const bnext = document.getElementById("b3");

    if (brock.style.display !=="none") {
        bpaper.style.display = "none";
        bnext.style.display = "inline";
        brock.style.display = "none";
    }
}

function failure() {
    const losing = document.getElementById("whowins");
    losing.textContent = "Your brain is small as a nut."

    const secondfail = document.getElementById("second");
    secondfail.textContent = "Paper does not beat scissors.";

    tryagainpaper();
}

function nextRound() {
    const nextround = document.getElementById("whowins");
    nextround.textContent = "What beats rock?";

   const second = document.getElementById("second");
   second.textContent = "";

    const brock     = document.getElementById("b1");
    const bpaper    = document.getElementById("b2");
    const bnext     = document.getElementById("b3");
    const bglass    = document.getElementById("b4");
    const bmetalpipe     = document.getElementById("b5");
    const bcomputer = document.getElementById("b6");

    if (bnext.style.display !=="none") {
        brock.style.display = "none";
        bpaper.style.display = "none";
        bnext.style.display = "none";
        bglass.style.display = "inline";
        bmetalpipe.style.display = "inline";
        bcomputer.style.display = "inline";
    }
}

function tryagainpaper() {
    const brock     = document.getElementById("b1");
    const bpaper    = document.getElementById("b2");
    const bnext     = document.getElementById("b3");
    const bglass    = document.getElementById("b4");
    const bmetalpipe     = document.getElementById("b5");
    const bcomputer = document.getElementById("b6");
    const btryagain = document.getElementById("tryagain");
    brock.style.display = "none";
    bpaper.style.display = "none";
    bnext.style.display = "none";
    bglass.style.display = "none";
    bmetalpipe.style.display = "none";
    bcomputer.style.display = "none";
    btryagain.style.display = "inline";

}

function backtostart() {
    const win_or_lose = document.getElementById("whowins");
    win_or_lose.textContent = "What beats scissors?";

    const second = document.getElementById("second");
    second.textContent = "";

    const brock     = document.getElementById("b1");
    const bpaper    = document.getElementById("b2");
    const bnext     = document.getElementById("b3");
    const bglass    = document.getElementById("b4");
    const bmetalpipe     = document.getElementById("b5");
    const bcomputer = document.getElementById("b6");
    const btryagain = document.getElementById("tryagain");
    brock.style.display = "inline";
    bpaper.style.display = "inline";
    bnext.style.display = "none";
    bglass.style.display = "none";
    bmetalpipe.style.display = "none";
    bcomputer.style.display = "none";
    btryagain.style.display = "none";

}

