/* IMPORTS */
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const auth = require('./routes/auth')
const mongoose = require('mongoose')
const Post = require('./models/postModel')

const cookieParser = require('cookie-parser')
const multer = require('multer')
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs')
const jwt = require('jsonwebtoken')


/* Initialize express */
const app = express()

/* Connecting to mongodb database */
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('Connected to database'))
.catch((err) => console.log('Not Connected to database', err))

/* MIDDLEWARE FOR PARSING JSON DATA */
app.use(express.json())

/* MIDDLEWARE FOR COOKIE-PARSER */
app.use(cookieParser())

app.use('/uploads', express.static(__dirname + '/uploads'));

/* MIDDLEWARE FOR PARSING FORM DATA */
app.use(express.urlencoded({extended: false}))


/* CORS MIDDLEWARE */ 
app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
)

/* MIDDLEWARE FOR ROUTES*/
app.use('/', auth)

app.post('/post', uploadMiddleware.single('file'), async(req, res) => {
    try {
        const { originalname, path } = req.file
        const parts = originalname.split('.')
        const ext = parts[parts.length - 1]
        const newPath = path + '.' + ext
        fs.renameSync(path, newPath)

        const {token} = req.cookies;
        jwt.verify(token, process.env.JWT_SECRET, {}, async (err,info) => {
            if (err) throw err;
            const { title, summary, category, description } = req.body
            const post = await Post.create({
                title,
                summary,
                image: newPath,
                category,
                description,
                creator: info.id,
            }) 
            res.json(post)
        });


    } catch (error) {
        console .error(error)
        res.status(500).json({ message: 'Internal server error' })
    }

});

app.put('/post', uploadMiddleware.single('file'), async(req, res) => {
    try {
        let newPath = null;
        if (req.file) {
            const {originalname,path} = req.file;
            const parts = originalname.split('.');
            const ext = parts[parts.length - 1];
            newPath = path+'.'+ext;
            fs.renameSync(path, newPath);
        }

        const {token} = req.cookies;
        jwt.verify(token, process.env.JWT_SECRET, {}, async (err,info) => {
            if (err) throw err;
            const {id,title,summary,category,description} = req.body;
            const post = await Post.findById(id);
            const isCreator = JSON.stringify(post.creator) === JSON.stringify(info.id);
            if (!isCreator) {
                return res.status(400).json('you are not the creator of this blog');
            }
            await Post.updateOne({_id: id} , {
                title,
                summary,
                category,
                image: newPath ? newPath : post.cover,
                description,
            });
            res.json(post);
        });

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal server error' })
    }

});



app.get('/post', async (req, res) => {
    try {
        const posts = await Post.find()
            .populate('creator', ['username']) 
/*             .sort({createdAt: -1})
            .limit(20);  */

        res.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.get('/post/:id', async (req, res) => {
    const {id} = req.params;
    const postBlog = await Post.findById(id).populate('creator', ['username']);
    res.json(postBlog);
})
  



/* CREATING A PORT */
app.listen(4000, ()=>{
    console.log("Server is listening on port 4000")
})