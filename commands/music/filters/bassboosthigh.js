const Command = require('../../../utils/base/Command.js')

const { MessageEmbed } = require('discord.js')

class BassBoostHigh extends Command {
    constructor(client) {
        super(client, {
            name: 'bassboosthigh',
            aliases: ['bsh'],
            description: 'Bassboost_High filter',
            category: 'musica'
        })
    }

    async execute (message, _args, client){
        const voiceChannel = message.member.voice.channel
        const queue = client.player.getQueue(message.guild)

        if (!queue || !queue.playing) return message.channel.send('Não há nenhuma musica sendo tocada!')
        if (voiceChannel != queue.metadata.channel) return message.channel.send('Você precisa entrar no mesmo canal de voz!')

        const isFilterEnabled = queue.getFiltersEnabled().includes('bassboost_high')

        // Troca a configuração atual do filtro
        // Setando um filtro de Bassboost na música atual
        // e enviar uma mensagem de confirmação com ON/OFF

        await queue.setFilters({
            'bassboost_high': !isFilterEnabled,
            normalizer2: !isFilterEnabled
        })

        const filterEmbed = new MessageEmbed()
            .setColor(client.colors['default'])
            .setTitle(`🎵 | Bassboost HIGH: ${!isFilterEnabled ? 'ON' : 'OFF'}`)

        setTimeout(() => {
            return message.channel.send({ embeds: [filterEmbed] })
        }, queue.options.bufferingTimeout)
    }
}

module.exports = BassBoostHigh
