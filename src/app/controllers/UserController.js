import User from '../schemas/User';

class UserController {
    async store(req, res) {
        try {
            const existe = await User.findOne({
                email: req.body.email
            });
            if (existe) {
                return res.status(400).json({ error: "usuário já cadastrado" });
            }
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
    async update(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body);
            res.json({ ok: true });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
    async show(req, res) {
        try {
            const user = await User.findById(req.params.id);
            res.json(user);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
    async index(req, res) {
        const users = await User.find();
        res.json(users);
    }
    async destroy(req, res) {
        try {
            await User.findOneAndDelete(req.params.id);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
        res.json({ ok: true });
    }
}

export default new UserController();