const express = require('express')
const app = express()
const models = require("./models")

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
})



app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
