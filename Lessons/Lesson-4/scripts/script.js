document.getElementById('hero-btn').onclick = function () {
  document.getElementById('park').scrollIntoView({behavior: 'smooth'});
};

let btn = document.getElementsByClassName('park__btn');

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    document.getElementById('reserv').scrollIntoView({behavior: 'smooth'});
  };
};

document.getElementById('price-acton').onclick = function () {
  if (document.getElementById('name').value === '') {
    alert('Введите ваше имя');
  } else if (document.getElementById('phone').value === '') {
    alert('Введите ваш телефон');
  } else if (document.getElementById('car').value === '') {
    alert('Введите название авто');
  } else {
    alert('OK');
  };
};

document.addEventListener('DOMContentLoaded', function () {
  let layer = document.querySelector('.reserv-car');
  document.addEventListener('mousemove', (event) => {
    layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
  });

  const elem = document.querySelector('.hero-car');
  document.addEventListener('scroll', () => {
    elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
  })
})