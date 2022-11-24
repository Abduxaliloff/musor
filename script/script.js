const head = document.querySelectorAll('.header__text');
const ul = document.querySelectorAll('.header__ul');

for (let i = 0; i < head.length; i++) {
  head[i].addEventListener('click', function () {
    ul[i].classList.toggle('active')
  })
}

const sliderBtns = document.querySelectorAll('[data-target]');
const sliderItems = document.querySelectorAll('.slider__item');
const slider = document.querySelectorAll('.slider');
var activeSlide = 0;

for (var i = 0; i < sliderItems.length; i++) {
  if (sliderItems[i].classList.contains('active')) {
    activeSlide = i;
  }
}

for (var _i = 0; _i < sliderBtns.length; _i++) {
  sliderBtns[_i].addEventListener('click', function (e) {
    move(e.target.getAttribute('data-target'));
  });
}

function move(btn) {
  if (btn === 'next') {
    if (activeSlide < sliderItems.length - 1) {
      activeSlide++;
    } else {
      activeSlide = 0;
    }
  } else {
    if (activeSlide > 0) {
      activeSlide--;
    } else {
      activeSlide = sliderItems.length - 1;
    }
  }

  sliderItems.forEach(function (item) {
    item.classList.remove('active');
  });
  sliderItems[activeSlide].classList.add('active');
}

var App = {

	accessibleMenu: function(){
		$menu = $('.access-menu');
		$menuItem = $menu.find('> li > a');

		$subMenu = $('.access-submenu');
		$subMenuItem = $subMenu.find('> li > a');
		$submenuLastItem = $subMenu.find('> li:last-child > a');

		$menuItem.bind({
			focus: function(){
				$subMenu.removeClass('is-show');
				if($(this).next($subMenu)){
					$(this).next($subMenu).addClass('is-show');
				}
			},

			blur: function(){
				$subMenu.removeClass('is-show');
			}
		});

		$subMenuItem.bind({
			focus: function(){
				$(this).parent().parent().addClass('is-show');
			}
		});

		$submenuLastItem.bind({
			blur: function(){
				$subMenu.removeClass('is-show');
			}
		});
	},

	cancelAccessibleMenu: function(){
		$(document).click(function(){
			if($subMenu.hasClass('is-show')){
				$subMenu.removeClass('is-show');
			}
		});
	}

};

$(function(){
	App.accessibleMenu();
	App.cancelAccessibleMenu();
});