const express = require("express");
const path = require("path");
const app = express();

app.use("/static", express.static(path.resolve("frontend", "static")));

app.get("/*", (req, res) => {
	// get le fichier index dans le dossier frontend
	res.sendFile(path.resolve("frontend", "index.html"));
});

app.listen(8080, () => console.log("server running..."));
