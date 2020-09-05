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
        const listas = await PLC.findOneAndDelete().sort({createdAt: -1})
        //const delete = await PLC.deleteOne(listas);
        return res.send('a ultima lista criada foi deletada com sucesso!');
    }

    async listanomes (req, res) {
        const lista = await PLC.findOne().sort({createdAt: -1}).populate('players');

            lista.prototforEach(element => {
            console.log(element)
        })

        return res.json(teste)
    }

}

module.exports = new PLController();