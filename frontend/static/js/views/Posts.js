import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle("Posts");
	}

	async getHtml() {
		async function getData(url) {
			const response = await fetch(url);
			return response.json();
		}
	}
	async getHtml() {
		return `
            <h1>Details</h1>
            <strong>consectetur adipisicing elit. Doloribus odit adipisci rerum debitis mollitia eos vitae saepe omnis. Atque ratione, ipsam quae est aliquam voluptatibus, hic, iure eos culpa error nobis eligendi vitae tempore nemo ea enim vel mollitia! Tenetur eveniet molestiae eius eaque sunt odit perspiciatis asperiores, libero repellat sint maxime ipsam velit, architecto exercitationem non aliquid eos minima dignissimos? Possimus, neque error tempora maiores ut a reprehenderit repellat soluta quis facere, libero ducimus laboriosam rerum saepe non quo similique minus architecto optio eligendi dignissimos quia. Maiores incidunt, sint laudantium vitae exercitationem distinctio doloremque culpa ipsam deserunt ut perspiciatis?</strong>`;
	}
}
