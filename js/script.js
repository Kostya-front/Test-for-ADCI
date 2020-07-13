let btn=document.querySelector('.tab'),
	closeTab=document.querySelector('.close_tab'),
	leftLine=document.querySelector('.left_line_down'),
	rightLine=document.querySelector('.right_line_down'),
	modal=document.querySelector('.modal_window_off'),
	exit=document.querySelector('.exit'),
	main=document.querySelector('.main'),
	lock=document.querySelector('#lock'),
	cross=document.querySelector('.cross'),
	submenu=document.querySelector('.submenu'),
	menuItems=document.querySelectorAll('.item'),
	a=document.querySelectorAll('.item>a'),
	slides=document.querySelectorAll('.slides div'),
	firstPic=document.querySelector('#first_pic'),
	secondPic=document.querySelector('#second_pic'),
	thirdPic=document.querySelector('#third_pic'),
	bgs=document.querySelectorAll('.bgs img');

btn.addEventListener('click',()=>{

	closeTab.classList.toggle('open_tab');
	leftLine.classList.toggle('left_line_up')
	rightLine.classList.toggle('right_line_up')
});
lock.addEventListener('click',()=>{
	modal.classList.toggle('modal_window_on')
	if(modal.classList.contains('modal_window_on')){
		modal.classList.remove('modal_window_off')
	}
});

function close(e){
	if(e.target.classList.contains('exit')||e.target.classList.contains('cross')||e.target.classList.contains('bg')){
	modal.classList.add('modal_window_off');
	}
}
exit.addEventListener('click',close);
modal.addEventListener('click',close);
cross.addEventListener('click', close)

a.forEach((item,i)=>{
	item.addEventListener('mouseover',(e)=>{
		if(e.target===item){
			item.insertAdjacentElement('beforeEnd',submenu);
		}
	})
})

slides.forEach(item=>{
	item.addEventListener('click',()=>{
	switch(item){
	case firstPic:
		firstPic.style.backgroundColor='#e2d1a6';
		secondPic.style.backgroundColor='white';
		thirdPic.style.backgroundColor='white';
		main.style.backgroundImage='url("img/slide.png")';
	break;
	case secondPic:
		firstPic.style.backgroundColor='white';
		secondPic.style.backgroundColor='#e2d1a6';
		thirdPic.style.backgroundColor='white';
		main.style.backgroundImage='url("img/slide2.png")';
	break;
	case thirdPic:
		firstPic.style.backgroundColor='white';
		secondPic.style.backgroundColor='white';
		thirdPic.style.backgroundColor='#e2d1a6';
		main.style.backgroundImage='url("img/slide3.png")';
	break;

}

	})
})

