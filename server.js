const express = require('express');
const app = express();

app.get('/guest', (req, res) => {
    const num = Math.floor(Math.random() * 10);
    const guessedNum = parseInt(req.query.num) || 0;

    res.send({
        "number": num,
        "guessed_number": guessedNum,
        "result": guessedNum == num
    });
});


app.listen(process.env.PORT || 3000);
