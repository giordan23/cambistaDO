const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/api/usuarios/123", async (req, res) => {
	res.json({
		error: false,
		data: {
            id: 123,
			nombre: "Giordan",
			edad: 29,
			dni: "72235378",
		},
	});
});

app.listen(6000, () => {
	console.log("Servidor inciado en localhost 5000");
});
