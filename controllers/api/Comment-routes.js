const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            // entry_id: req.session.entry_id,
            
        });

        res.status(200).json(newComment)
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

//doesnt  work, will get back to later; supposed to be able to update comment
router.put('/:id'), withAuth, async (req, res) => {
    try {
        const updateComment = await Comment.update({
            ...req.body,
            where: {
                id: req.params.id,
                // entry_id: req.session.entry_id,
            },
        });
        if (!updateComment) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }

        res.status(200).json(updateComment);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};


router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deleteComment = await Comment.destroy({
            where: {
                id: req.params.id,
                //entry_id: req.session.entry_id,
            },
        });
        if (!deleteComment) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }

        res.status(200).json(deleteComment);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;