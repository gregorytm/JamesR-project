const express = require("express"),
	app = express();


app.set("view engine", "ejs");
app.set("views", __dirname + "/routes");
app.use(express.static(__dirname + "/public"));


app.get('/', (req, res) => {
	res.render("contact");
});

app.get("/contact", (req, res) => {
	res.render("index");
});

const port = process.env.PORT ? Number.parseInt(process.env.PORT) : 3000
app.listen(port, () => {
  console.log("server listening on port 3000");
})

// app.listen(3000, () =>{
// 	console.log("server listening on port 3000");
// });