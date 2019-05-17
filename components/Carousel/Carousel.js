class Carousel {
	constructor(element) {
		this.element = element;
		const images = this.element.querySelectorAll('img');
		this.carouselImage = [];
		images.forEach(image => {
			this.carouselImage = [ ...this.carouselImage, new CarouselImage(image) ];
		});
		this.currentIndex = 0;
		this.imageTotal = images.length;
		this.previousButton = this.element.querySelector(`.left-button`);
		this.nextButton = this.element.querySelector(`.right-button`);
		this.previousButton.addEventListener('click', () => this.autoChangeCarouselImage());
		this.nextButton.addEventListener('click', () => this.autoChangeCarouselImage());
		this.initialCall = true;
		this.direction = true;
	}
	// handlePreviousClick() {
	// 	/*
	//         Going to check if index is < 0 and if true assign next slide to be the last slide
	//     */
	// 	this.direction = false;
	// 	this.carouselImage[this.currentIndex].deSelect();
	// 	// this.currentIndex === 0
	// 	// 	? this.changeCarouselImage(this.imageTotal - 1, false)
	// 	// 	: this.changeCarouselImage(this.currentIndex - 1, false);
	// 	this.autoChangeCarouselImage();
	// }
	// handleNextClick() {
	// 	/*
	//     going to add + 1 to the current selected Image and error check to make sure it doesn't go over
	//         the this.imageTotal - 1
	//     */
	// 	this.carouselImage[this.currentIndex].deSelect();
	// 	// this.currentIndex === this.imageTotal - 1
	// 	// 	? this.changeCarouselImage(0, true)
	// 	// 	: this.changeCarouselImage(this.currentIndex + 1, true);
	// 	this.direction = true;
	// 	this.autoChangeCarouselImage();
	// }
	// changeCarouselImage(index, direction) {
	// 	this.carouselImage[index].select();
	// 	this.currentIndex = index;
	// 	// this.autoChangeCarouselImage(direction, true);
	// }
	autoChangeCarouselImage() {
		// debugger;
		this.initialCall ? (this.initialCall = !this.initialCall) : this.carouselImage[this.currentIndex].deSelect();
		if (this.direction) {
			this.currentIndex === this.imageTotal - 1 ? (this.currentIndex = 0) : (this.currentIndex += 1);
		} else {
			this.currentIndex < 0 ? (this.currentIndex = this.imageTotal - 1) : (this.currentIndex = this.currentIndex - 1);
		}
		console.log(this.currentIndex, Date.now());
		this.carouselImage[this.currentIndex].select();
		setInterval(() => this.autoChangeCarouselImage, 5000);
	}
}

class CarouselImage {
	constructor(image) {
		this.image = image;
	}
	deSelect() {
		this.image.classList.remove('selected-img');
	}
	select() {
		this.image.classList.add('selected-img');
	}
}
let carousel = document.querySelector(`.carousel`);
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
