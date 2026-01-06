document.addEventListener('DOMContentLoaded', function () {
	// Mobile Menu
	const mobileMenuToggler = document.querySelector(
		'.navbar__mobile-menu-toggle'
	)
	const mobileMenuItems = document.querySelector('.navbar__mobile-menu-items')
	const toggleBars = document.querySelector('.fa-bars')
	const xBars = document.querySelector('.fa-x')

	mobileMenuToggler.addEventListener('click', function () {
		const isActive = mobileMenuItems.classList.toggle('active')

		if (isActive) {
			toggleBars.classList.add('is-hidden')
			xBars.classList.remove('is-hidden')
		} else {
			toggleBars.classList.remove('is-hidden')
			xBars.classList.add('is-hidden')
		}
	})

	// Navigation background on scroll
	const navbar = document.querySelector('.navbar')
	window.addEventListener('scroll', function () {
		if (window.scrollY > 0) {
			navbar.classList.add('navbar--scroll')
		} else {
			navbar.classList.remove('navbar--scroll')
		}
	})

	// Video Modal
	const modal = document.querySelector('#videoModal')
	const videoButton = document.querySelector('.preview__video-button')
	const closeButton = document.querySelector('.modal__close-button')
	const videoPlayer = document.getElementById('videoPlayer')

	videoButton.addEventListener('click', function () {
		modal.style.display = 'block'

		videoPlayer.src =
			'https://www.youtube.com/embed/AhUh_TVS62A?si=CStsSND3r0UWFCOQ'

		closeButton.addEventListener('click', function () {
			modal.style.display = 'none'
			videoPlayer.src = ''
		})

		window.addEventListener('click', function (event) {
			if (event.target == modal) {
				modal.style.display = 'none'
				videoPlayer.src = ''
			}
		})
	})
})
