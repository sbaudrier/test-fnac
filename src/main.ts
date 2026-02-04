import '@/scss/main.scss'

import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// SWIPER : caroussels create and improve accessibility on init
document.querySelectorAll('.carrousel').forEach((carrousel) => {
  new Swiper(carrousel.querySelector('.carrousel__swiper') as HTMLElement, {
    modules: [Navigation],
    slidesPerView: 3.5,
    slidesPerGroup: 3,
    spaceBetween: 14,
    centeredSlides: false,
    slidesOffsetBefore: 14,
    slidesOffsetAfter: 14,
    loopedSlides: 2.5,

    threshold: 10,
    loop: true,
    navigation: {
      nextEl: carrousel.querySelector('.carrousel__next') as HTMLElement,
      prevEl: carrousel.querySelector('.carrousel__prev') as HTMLElement
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        slidesPerGroup: 1
      },
      768: {
        slidesPerView: 2.2,
        slidesPerGroup: 1
      },
      1024: {
        slidesPerView: 3.5,
        slidesPerGroup: 3
      }
    },
    on: {
      init(swiper) {
        swiper.slides.forEach((slide) => {
          const card = slide.querySelector('.carrousel__card')
          if (!card) return

          if (slide.classList.contains('swiper-slide-duplicate')) {
            card.setAttribute('tabindex', '-1')
          } else {
            card.setAttribute('tabindex', '0')
          }
        })
      },

      slideChange(swiper) {
        swiper.slides.forEach((slide) => {
          const card = slide.querySelector('.carrousel__card')
          if (!card) return

          if (slide.classList.contains('swiper-slide-duplicate')) {
            card.setAttribute('tabindex', '-1')
          } else {
            card.setAttribute('tabindex', '0')
          }
        })
      }
    }
  })
})

// Tabs management : focus on active tab
const tabs = document.querySelectorAll('.header__tab')
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('header__tab--active'))
    tab.classList.add('header__tab--active')
  })
})

// Smooth scroll clicking on nav items
const header = document.querySelector('.header') as HTMLElement
const offset = header?.offsetHeight || 0

document.querySelectorAll('[data-target]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault()

    const targetId = (link as HTMLElement).getAttribute('data-target')
    if (!targetId) return

    const target = document.getElementById(targetId)
    if (!target) return

    const top = target.getBoundingClientRect().top + window.scrollY - offset

    window.scrollTo({
      top,
      behavior: 'smooth'
    })
  })
})
