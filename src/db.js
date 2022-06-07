const mongoose = require('mongoose')

mongoose
.connect('mongodb://admin:123456@localhost:27017')
.then(() => console.log('链接成功'))
.catch(e => console.error(e))


const bookSchema = new mongoose.Schema({
    bookName: String,
    author: String,
    isPublished: Boolean
})

const Book = mongoose.model('Book',bookSchema);

const book = new Book({
    bookName:"《编程大全》",
    author:"牛逼",
    isPublished:true,
})

book.save();