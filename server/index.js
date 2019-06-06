const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/getitems", (req, res) => {
    let data;
    fs.readFile('items.json', "utf-8", (err, d) => {
        data = d;
        console.log(d);
        res.end(d);
    });
});

app.post("/additem", (req, res) => {
    fs.readFile('items.json', "utf-8", (err, data) => {
        let items = JSON.parse(data);
        items.push(req.body);
        fs.writeFile("items.json", JSON.stringify(items), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
            res.send(items);
        })
    });
});

app.listen(port, () => { console.log(`Server started on port ${port}`) });