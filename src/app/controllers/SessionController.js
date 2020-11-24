import jwt from 'jsonwebtoken';
import User from '../schemas/User';
import jwtConfig from '../../config/auth';
import bcrypt from 'bcryptjs';

class SessionController {
    async store(req, res) {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({
                email
            });
            console.log(user.password);
            const compareSync = bcrypt.compareSync(password, user.password);
            if (!compareSync) {
                res.status(400).json({ error: "Senhas não conferem" });
            }
            const token = jwt.sign({ id: user._id }, jwtConfig.secret, {
                expiresIn: jwtConfig.expiresIn
            })
            return res.json({ user, token });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }

    }
}

export default new SessionController();