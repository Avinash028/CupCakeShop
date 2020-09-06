const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const cakeSchema = new Schema({
    Name:{
        type:String,
        required: true
    },
    Description:{
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    cakeImage :{
        type:String
    }
    
});

module.exports = mongoose.model('Cake',cakeSchema);