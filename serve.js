import compression from "compression";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const port = 8080;

const base = "/";

const app = express();
app.use(compression());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(base, express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

console.log("🎧👂🏿Listening on port " + port);

app.listen(port);
