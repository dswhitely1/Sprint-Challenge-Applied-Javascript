class Carousel {
	constructor(element) {
		this.element = element;
		this.images = this.element.querySelectorAll('img');
		this.imageTotal = this.images.length;
		this.previousButton = this.element.querySelector(`.left-button`);
		this.nextButton = this.element.querySelector(`.right-button`);
		this.previousButton.addEventListener('click', () => this.handlePreviousClick());
		this.nextButton.addEventListener('click', () => this.handleNextClick());
	}
	handlePreviousClick() {
		console.log('Previous Click');
	}
	handleNextClick() {
		console.log('Next Click');
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
