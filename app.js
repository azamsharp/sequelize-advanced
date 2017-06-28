const express = require('express')
const app = express()
const models = require("./models")

models.post.update(

  { title: 'This is john post' },
  { where: { username: 'john' } }

).spread(function(affectedCount,affectedRows){
    return models.post.findAll()
}).then(function(posts){
    console.log(posts)
})


/*
models.post.update(

    {username: 'joe'},
    {where: {id: 1}}

).spread(function(affectedCount,affectedRows){
  return models.post.findAll()
}).then(function(posts){
  console.log(posts)
}) */



/*
models.post.bulkCreate([
  {
    title: 'Post Title',
    body: 'Post Body',
    username: 'john'
  },
  {
    title: 'Post Title 2',
    body: 'post Body 2',
    username: 'mary'
  }
]).then(function(){
  return models.post.findAll()
}).then(function(posts){
  console.log(posts)
}) */

/*
const post = models.post.build({
  title: 'My First Post',
  body: 'Content of the post',
  username: 2
})

post.save().then(function(newPost){
  console.log(newPost)
}).catch(function(error){
  console.log(error.message)
}) */

/*
const post = models.post.findOne({
  include: [
    {
      model: models.comment,
      as : 'comments'
    }
  ]

}).then(function(post){
     console.log(post.comments)
     console.log(post.comments.length)
}) */

/*
const post = models.post.build({
  title: "hello world",
  body: "hello body post"
})

post.save().then(function(newPost){
  console.log(newPost)
})

const comment = models.comment.build({
   title: "Comment",
   body: "Body",
   postId : 1
})

comment.save().then(function(newComment){
  console.log(newComment)
})
*/

/*
console.log("now fetching the comment")
models.comment.findOne({

  include: [
    {
       model: models.post,
       as : 'post'
    }
  ]

}).then(function(comment){
   console.log(comment.post)
}) */



app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
