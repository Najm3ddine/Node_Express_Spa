import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle("Settings");
	}

	async getHtml() {
		return `
            <h1>Settings</h1>
            <strong>magnam nesciunt corrupti, veritatis eveniet praesentium provident error. Sit atque, porro, perspiciatis beatae corrupti esse recusandae numquam unde a nemo cupiditate illo quam. Recusandae excepturi debitis magnam laboriosam, fuga mollitia expedita nobis illo eos voluptatem modi magni ad cumque veniam ipsam nam officia, quidem suscipit obcaecati eum. Necessitatibus nesciunt illum culpa ipsa, tempore rerum debitis. Maiores ut cumque id blanditiis aut ad impedit fugiat harum possimus?</p>
			<p>fuga mollitia expedita nobis illo eos voluptatem modi magni ad cumque veniam ipsam nam officia, quidem suscipit obcaecati eum. Necessitatibus nesciunt illum culpa ipsa, tempore rerum debitis. Maiores ut cumque id blanditiis aut ad impedit fugiat harum possimus?</strong>
        `;
	}
}
