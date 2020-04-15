/**
* Name: database
*@Author Gopesh Kumar jangid

* Location: server/database
*
* Description: mongo database connection
*
* Requirements: monggose
*
*
* @version 1.0
*/
const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/app-commerce';

mongoose.connect(URI, {
    useNewUrlParser: true
})
    .then(db => console.log(`${URI} is connected`))
    .catch( err => console.log(`Error en Mongo: ${err}`));

module.exports = mongoose;




/** this ends this file
* server/database
**/
