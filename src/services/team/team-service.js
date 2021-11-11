import axios from '@/middlewares/axios'

const findAllTeams = async () => {
    const teams = await axios.get('/teams/')
    return teams.data
}

const getTeamsByDivision = (teams) => {
    const teamsByDivision = teams.reduce(
        (entryMap, team) =>
            entryMap.set(team.conference + '-' + team.division, [
                ...(entryMap.get(team.conference + '-' + team.division) || []),
                team,
            ]),
        new Map()
    )
    return teamsByDivision
}

export { findAllTeams, getTeamsByDivision }
