const express = require('express');
const router = express.Router();
const commentsController = require('../../../controllers/comments');

router.get('/', commentsController.getComments);
router.get('/:id', commentsController.getCommentById);
router.post('/add/:poemId', commentsController.addComment);
router.post('/update/:id', commentsController.updateComment);
router.delete('/:id', commentsController.deleteComment);

module.exports = router;
