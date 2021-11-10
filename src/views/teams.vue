<template>
    <div v-for="team in teams" :key="team._id">
        {{ team.name }}
    </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import useTeams from '@/stores/team-store'
export default {
    name: 'Teams',
    setup() {
        const { loadTeams, teams } = useTeams()
        onMounted(async () => {
            if (teams.value.length === 0) {
                await loadTeams()
            }
        })
        return {
            teams: computed(() => teams.value),
        }
    },
}
</script>
