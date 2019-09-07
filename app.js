const express = require("express"),
	app = express();


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get('/', (req, res) => {
	res.render("james_roberts/routes/index");
});

app.get("/contact", (req, res) => {
	res.render("james_roberts/routes/contact");
});

app.listen(3000, () =>{
	console.log("server listening on port 3000");
});