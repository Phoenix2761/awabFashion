var heroSectionBackgroundImage = document.querySelector("div.card.heroSection img.card-img");

function changeHeroSectionBackground() {
    if ((window.innerWidth) <= 768) {
        heroSectionBackgroundImage.setAttribute("src", "./heroSectionBackground3.png");
    }
    else {
        heroSectionBackgroundImage.setAttribute("src", "./heroSectionBackground2.png");
    }
}

changeHeroSectionBackground();
window.addEventListener("resize", changeHeroSectionBackground());
