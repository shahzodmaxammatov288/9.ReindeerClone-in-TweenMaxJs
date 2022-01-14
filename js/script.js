TweenMax.to(".overlay h1", 2, {
  opacity: 0,
  y: -60,
  ease: Expo.easeInout
})

TweenMax.to(".overlay span", 2, {
  delay: 1,
  opacity: 0,
  y: -60,
  ease: Expo.easeInout
})

TweenMax.to(".overlay", 2, {
  delay: 1.5,
  y: "-100%",
  ease: Expo.easeInout
})

TweenMax.from(".ellipse-container", 1, {
  delay: 2,
  opacity: 0,
  ease: Expo.easeInout
})

TweenMax.from(".yellow", 2, {
  delay: 4,
  opacity: 0,
  ease: Expo.easeInout
})

TweenMax.from(".circle1", 2, {
  delay: 3,
  opacity: 0,
  ease: Expo.easeInout
})

TweenMax.from(".circle2", 2, {
  delay: 3.5,
  opacity: 0,
  ease: Expo.easeInout
})

TweenMax.from(".logo", 2, {
  delay: 3.5,
  opacity: 0,
  y: -100,
  ease: Expo.easeInout
})

TweenMax.staggerFrom(".menu-link ul li", 2, {
  delay: 3.5,
  opacity: 0,
  x: -100,
  ease: Expo.easeInout
}, 0.4)

TweenMax.from(".scrollDown", 2, {
  delay: 3.4,
  opacity: 0,
  y: 100,
  ease: Expo.easeInout
})

TweenMax.from(".text .title", 2, {
  delay: 4,
  opacity: 0,
  x: 200,
  ease: Expo.easeInout
})

TweenMax.from(".text p", 2, {
  delay: 4,
  opacity: 0,
  x: 200,
  ease: Expo.easeInout
})

TweenMax.from(".watchnow", 2, {
  delay: 4,
  opacity: 0,
  x: 100,
  ease: Expo.easeInout
})

TweenMax.from(".media", 2, {
  delay: 4,
  opacity: 0,
  y: 100,
  ease: Expo.easeInout
})
