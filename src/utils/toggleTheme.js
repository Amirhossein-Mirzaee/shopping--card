/** @format */

const toggleTheme = () => {
	const html = document.documentElement;
	html.classList.toggle("dark");

	if (html.classList.contains("dark")) {
		localStorage.setItem("theme", "dark");
	} else {
		localStorage.setItem("theme", "light");
	}
};
