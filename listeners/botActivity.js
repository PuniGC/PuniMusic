module.exports = async function botActivity(client) {
    const { user: puniBot,
            tag: botTag ,
            prefix: botPrefix } = client

    const activities = [
        { name: 'ð¥ Cineminha!', type: 'STREAMING', url: 'https://www.netflix.com/title/80057281' },
        { name: 'ð® Como fazer um pudim?', type: 'PLAYING' },
        { name: `${botTag} âï¸`, type: 'LISTENING' },
        { name: `${botPrefix} helpmusic`, type: 'LISTENING' },
        { name: 'Musica sem a crush ð', type: 'LISTENING' },
        { name: 'ð Anda perdido ? me mencione!', type: 'LISTENING' },
        { name: 'ð Entre em contato para reportar qualquer bug.', type: 'PLAYING' },
        { name: 'ð® Pudim na lua?', type: 'CUSTOM' },
        { name: 'ð® Desfrute de um belo pudim', type: 'CUSTOM' },
        { name: 'ð® Pudim Pudim Pudim', type: 'CUSTOM' },
        { name: 'ðµ Mais Musicas legais para VocÃª!', type: 'PLAYING' },
        { name: 'ðµ Mais Musicas legais com VocÃª!', type: 'LISTENING' }
    ]
    const stats = ['online', 'dnd', 'idle']

    setInterval(() => {
        const randomActivity = activities[Math.floor(Math.random() * activities.length)]
        const randomStatus = stats[Math.floor(Math.random() * stats.length)]

        puniBot.setPresence({ activities: [randomActivity], status: randomStatus })
    }, 20000)
}
