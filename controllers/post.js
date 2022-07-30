/**
 * Gets all the posts
 * @param {http request} req 
 * @param {http response} res 
 */
const getAllPosts = (req, res) => {
    res.send("app get posts")
}

const createPost = (req, res) => {
    res.send('app post post')
}

module.exports = {
    getAllPosts,
    createPost
}