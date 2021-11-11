<template>
    <div class="flex flex-row">
        <div v-for="division in teams" :key="division.id" class="border">
            <p class="text-xl">
                {{ division[0] }}
            </p>
            <div v-for="team in division[1]" :key="team._id">
                {{ team.city }} {{ team.name }}
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import useTeams from '@/stores/team-store'
import { getTeamsByDivision } from '@/services/team/team-service'
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
            teams: computed(() => getTeamsByDivision(teams.value)),
        }
    },
}
</script>
