const body = document.body;
const savedTheme = localStorage.getItem('theme') || 'light';
body.classList.add(savedTheme);
const darkToggle = document.getElementById('dark-mode-toggle');
if (darkToggle) {
	darkToggle.checked = savedTheme === 'dark';
	darkToggle.addEventListener('change', () => {
		body.classList.remove('light', 'dark');
		const theme = darkToggle.checked ? 'dark' : 'light';
	body.classList.add(theme);
	localStorage.setItem('theme', theme);
	});
}