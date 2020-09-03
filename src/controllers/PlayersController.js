const PC = require('../models/Players');
const PL = require('../models/PlayersList')

class PlayersController { //pq new ?
    async store(req,res) { //async await ?
        const pl = await PL.findOne().sort({createdAt: -1});
        const pc = await PC.create( req.body );

        pl.players.push(pc);

        await pl.save();

        return res.json(pc); //json ?
    }

    async showplayers(req,res){
        const players = await PC.find().sort({createdAt: -1});
        return res.json(players);
    }

    async deleteplayer(req,res) {
        const pl = await PL.findOne().sort({createdAt: -1});
        const player = await PC.findOne(req.body).sort({createdAt: -1});
        console.log(player);
        
        pl.players.pull(player);

        await pl.save();

        return res.json(player);
    }
}

module.exports = new PlayersController();