const bg = document.getElementById('star-sky');

function CreateStar(i, parent){
    const star = document.createElement("div");
    star.classList.add("star");
    star.id = "star" + i;
    parent.appendChild(star);
    return star;
}

function getRandomInt() {
    return Math.floor(Math.random() * 100);
  }

for(var i = 0; i < 100; i++)
{
    let star = CreateStar(i, bg);
    star.style.top = getRandomInt()+ "%";
    star.style.left = getRandomInt() + "%";
    console.log(getRandomInt());
}