document.querySelectorAll('a[href^="#"]').forEach(link => {
	link.addEventListener('click', function(e) {
		e.preventDefault();

		let href = this.getAttribute('href').substring(1);

		const scrollTarget = document.getElementById(href);

		window.scrollBy({
			top: scrollTarget.getBoundingClientRect().top - 90,
			behavior: 'smooth'
		});
	});
});
