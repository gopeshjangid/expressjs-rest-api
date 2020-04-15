/**
* Name: products
*
* @author Gopesh Kumar jangid
*
* Requirements: mongoose
*
* @package
* @property
*
* @version 1.0
*/

const mongoose = require('mongoose');
const { Schema }  = mongoose;

const productSchema = new Schema(
    {
        code: {type: String, required: true, unique: true},
        description: { type: String, required: true },
        size: { type: String, required: true },
        weight: { type: String, required: true },
        price: { type: Number, required: true },
        discount: { type: Number, required: true },
        on_sale: { type: Boolean, default: false },
        active: { type: Boolean, default:false },
        stock: { type: Number, required: true },
        broken_stock: { type: Number, required: false },
        to_serve: { type: Number, required: false },
        to_receive: { type: Number, required: false },
        ubication: { type: String, required: false },
        images: [{ image: String }]
    },
    {timestamps: true, autoIndex: true}
);



module.exports = mongoose.model('products', productSchema);

/** this ends this file
* server/models/products
**/
