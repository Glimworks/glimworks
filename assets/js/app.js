/** @format */

function randID(n = 10) {
	const runes = 'qwertyuiiopasdfghjklzxcvbnm1234567890'.split('');
	let id = '';

	for (let i = 0; i < n; i++) {
		id += runes[Math.floor(Math.random() * runes.length)];
	}

	return id;
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
	} else {
		for (let i = 0; i < navs.length; i++) {
			let bd = document.createElement('div');
			bd.classList.add('backdrop');

			let id = randID();
			navs[i].setAttribute('data-parent', id);
			nav_btns[i].setAttribute('data-child', id);
			nav_btns[i].addEventListener('click', (e) => {
				let nav = document.querySelector(
					`.nav-content[data-parent='${id}']`
				);

				if (nav !== null) {
					nav.classList.toggle('open');
				}

				bd.classList.toggle('open');
			});

			bd.addEventListener('click', (e) => {
				let nav = document.querySelector(
					`.nav-content[data-parent='${id}']`
				);

				if (nav !== null) {
					nav.classList.toggle('open');
				}

				bd.classList.toggle('open');
			});

			bd.setAttribute('data-parent', id);
			window.document.body.appendChild(bd);
		}
	}
}

window.document.onload = main();
