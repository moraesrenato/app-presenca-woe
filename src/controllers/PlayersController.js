const PC = require('../models/Players');
const PL = require('../models/PlayersList')

class PlayersController {
    async store(req,res) { 
        try {
        const pl = await PL.findOne().sort({createdAt: -1});
        const pc = await PC.create( req.body );

        pl.players.push(pc);

        await pl.save();

        return res.json(pc);
        }   catch (err) {
        return res.status(500).send({ error: 'CRIA UMA LISTA PRIMEIRO, ANIMAL !'});
            };
    };

    async showplayers(req,res){
        const players = await PC.find().sort({createdAt: -1});
        return res.json(players);
    }

    async deleteplayer(req,res) {
        const pl = await PL.findOne().sort({createdAt: -1});
        const player = await PC.findById(req.params.id);
            pl.players.pull(player);

            await pl.save();

            return res.json('Confirmação deletada com sucesso... nem queria mesmo');
    }

    async qtd(req,res) {
        const pl = await PL.findOne().sort({createdAt: -1});
        return res.json(pl.players.length)
    }
}

module.exports = new PlayersController();