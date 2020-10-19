// ! find elements
let showPrewBtn = document.getElementById('show-prev-btn'),
		showNextBtn = document.getElementById('show-next-btn'),
		slideImage = document.getElementById('slide-img');

//! Subscribe to events

showPrewBtn.addEventListener('click', onShowPrevClick);
showNextBtn.addEventListener('click', onShowNextClick);


// ! create image array
var imagesUrls = [];
imagesUrls.push('https://img.drive.ru/i/0/5b7fd52eec05c4804a000068.jpg');
imagesUrls.push('https://cdnimg.rg.ru/i/gallery/822747f4/6_7f5b75b1.jpg');
imagesUrls.push('https://wroom.ru/i/news/10932img1.jpg');
imagesUrls.push('https://s0.rbk.ru/v6_top_pics/media/img/4/39/755300180767394.jpg');

let currentImageIndex = 0;
slideImage.src = imagesUrls[currentImageIndex];



// ! Function definitions

function onShowPrevClick() {
	currentImageIndex--;
	slideImage.src = imagesUrls[currentImageIndex];
}
function onShowNextClick() {
	currentImageIndex++;
	slideImage.src = imagesUrls[currentImageIndex];
}