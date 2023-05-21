const express = require("express");
const app = express();
const fs = require("fs");
const request = require("request");
const { PORT } = require("./config.js");
const { API_KEY } = require("./config.js");
const path = require("path");
function onStartUp(req, res) {
	console.log("application start");
	const url = "https://jsonplaceholder.typicode.com/todos";

	request.get(
		{
			url: url,
			json: true,
			headers: { "User-Agent": "request" },
		},
		(err, response, data) => {
			if (err) {
				console.log("Error:", err);
				res.sendStatus(500); // En cas d'erreur, renvoie une réponse avec le code d'état 500 (Internal Server Error)
			} else if (response.statusCode !== 200) {
				console.log("Status:", response.statusCode);
				res.sendStatus(500); // En cas de code d'état différent de 200, renvoie une réponse avec le code d'état 500 (Internal Server Error)
			} else {
				const newData = JSON.stringify(data);
				fs.writeFile(
					path.join(
						__dirname,
						"frontend",
						"static",
						"js",
						"views",
						"stock.json"
					),
					newData,
					(err) => {
						if (err) {
							console.log("Error:", err);
							res.sendStatus(500); // En cas d'erreur lors de l'écriture dans le fichier, renvoie une réponse avec le code d'état 500 (Internal Server Error)
						} else {
							console.log(data);
						}
					}
				);
			}
		}
	);
}

app.get("/ticker-result=:id", function (req, res) {
	const ticker = req.params.id;
	fs.readFile(
		/* chemin absolu */ __dirname + "/" + ticker + ".json",
		"utf8",
		function (err, data) {
			res.send(JSON.parse(data));
		}
	);
});

app.listen(PORT || 4001, () => {
	console.log("Server running on PORT", PORT);
	onStartUp();
});
