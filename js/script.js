/*=================CDI CALCULATOR===========================*/
let MoneyInvestment = document.querySelector('.money-investment').innerText;
let TimeInvestment = document.querySelector('.time-investment').innerText;

const buttonMinusMoney = document.querySelector('.button-minus-money');
const buttonPlusMoney = document.querySelector('.button-plus-money');
const buttonMinusTime = document.querySelector('.button-minus-time');
const buttonPlusTime = document.querySelector('.button-plus-time');

const tax = 1.0794 / 100;

const resultTax = () => {
  return MoneyInvestment * Math.pow(1 + tax, TimeInvestment);
};

const updateResult = () => {
  let result = resultTax();

  let finalValue = result.toFixed(2).toLocaleString('en', { style: 'currency', currency: 'EUR' });
  document.querySelector('.result-investment').innerText = finalValue;
};

buttonMinusMoney.addEventListener('click', () => {
  if (MoneyInvestment <= 200) {
    MoneyInvestment = parseFloat(MoneyInvestment);
  } else {
    MoneyInvestment = parseFloat(MoneyInvestment) - 200;
  }

  document.querySelector('.money-investment').innerText = MoneyInvestment;

  updateResult();
});

buttonPlusMoney.addEventListener('click', () => {
  MoneyInvestment = parseFloat(MoneyInvestment) + 200;

  document.querySelector('.money-investment').innerText = MoneyInvestment;

  updateResult();
});

buttonMinusTime.addEventListener('click', () => {
  if (TimeInvestment <= 1) {
    TimeInvestment = parseFloat(TimeInvestment);
  } else {
    TimeInvestment = parseFloat(TimeInvestment) - 1;
  }

  document.querySelector('.time-investment').innerText = TimeInvestment;

  updateResult();
});

buttonPlusTime.addEventListener('click', () => {
  if (TimeInvestment <= 1) {
    TimeInvestment = parseFloat(TimeInvestment);
  } else {
    TimeInvestment = parseFloat(TimeInvestment) + 1;
  }

  document.querySelector('.time-investment').innerText = TimeInvestment;

  updateResult();
});

/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
  const nav = document.querySelector('header');
  const linksMenu = document.querySelectorAll('.link-menu');

  if (this.scrollY >= 1000) nav.classList.add('active-header');
  else nav.classList.remove('active-header');

  linksMenu.forEach((link) => {
    if (this.scrollY >= 1000) link.classList.add('link-black');
    else link.classList.remove('link-black');
  });
}

window.addEventListener('scroll', scrollHeader);

/*============ ICON CLICKS ==============*/
const icons = document.querySelectorAll('.icon-click');
const textsClick = document.querySelectorAll('.text-click');

const imgPaybank = document.querySelectorAll('.img-paybank');
const arrayIcons = Array.from(icons);
console.log(icons);
console.log(textsClick);
console.log(imgPaybank);

textsClick.forEach((text) => {
  text.style.opacity = '0';
});

// var index = 0;

const resetIcons = (element) => {
  arrayIcons.forEach((icon) => {
    icon.classList.remove('bg-icon-active');
  });

  element.classList.add('bg-icon-active');
};

const resetImages = (index) => {
  imgPaybank.forEach((image) => {
    image.style.opacity = '0';
  });

  if (index == 0) {
    imgPaybank[index].style.opacity = '1';
  } else if (index == 1) {
    imgPaybank[index].style.opacity = '1';
  } else if (index == 2) {
    imgPaybank[index].style.opacity = '1';
  } else if (index == 3) {
    imgPaybank[index].style.opacity = '1';
  }
};

const resetTexts = (index) => {
  textsClick.forEach((text) => {
    text.style.opacity = '0';
  });

  if (index == 0) {
    textsClick[index].style.opacity = '1';
  } else if (index == 1) {
    textsClick[index].style.opacity = '1';
  } else if (index == 2) {
    textsClick[index].style.opacity = '1';
  } else if (index == 3) {
    textsClick[index].style.opacity = '1';
  }
};

