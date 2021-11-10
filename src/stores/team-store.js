import { reactive, readonly, computed } from 'vue'
import { findAllTeams } from '@/services/team/team-service'

const state = reactive({
    teams: [],
})

const setTeams = (teams) => {
    state.teams = teams
}

const getters = {
    teams: computed(() => state.teams),
}

const actions = {
    loadTeams: async () => {
        const teams = await findAllTeams()
        setTeams(teams)
    },
}

export default () => ({
    state: readonly(state),
    ...getters,
    ...actions,
})
