const express = require('express');
const server = express();
const multer  = require('multer')
const storage = multer.memoryStorage();
const uploads = multer({storage});
const db = require('./db');
const GenreModel = require('./models/ganre');
const BookModel = require('./models/storybook');
const CommentModel = require('./models/comment');

server.set('view engine', 'ejs');
server.set('views', './views');
server.listen(3000);
server.use(express.static('public'));


server.get('/list', async (req, res) => {
    
    res.render('list');
});

server.get('/json', async (req, res) => {
    const booksList = await BookModel.find({}, ).populate('genre')
    console.log(booksList);
    res.send(JSON.stringify(booksList));
});

server.get('/genre', async (req, res) => {
    const genreList = await GenreModel.find({}, 'genre').exec();
    res.send(JSON.stringify(genreList));
});

server.get('/comment', async (req, res) => {
    const booksList = await BookModel.find({}, 'name').exec();
    res.send(JSON.stringify(booksList));
});

server.post('/stats', uploads.none(), async function (req, res) {
    const genreID = req.body.select;
    const doc = await BookModel.create({
        name: req.body.bookname,
        genre: genreID,
        comments: [],
    });
    console.log(doc);
    console.log(req.body);
    res.send('Запис створено');
 });

 server.post('/comment', uploads.none(), async function (req, res) {
    const bookID = req.body.select; 
    const comment = req.body.comment;   
    const doc = await CommentModel.create({ content: comment});
    const bookUpdate = await BookModel.updateOne(
        { _id: bookID },
        {
          $push: { comments: doc.id }  
        } 
    );
    console.log(bookUpdate);
    console.log(doc);
    res.send('Запис створено');
 });

 server.get('/admin', async (req, res) => {
    
    res.render('admin');
});


const init = async () => {
    console.log('kk');
    const docGenre = await GenreModel.create({ genre: req.body.genre });
    const genreID = docGenre.id;
    const doc = await BookModel.create({
        name: req.body.bookname,
        genre: genreID,
        comments: [],
    });
    console.log(doc);
    console.log(docGenre);
};

// init();

//db.once('open', () => {
//    console.log('Connected to DB');
//});
//db.once('close', () => {
//    console.log('Close connection to DB');
//});