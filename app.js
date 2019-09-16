const express = require("express"),
	app = express();


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get('/', (req, res) => {
	res.render("routes/index");
});

app.get("/contact", (req, res) => {
	res.render("routes/contact");
});

app.listen(process.env.PORT || 3000)

// app.listen(3000, () =>{
// 	console.log("server listening on port 3000");
// });