import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor(params) {
		super(params);
		this.setTitle("Visualiser les articles");
	}

	async getHtml() {
		const nu = Number(
			new URL(window.location.href.replace("#", "")).searchParams.get(
				"id"
			)
		);

		console.log(nu);

		async function getData(url) {
			const response = await fetch(url);
			return response.json();
		}
		const data = await getData("/static/js/views/stock.json");

		const article = data.find((item) => item.id === nu);

		return `<h1> ${article.title} </h1>
		<p>Status: ${article.completed ? "Termine" : "En cours"} </p>
		<strong>Auteur: ${article.id} </strong>
		`;
	}
}