/*=====================================*/
/*=========== DISPARAR POR CLIQUE ==============*/
/*=====================================*/

arrayIcons.forEach((element, index) => {
  element.addEventListener('click', () => {
    resetIcons(element);

    resetImages(index);

    resetTexts(index);
  });
});

/*=====================================*/
/*========= IR TROCANDO SOZINHO ========*/
/*=====================================*/
const changeSlider = (index) => {
  resetIcons(arrayIcons[index]);

  resetImages(index);

  resetTexts(index);
};

let i = 0;
setInterval(() => {
  changeSlider(i);
  i++;

  if (i === 4) i = 0;
}, 4000);
/*--=========== GSAP SCROLLTRIGGER ============- */

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  var tl1 = gsap.timeline();

  tl1
    .to('.screen-loading', {
      duration: 2,
      opacity: 0,
      delay: 5,
      ease: 'power4.out',
    })
    .from(
      '.hero div',
      {
        duration: 3,
        opacity: 1,
        y: 200,
        stagger: { each: 0.1 },
        ease: 'power4.out',
      },
      '-=1.5'
    );

  gsap.from('.card-1-scrub', {
    x: -30,
    rotate: '10deg',
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '.card-1-scrub',
      start: 'center 70%',
      end: 'center 35%',
      scrub: 2,
    },
  });

  gsap.from('.card-2-scrub', {
    x: -30,
    rotate: '-10deg',
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '.card-2-scrub',
      start: 'center 70%',
      end: 'center 35%',
      scrub: 2,
    },
  });

  // loading section scroll

  gsap.from('#section-1 > div', {
    y: 200,
    opacity: 0,
    ease: 'power4.out',
    stagger: { each: 0.2 },
    duration: 3,
    scrollTrigger: {
      trigger: '#section-1',
      start: 'top 80%',
      end: 'top 50%',
    },
  });

  gsap.from('#section-2 > div', {
    y: 200,
    opacity: 0,
    ease: 'power4.out',
    stagger: { each: 0.1 },
    duration: 3,
    scrollTrigger: {
      trigger: '#section-2',
      start: 'top 80%',
      end: 'top 50%',
    },
  });

  gsap.from('#section-3 > div', {
    y: 200,
    opacity: 0,
    ease: 'power4.out',
    stagger: { each: 0.1 },
    duration: 3,
    scrollTrigger: {
      trigger: '#section-3',
      start: 'top 80%',
      end: 'top 50%',
    },
  });

  gsap.from('#section-4 > div', {
    y: 200,
    opacity: 0,
    ease: 'power4.out',
    stagger: { each: 0.1 },
    duration: 3,
    scrollTrigger: {
      trigger: '#section-4',
      start: 'top 80%',
      end: 'top 50%',
    },
  });

  gsap.from('#section-5 > div', {
    y: 200,
    opacity: 0,
    ease: 'power4.out',
    stagger: { each: 0.1 },
    duration: 3,
    scrollTrigger: {
      trigger: '#section-5',
      start: 'top 80%',
      end: 'top 50%',
    },
  });

  gsap.from('#section-6 > div', {
    y: 200,
    opacity: 0,
    ease: 'power4.out',
    stagger: { each: 0.1 },
    duration: 3,
    scrollTrigger: {
      trigger: '#section-6',
      start: 'top 80%',
      end: 'top 50%',
    },
  });

  gsap.from('#section-7 > div', {
    y: 200,
    opacity: 0,
    ease: 'power4.out',
    stagger: { each: 0.1 },
    duration: 3,
    scrollTrigger: {
      trigger: '#section-7',
      start: 'top 80%',
      end: 'top 50%',
    },
  });

  gsap.from('#section-8 > div', {
    y: 200,
    opacity: 0,
    ease: 'power4.out',
    stagger: { each: 0.1 },
    duration: 3,
    scrollTrigger: {
      trigger: '#section-8',
      start: 'top 80%',
      end: 'top 50%',
    },
  });
});

ScrollTrigger.addEventListener('scrollStart', () => {
  ScrollTrigger.refresh();
});
