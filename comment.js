// create web server
const express = require('express');
const commentController = require('/controllers/comment');

const app = express ();

app.get ('/', commentController.comment_list);
app.get ('/create', commentController.comment_create_get);
app.post ('/create', commentController.comment_create_post);
app.get ('/:id/delete', commentController.comment_delete);

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
});