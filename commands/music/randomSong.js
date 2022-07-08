const Command = require('../../utils/base/Command.js')

class RandomSong extends Command {
    constructor(client) {
        super(client, {
            name: 'randomSong',
            aliases: ['aleatorizarplaylist', 'aleatorizarmusicas', 'randomsong', 'randomsongs', 'shuffle',
                'randomize', 'randomplaylist', 'randommusic'],
            description: 'Aleatorizar playlist',
            category: 'musica'
        })
    }

    async execute (message, _args, client){
        const voiceChannel = message.member.voice.channel
        const queue = client.player?.getQueue(message.guild)

        if (!queue || !queue.playing) return message.reply('Não há nenhuma musica sendo tocada!')
        if (voiceChannel != queue.metadata.channel) return message.reply('Você precisa entrar no mesmo canal de voz!')

        if (queue.tracks.length <= 2) return message.reply('Poucas músicas para aleatorizar, mínino 3 músicas!')

        // Aleatorizar a lista de reprodução
        queue.shuffle()

        client.commands.get('queue').execute(message, [], client)
    }
}

module.exports = RandomSong