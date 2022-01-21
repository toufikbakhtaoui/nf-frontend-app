import { reactive, readonly, computed } from 'vue'
import { findGames, playGames } from '@/services/game/game-service'

const state = reactive({
    games: [],
})

const setGames = (games) => {
    state.games = games
}

const getters = {
    games: computed(() => state.games),
}

const actions = {
    loadGames: async (season, week) => {
        const games = await findGames(season, week)
        setGames(games)
    },

    playGames: async (season, week) => {
        const games = await playGames(season, week)
        setGames(games)
    },
}

export default () => ({
    state: readonly(state),
    ...getters,
    ...actions,
})
