import Post from '../schemas/Post';

class PostController {
    async store(req, res) {
        try {
            const post = await Post.create(req.body);
            res.json(post);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
    async update(req, res) {
        try {
            const post = await Post.findByIdAndUpdate(req.params.id, req.body);
            res.json({ ok: true });
        } catch (err) {
            res.status(400).json({ error: err.message });

        }
    }
    async show(req, res) {
        try {
            const post = await Post.findById(req.params.id);
            res.json(post);
        } catch (err) {
            res.status(400).json({ error: err.message })
        }
    }
    async index(req, res) {
        const posts = await Post.find();
        res.json(posts);

    }
    async destroy(req, res) {
        try {
            await Post.findOneAndDelete(req.params.id);
            res.json({ ok: true });
        } catch (err) {
            res.status(400).json({ error: err.message })
        }
    }
}

export default new PostController();