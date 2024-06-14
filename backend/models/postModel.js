const mongoose = require('mongoose')
const {Schema} = mongoose

const PostSchema = new Schema({
    title: String,
    summary: String,
    image: String,
    category: String,
    description: String,
    creator: {type: Schema.Types.ObjectId, ref:'User'}
}, {
    timestamps: true,
})

const PostModel = mongoose.model('Post', PostSchema)

module.exports = PostModel