let block2 = document.querySelector('.menu_point');
let block3 = document.querySelector('.header2');
let block1 = document.querySelector('.chrest');

block2.addEventListener('click', ()=>{
		block3.classList.add('header3')
	})
block1.addEventListener('click', ()=>{
	block3.classList.remove('header3')
})

let block4 = document.querySelector('.imgmail');
let block5 = document.querySelector('.non_visible');
let block6 = document.querySelector('.chrest1')

block4.addEventListener('click', ()=>{
		block5.classList.remove('non_visible')
	})

block6.addEventListener('click', ()=>{
		block5.classList.add('non_visible')
	})

let block7 = document.querySelector('.maillink');
block7.addEventListener('click', ()=>{
		block5.classList.remove('non_visible')
	})


let block8 = document.querySelector('.phone_icon');
let block9 = document.querySelector('.chrest2');
let block10 = document.querySelector('.non_visible1')

block8.addEventListener('click', ()=>{
		block10.classList.remove('non_visible1')
	})

block9.addEventListener('click', ()=>{
		block10.classList.add('non_visible1')
	})

//let block10 = document.querySelector('.phonelink');
//block10.addEventListener('click', ()=>{
//		block5.classList.remove('non_visible')
//	})