class Carousel {
	constructor(element) {
		this.element = element;
		const images = this.element.querySelectorAll('img');
		images.forEach(image => new CarouselImage(image));
		this.currentIndex = 0;
		this.imageTotal = images.length;
		this.previousButton = this.element.querySelector(`.left-button`);
		this.nextButton = this.element.querySelector(`.right-button`);
		this.previousButton.addEventListener('click', () => this.handlePreviousClick());
		this.nextButton.addEventListener('click', () => this.handleNextClick());
	}
	handlePreviousClick() {
		/*
            Going to check if index is < 0 and if true assign next slide to be the last slide
        */
		this.currentIndex === 0
			? this.changeCarouselImage(this.imageTotal - 1)
			: this.changeCarouselImage(this.currentIndex - 1);
	}
	handleNextClick() {
		/* 
        going to add + 1 to the current selected Image and error check to make sure it doesn't go over
            the this.imageTotal - 1
        */
		this.currentIndex === this.imageTotal - 1
			? this.changeCarouselImage(0)
			: this.changeCarouselImage(this.currentIndex + 1);
	}
	changeCarouselImage(index) {
		console.log('changing image to index', index);
		this.currentIndex = index;
	}
}

class CarouselImage {
	constructor(image) {
		this.image = image;
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
