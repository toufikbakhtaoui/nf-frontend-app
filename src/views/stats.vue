<template>
    <div>Stats</div>
    <div v-for="team in teams" :key="team._id" class="flex">
        <div class="border">
            {{ team.city }} - {{ team.name }} - {{ team.stadium }}
        </div>
    </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import useTeams from '../stores/team-store'
export default {
    name: 'Stats',
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
