"use strict";

console.log("Running webapp...");

let express = require('express');
let app = new express();
let port = process.env.PORT || 8080;


app.use(express.static('./app'));

app.listen(port,()=>{
	//console.log(`Running webhook listener...`);
	console.log(`App listening on port ${port}`);
}) ;