const header = document.querySelector('.header');

window.onscroll = () => {
	if (window.scrollY > 50) {
		header.classList.add('header_active');
	} else {
		header.classList.remove('header_active');
	}
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
	link.addEventListener('click', function(e) {
		e.preventDefault();

		let href = this.getAttribute('href').substring(1);

		const scrollTarget = document.getElementById(href);

		window.scrollBy({
			top: scrollTarget.getBoundingClientRect().top,
			behavior: 'smooth'
		});
	});
});
