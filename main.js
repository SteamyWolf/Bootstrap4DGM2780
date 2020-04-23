gsap.from('body', {opacity: 0, duration: 1.5, y: -80})

function changeImg(x) {
    gsap.to(x, {opacity: 0, duration: 2, repeat: 1, yoyo: true})
  }
  
function normalImg(x) {
    gsap.to(x, {opacity: 100, duration: 3})
  }

let logoMouse = document.querySelector('.twistedLogo')
logoMouse.addEventListener('mouseenter', ()=> {
    gsap.to(logoMouse, {scale: 1.3})
})
logoMouse.addEventListener('mouseleave', ()=> {
    gsap.to(logoMouse, {scale: 1.0})
})

gsap.from('.twistedLogo', {rotate: 360, duration: 3})




gsap.from('.roomer', {duration: 1, opacity: 0, stagger: 1})



let byebyebut = document.querySelector('#buttonGoByeBye')
byebyebut.addEventListener('click', () => {
    console.log('working?')
    gsap.to('.bye, .byeH4', {x: 1000, duration: 3, repeat: 1, yoyo: true});
})

