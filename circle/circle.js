const c1 = document.getElementById("circle1")
const c2 = document.getElementById("circle2")
const c3 = document.getElementById("circle3")
const c4 = document.getElementById("circle4")
const c5 = document.getElementById("circle5")
const c6 = document.getElementById("circle6")

const colors = ["skyblue", "purple", "pink", "midnightblue", "green", "red"];
const circles = [c1, c2, c3, c4, c5, c6];

function shuffle() {
    document.getElementById("circle1").style.backgroundColor = "skyblue";
    document.getElementById("circle6").style.backgroundColor = "red";
    colors.sort((a, b) => { return 0.5 - Math.random() });

    circles[0].style.backgroundColor = colors[0]
    circles[1].style.backgroundColor = colors[1]
    circles[2].style.backgroundColor = colors[2]
    circles[3].style.backgroundColor = colors[3]
    circles[4].style.backgroundColor = colors[4]
    circles[5].style.backgroundColor = colors[5]
}