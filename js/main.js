function init() {
	TweenMax.set([ viewport, border ], { alpha: 1 })
	addEventListeners()
	frameOne();
}

function frameOne() {
	TweenMax.set([
		image1_1,
		text1_1,
		text1_2,
		text1_1_container,
		text1_2_container,
		image1_1_container,
		logo,
		text2_1,
		text2_1_container,
	], {opacity:1})

	TweenMax.from([image1_1], 5, {scale: 1.2, x: 5})
	frameOneTL = new TimelineMax();
	frameOneTL
		.from([text1_1_container, text1_2_container], .5, {y: -300})
		.to([text1_1_container], .5, {delay: 2, x: -310}, "sync")
		.to([text1_2_container], .5, {delay: 2, x: 310}, "sync")
		.to([image1_1_container], .7, {y: -400}, "sync1-=.15")
		.from([text2_1_container, image2_1_container], .7, {y: 600}, "sync1-=.15")
		.to([image1_1], .7, {scale: 1.1, y: 15, x: -5}, "sync1-=.15")
		.to([image1_1], 4, {scale: 1, y: 20}, "-=.3")
		.to([logo, gradient], .5, {opacity: 0}, "sync1-=.2")

	TweenMax.delayedCall(3, frameTwo);
}

function frameTwo() {
	TweenMax.set([
		text3_1,
		image2_1,
		image3_1,
		text3_1_container,
		image2_1_container,
		image3_1_container,
	], {opacity:1})
	TweenMax.to([image2_1_container], 4, {scale: 1.1, x: -10})
	TweenMax.from([image3_1], 10, {delay: 2, scale: 1.1})

	frameTwoTL = new TimelineMax();
	frameTwoTL
		.to([text2_1_container, image2_1_container], .5, {delay: 2.8, y: -155}, "sync")
		.to([image2_1], .5, {delay:2.8, y: -15, scale: 1}, "sync")
		.to([text2_1], .5, {delay: 2.8, y: -200}, "sync")
		.from([image3_1_container], .7, {delay: 2.6, y: 600}, "sync")
		.from([text3_1_container], .7, {x: -610}, "sync1-=.25")

	TweenMax.delayedCall(5.4, frameThree);
}

function frameThree() {
	TweenMax.set([text2_1_container], {autoAlpha: 0})
	TweenMax.set([
		text4_1,
		text4_2,
		text4_1_container,
		text4_2_container,
	], {opacity: 1})
	frameThreeTL = new TimelineMax();
	frameThreeTL
		.to([image2_1_container], .7, {y: -380}, "sync")
		.to([image3_1_container], .7, {y: -123}, "sync")
		.to([image3_1], .7, {y: -10}, "sync")
		.to([image2_1], .7, {y: 23}, "sync")
		.to([text3_1_container], .7, {y: -55}, "sync")
		.to([text3_1], .5, {y: -100}, "sync1-=.2")
		.from([text4_1_container], .5, {x: -310}, "sync1-=.3")
		.from([text4_2_container], .5, {x: -310}, "sync1-=.1")
	TweenMax.delayedCall(.5, frameFour)
}

function frameFour() {
	TweenMax.set([
		cta,
		logo,
		gradient,
		sheen
	], {opacity: 1})
	TweenMax.set([sheen], {x: -74})
	frameFourTL = new TimelineMax();
	frameFourTL
		.from([cta], .8, {y: 300}, "sync")
		.from([logo, gradient], .8, {y: 300, opacity: 0}, "sync")
		.to([sheen], 1.8, {delay: .3, opacity: 0.3, x: 230}, "-=.7")
}

function addEventListeners() {
	clickable.addEventListener('mouseover', mouseover)
	mouseover()
}
function mouseover() {
	TweenMax.fromTo(sheen, 1.8, {opacity: 1, x: -74}, {opacity: .3, x: 230})
}