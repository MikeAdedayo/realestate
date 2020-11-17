import anime from 'animejs'

export function translate (element) {
  const line = anime.timeline({
    duration: 9000,
    targets: element,
    translateX: 1000,
    easing: 'easeInOutQuart'
  })
  line.add({
    targets: 'element',
    keyFrames: [
      { scale: 0.2, translateX: 200, rotate: '360deg' },
      { scale: 0.1, translateX: 400 }],
    TranslateY: 500,
    duration: 3000
  })
}
