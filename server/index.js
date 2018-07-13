const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");
const massive = require('massive');
const app = express();
require('dotenv').config();
massive(process.env.CONNECTION_STRING).then(dbInstance =>{app.set('db',dbInstance)}).catch(err=>console.log(err));
app.use(bodyParser.json());



app.get('/api/inventory', controller.read);
app.post('/api/product', controller.create);
app.put('/api/inventory/:id', controller.update);
app.delete('/api/inventory/:id', controller.delete);

const port = process.env.PORT || 3000
app.listen(port, ()=>console.log("Wubstep activated on port: "+port+" wub wub wub..."));
