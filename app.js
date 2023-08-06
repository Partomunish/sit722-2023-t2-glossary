const express = require('express');
const app = express();
const fs = require('fs');

app.set('view engine', 'ejs');

app.get("/", (request, response, next) => {
    const terms = [
        {
            Term: "Term 1",
            Description: "Description",
            References: [
                "Ref 1",
                "Ref 2"
            ]
        }
    ]

    response.render("index");
});

app.get("/glossary-items", (request, response) => {
    let filename = "C:\\Users\\USER\\Documents\\T2\\sit722-2023-t2-glossary\\views\\somefile.txt"
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        let splitData = data.split("\r\n");
        let glossaryItems = [];
        let glossaryItem;
        for (let i=0; i<splitData.length; i++) {
            let currentItem = splitData[i];

            if (currentItem === "" || i === splitData.length - 1) {
                if (glossaryItem) {
                    glossaryItems.push(glossaryItem);
                }
                glossaryItem = [];
            } else {
                glossaryItem.push(currentItem);
            }
        }

        response.send(glossaryItems);
    });
});

module.exports = app;