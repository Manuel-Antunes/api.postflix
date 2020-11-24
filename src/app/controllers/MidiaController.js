const { default: Midia } = require("../schemas/Midia");

class MidiaController {
    async store(req, res) {
        try {
            const { originalname: name, filename: path } = req.file;
            const midia = await Midia.create({
                name,
                path
            });
            console.log(midia.url);
            return res.json(midia);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}
export default new MidiaController();