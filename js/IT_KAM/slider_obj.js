var sliderFactory = {
	createNewSlider : function () {
		var newSlider = {
			imagesUrls: [],
			currentImageIndex: 0,
			// ! find elements
			showPrevBtn: null,
			showNextBtn: null,
			slideImage: null,
	
		start: function (elId) {
			var that = this;
			var elSelector = '#' + elId;
			var el = document.querySelector (elSelector);
			
			this.showPrevBtn = el.querySelector('.show-prev-btn');
			this.showNextBtn = el.querySelector('.show-next-btn');
			this.slideImage = el.querySelector('.slide-img');
	
			this.showPrevBtn.addEventListener('click', function (e) {
				that.onShowPrevClick(e);
			});
			this.showNextBtn.addEventListener('click', function (e) {
				that.onShowNextClick(e);
			});
	
	
			// ! create image array
			this.imagesUrls.push('https://img.drive.ru/i/0/5b7fd52eec05c4804a000068.jpg');
			this.imagesUrls.push('https://cdnimg.rg.ru/i/gallery/822747f4/6_7f5b75b1.jpg');
			this.imagesUrls.push('https://wroom.ru/i/news/10932img1.jpg');
			this.imagesUrls.push('https://s0.rbk.ru/v6_top_pics/media/img/4/39/755300180767394.jpg');
	
			this.slideImage.src = this.imagesUrls[this.currentImageIndex];
			this.showPrevBtn.disabled = true;
			this.showPrevBtn.innerHTML = "STOP";
		},
	
		// ! Function definitions
	
		onShowPrevClick: function (e) {
			this.currentImageIndex--;
			this.slideImage.src = this.imagesUrls[this.currentImageIndex];
			this.showNextBtn.disabled = false;
			this.showNextBtn.innerHTML = "NEXT";
	
			// disabled prev Button if need
			if (this.currentImageIndex === 0) {
				this.showPrevBtn.disabled = true;
				this.showPrevBtn.innerHTML = "STOP";
			}
		},
		onShowNextClick: function (e) {
			this.currentImageIndex++;
			this.slideImage.src = this.imagesUrls[this.currentImageIndex];
			this.showPrevBtn.disabled = false;
			this.showPrevBtn.innerHTML = "PREV";
	
			// disabled next Button if need
			if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
				this.showNextBtn.disabled = true;
				this.showNextBtn.innerHTML = "STOP";
			}
		}
	};
	return newSlider;
	}
}
