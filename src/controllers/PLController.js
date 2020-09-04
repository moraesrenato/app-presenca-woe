const PLC = require('../models/PlayersList');

class PLController {
    async store(req,res) {
        //const listas = await PLC.deleteOne({})

        const pl = await PLC.create( req.body )

        return res.json(pl); //json ?
    }

    async listas(req, res) {
        const listas = await PLC.find().populate({
            path: 'players',
            options: {sort:{createdAt: -1}}
        }).sort({createdAt: -1});
        
        return res.json(listas);
    }

    async deletelista(req, res) {
        const listas = await PLC.deleteOne({}) //deleta a primeira lista que aparecer (a ultima criada)
        return res.send('a ultima lista criada foi deletada com sucesso!');
    }

}

module.exports = new PLController();