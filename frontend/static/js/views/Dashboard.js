import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle("To do List");
	}

	async getHtml() {
		const data = await this.getData();
		return `
            <h1>Lists to do </h1>
			<ul>
				${data
					.map((e) => {
						return `<li><a data-link href="/details?id=${e.id}">${e.title}</a></li>`;
					})
					.join("")}
			</ul>
            
        `;
	}

	async getData() {
		const rest = await fetch("/static/js/views/stock.json");
		const data = await rest.json();

		return data;
	}
}
