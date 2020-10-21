var slider1 = new Slider();
var slider2 = new Slider();


slider2.imagesUrls[0] = ('https://img.drive.ru/i/0/5b7fd52eec05c4804a000068.jpg');
slider2.imagesUrls[1] = ('https://cdnimg.rg.ru/i/gallery/822747f4/6_7f5b75b1.jpg');
slider2.imagesUrls[2] = ('https://wroom.ru/i/news/10932img1.jpg');
slider2.imagesUrls[3] = ('https://s0.rbk.ru/v6_top_pics/media/img/4/39/755300180767394.jpg');

slider2.start('itk-slider2');

slider1.imagesUrls[0] = 'https://cdn.fishki.net/upload/post/201406/27/1280936/002.jpg';
slider1.imagesUrls[1] = 'https://99px.ru/sstorage/53/2015/12/tmb_153870_9151.jpg';
slider1.imagesUrls[2] = 'https://io.ua/img_aa/large/3665/31/36653193.jpg';
slider1.imagesUrls[3] = 'https://img1.goodfon.ru/wallpaper/big/e/21/toyota-supra-carwash-devushka-mashina-moika-fotograf-denis-f.jpg';

slider1.start('itk-slider1');

//? Создание слайдера
// var imagesUrls = [];
// let currentImageIndex = 0;
// ! find elements
// let showPrevBtn = document.getElementById('show-prev-btn'),
// 	showNextBtn = document.getElementById('show-next-btn'),
// 	slideImage = document.getElementById('slide-img');

// //! Subscribe to events
// showPrevBtn.addEventListener('click', onShowPrevClick);
// showNextBtn.addEventListener('click', onShowNextClick);


// ! create image array
// imagesUrls.push('https://img.drive.ru/i/0/5b7fd52eec05c4804a000068.jpg');
// imagesUrls.push('https://cdnimg.rg.ru/i/gallery/822747f4/6_7f5b75b1.jpg');
// imagesUrls.push('https://wroom.ru/i/news/10932img1.jpg');
// imagesUrls.push('https://s0.rbk.ru/v6_top_pics/media/img/4/39/755300180767394.jpg');

// slideImage.src = imagesUrls[currentImageIndex];
// showPrevBtn.disabled = true;
// showPrevBtn.innerHTML = "STOP";


// ! Function definitions

// function onShowPrevClick() {
// 	currentImageIndex--;
// 	slideImage.src = imagesUrls[currentImageIndex];
// 	showNextBtn.disabled = false;
// 	showNextBtn.innerHTML = "NEXT";

// ! disabled prev Button if need
// 	if (currentImageIndex === 0) {
// 		showPrevBtn.disabled = true;
// 		showPrevBtn.innerHTML = "STOP";
// 	}
// }
// function onShowNextClick() {
// 	currentImageIndex++;
// 	slideImage.src = imagesUrls[currentImageIndex];
// 	showPrevBtn.disabled = false;
// 	showPrevBtn.innerHTML = "PREV";

	// ! disabled next Button if need
// 	if (currentImageIndex === (imagesUrls.length - 1)) {
// 		showNextBtn.disabled = true;
// 		showNextBtn.innerHTML = "STOP";
// 	}

// }

