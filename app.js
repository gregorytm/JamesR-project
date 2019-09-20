const express = require("express"),
	app = express();


app.set("view engine", "ejs");

app.set("views", __dirname + "/routes");



app.get('/', (req, res) => {
	res.render("index");
});

app.get("/contact", (req, res) => {
	res.render("contact");
});

// app.listen(process.env.PORT || 3000)

app.listen(3000, () =>{
	console.log("server listening on port 3000");
});