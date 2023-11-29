const bg = document.getElementById('star-sky');
const N = 300;
main();
// setInterval(() => {

//     animate();

// }, 3000);
document.addEventListener("mousemove", ); // moveStars

function main()
{
    for(var i = 0; i < N; i++)
    {
        let star = CreateStar(i, bg);
        setStarPosition(star);
        setStarSize(star);
    }
}

function animate()
{
    for(var i = 0; i < N; i++)
    {
        moveStar(getStar());
    }
}
function CreateStar(i, parent){
    const star = document.createElement("div");
    star.classList.add("star");
    star.id = "star" + i;
    parent.appendChild(star);
    return star;
}
function getStar()
{
    const star = "star" + getRandomInt(N);
    return document.getElementById(star);
    
}
function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

function setStarPosition(star)
{
    star.style.top = getRandomInt(100)+ "%";
    star.style.left = getRandomInt(100) + "%";
}

function setStarSize(star)
{
    const size = getRandomInt(3) + "px";
    star.style.width = size
    star.style.height = size;
}
///??Копаться здесь vvvvvvvvvvvvv
function moveStars(event)
{
    for (let index = 0; index < N; index++) {
        let star = "star" + index;
        let element = document.getElementById(star);
        let y = element.style.top.replace('%','');
        let x = element.style.left.replace('%','');
        // if(event.movementX >= x - 10 || event.movementX <= x + 10)
        //     moveStar(element)
    }
}
function moveStar(star)
{
    // star.style.left = getRandomInt(100) + "%";
    // star.style.top = getRandomInt(100) + "%";
    star.style.left = getRandomInt(100) + "%";
    star.style.top = 110 + "%";
}

// bg.addEventListener("click", ()=>{
//     let star = "star" + getRandomInt(N);
//     moveStar(star);
// })