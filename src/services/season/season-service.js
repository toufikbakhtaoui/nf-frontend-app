import axios from '@/middlewares/axios'

const findSeasons = async (season) => {
    let query =
        !season || season.length === 0
            ? '/seasons'
            : `/seasons?season=${season}`
    const seasons = await axios.get(query)
    return seasons.data
}

export { findSeasons }
