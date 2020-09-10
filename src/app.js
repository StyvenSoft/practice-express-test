const express = require('express');
const app = express();

const port = process.env.port || 3000;

app.use(express.json());
app.use('/users', require('./routes/user'));

app.listen(port, () => {
    console.log(`Server on port http://localhost:${port}`);
});

module.exports = app;