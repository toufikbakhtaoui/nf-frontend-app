import { reactive, readonly, computed } from 'vue'
import { findSeasons } from '@/services/season/season-service'

const state = reactive({
    seasons: [],
})

const setSeasons = (seasons) => {
    state.seasons = seasons
}

const getters = {
    seasons: computed(() => state.seasons),
    currentSeason: computed(() => state.seasons[state.seasons.length - 1]),
}

const actions = {
    loadSeasons: async () => {
        const seasons = await findSeasons()
        setSeasons(seasons)
    },
}

export default () => ({
    state: readonly(state),
    ...getters,
    ...actions,
})
