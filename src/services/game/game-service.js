import axios from '@/middlewares/axios'

const findGames = async (season, week, team) => {
    let query = ''
    query =
        !season || season.length === 0
            ? query
            : query.concat(`season=${season}`)
    query = !week || week.length === 0 ? query : query.concat(`&week=${week}`)
    query = !team || team.length === 0 ? query : query.concat(`&team=${team}`)
    query = query.length === 0 ? '/games' : '/games?'.concat(query)

    const games = await axios.get(query)
    return games.data
}

const playGames = async (season, week) => {
    const games = await axios.get(`/games/scores?season=${season}&week=${week}`)
    return games.data
}

export { findGames, playGames }
