// Javascript function to show underline in the active nav item
function updateActiveSection() {
	const hash = window.location.hash || '#home'; 
	const homeNavItem = document.getElementById('home-nav');
	const projectNavItem = document.getElementById('project-nav');

	if (hash === "#home") {
		homeNavItem.classList.add("active")
		projectNavItem.classList.remove("active")
	} else {
		projectNavItem.classList.add("active")
		homeNavItem.classList.remove("active")
	}
}

window.addEventListener('load', () => {
	updateActiveSection();
})

window.addEventListener('hashchange', updateActiveSection);
