const express = require('express')
const app = express()

const mongoose = require('mongoose')
const Cake = require('./model/cake');

var multer = require('multer'); 

app.use('/uploads', express.static('uploads'));

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
    }
  })

var upload = multer({ storage: storage}); 



const port = 4000;

var cors = require('cors')

app.use(cors()) 

app.get('/all', (req, res) => {
    Cake.find()
        .then(cakes => res.json(cakes))
        .catch(err => res.status(400).json('Error:' + err));
});

app.post('/' , upload.single('cakeImage'), (req, res) => { 
    console.log(req.file)   
    const cake =new Cake({
        Name: req.body.Name,
        Description: req.body.Description,
        Price: req.body.Price,
        cakeImage:req.file.path.split('\\')[1]
    });

    res.json(cake);
    cake.save().then(result => {
        console.log("saved");
    }).catch(err => {
        console.log(err);
    })
});


mongoose.connect('mongodb+srv://abc:avinash@cluster0.fjxwl.mongodb.net/cup-cake-shop?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then( result => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
      })
}).catch(err => {
    console.log(err);
})








