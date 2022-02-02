import axios from '@/middlewares/axios'

const findAllTeams = async () => {
    const teams = await axios.get('/teams/')
    return teams.data
}

export { findAllTeams }
