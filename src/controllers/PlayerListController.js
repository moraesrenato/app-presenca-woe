const PlayersList = require('../models/PlayersList');
const PlayerList = require('../models/PlayersList');

class PlayerListController {
    async criar(req, res) {
        const data = await PlayerList.find().sort({ createdAt: -1 }).limit(2);

        if (!req.body.tittle || !req.body.date) {
            return res.status(400).send({ error: 'arruma isso ai que ta errado irmão!' });
        }

        if (data[0].date === req.body.date){
            console.log(data[0].date)
            return res.status(400).send({ error: 'uma lista com essa data ja foi criada mano' });
        }   else {
            console.log(data[0].date)
             const playerList = await PlayerList.create(req.body)
         }


        return res.json('sera se foi ?');
    }

    async listas(req, res) {
        const playerList = await PlayerList.find().sort({ createdAt: -1 }).limit(2);

        return res.json(playerList);
    }

    async lista(req, res) {
        const playerList = await PlayerList.findById(req.params.id)

        return res.json(playerList);
    }

    async deletelista(req, res) {
        const listas = await PlayerList.findByIdAndDelete(req.params.id)
        return res.send('a lista foi deletada com sucesso!');
    }

    async listanomes(req, res) {
        const lista = await PlayerList.findById(req.params.id);
        let players = "";
        let contador = 1;
        lista.players.forEach(element => {
           players += `${contador} ${element.nick} = ${element.class} \n`
        contador = contador + 1
        });
        console.log(players)
        return res.send(players)
    }

}

module.exports = new PlayerListController();