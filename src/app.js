/** @format */

function randID(n = 10) {
	const runes = 'qwertyuiiopasdfghjklzxcvbnm1234567890'.split('');
	let id = '';

	for (let i = 0; i < n; i++) {
		id += runes[Math.floor(Math.random() * runes.length)];
	}

	return id;
}

function toggle(id) {
	const items = [
		document.querySelector(`.nav-content[data-parent='${id}']`),
		document.querySelector(`.backdrop[data-parent='${id}']`),
		document.querySelector(`.nav-toggle[data-child='${id}']`),
	];

	items.forEach((item) => {
		if (item !== null) {
			item.classList.toggle('open');
		}
	});
}

function addBackdrop(id) {
	let bd = document.createElement('div');
	bd.classList.add('backdrop');
	bd.setAttribute('data-parent', id);
	bd.addEventListener('click', (e) => toggle(id));
	window.document.body.appendChild(bd);
}

function main() {
	add_listeners();
	console.log('document loaded');
}

function add_listeners() {
	const navs = document.querySelectorAll('.nav-content');
	const nav_btns = document.querySelectorAll('.nav-toggle');

	if (navs.length != nav_btns.length) {
		let error =
			navs.length > nav_btns.length
				? 'add a trigger for every nav'
				: 'add a nav-content for every button';
		throw new Error(error);
	}

	for (let i = 0; i < navs.length; i++) {
		let id = randID();
		navs[i].setAttribute('data-parent', id);
		nav_btns[i].setAttribute('data-child', id);
		nav_btns[i].addEventListener('click', (e) => toggle(id));
		addBackdrop(id);
	}
}

window.document.onload = main();
