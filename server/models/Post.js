const { model, Schema } = require('mongoose')

const PostSchema = new Schema({
    title: String,
    content: String
})


module.exports = new model('Post', PostSchema)