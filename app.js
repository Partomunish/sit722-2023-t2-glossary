const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use((request, response, next) => {
    // response.status(200).json(
    //     {
    //         message: "It works!"
    //     }
    // );

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

module.exports = app;