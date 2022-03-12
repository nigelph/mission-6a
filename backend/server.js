const express = require('express');
const app = express();


app.use(cors())


app.listen(4000, () => console.log('Listening on port 4000'))