/**
* Name: index
*
* @Gopesh Kumar jangid
*
*
* Description: node index for commerce
*
* Requirements: express, morgan, mongoose, cors, nodemon
*
* @package commerce
* @property
*
* @version 1.0
*/
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const { mongoose } = require('./database');

/**
 * setting
 */
app.set('port', process.env.PORT || 3000);

/**
 * middleware
 */
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));


/**
 * routes
 */ 
app.use('/api/products', require('./routes/product.routes'));
app.use('/api/clients', require('./routes/clients.routes'));
app.use('/api/suppliers', require('./routes/suppliers.routes'));
/**
 * server
 */

app.listen(app.get('port'), (error) => {
    if (error)
    {
        console.log('Error on server: ',err);
    } 
    else {
        console.log('Server on port', app.get('port'));
    }
});

/** this ends this file
* server/index
**/
