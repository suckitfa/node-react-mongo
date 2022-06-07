const mongoose = require('mongoose')

mongoose
.connect('mongodb://admin:123456@localhost:27017')
.then(()=>console.log('链接成功'))
.catch(e => console.log(e))

const bookSchema = new mongoose.Schema({
    bookName:String,
    author:String,
    isPublished:Boolean,
})

const Book = new mongoose.model('Book',bookSchema)

// Book.create({
//     bookName:"牛逼",
//     author:"牛逼",
//     isPublished:true,
// })
// .then((doc) => console.log(doc))
// .catch(err => console.log(err))

// 查询全部
// Book.find().then(res => console.log(res))

// 条件查找
Book.findOne({author:"牛逼"})
.then(res => console.log(res))
