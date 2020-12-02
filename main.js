const img1 = "https://picsum.photos/id/237/200/300";
const img2 = "https://picsum.photos/id/243/200/300";
const img3 = "https://picsum.photos/id/222/200/300";
const img4 = "https://picsum.photos/id/217/200/300";
const img5 = "https://picsum.photos/id/250/200/300";

const photos = [img1, img2, img3, img4, img5];
// komentarz

let currentIndex = 1;

const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const photoImg = document.querySelector(".picContainer");
photoImg.setAttribute("src", photos[0]);

btnPrev.addEventListener('click', onClickPrev);
btnNext.addEventListener('click', onClickNext);

function onClickPrev()
{
    currentIndex--;
    if(currentIndex < 0)
    {
        currentIndex = 4;
        photos[currentIndex];
        photoImg.src = photos[currentIndex];
    }
    else
    {
        photos[currentIndex];
        photoImg.src = photos[currentIndex];
    }
}

function onClickNext()
{
    currentIndex++;
    if(currentIndex > 4)
    {
        currentIndex = 0;
        photos[currentIndex];
        photoImg.src = photos[currentIndex];
    }
    else
    {
        photos[currentIndex];
        photoImg.src = photos[currentIndex];
    }
}
