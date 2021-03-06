require('dotenv').config();
require('./database').migrate();

const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
