export const createComment = async (req, res) => {
    try {

        const commentData = req.body
        const response = await CommentService.createComment(req.body)
        res.status(200).json(
            response
        )
    } catch (error) {
        throw error
    }
} 
