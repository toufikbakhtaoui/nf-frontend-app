<template>
    <div class="flex h-full">
        <div class="w-48 flex flex-col justify-around my-4">
            <span
                v-for="team in teams"
                :key="team._id"
                class="
                    flex
                    transform
                    capitalize
                    cursor-pointer
                    text-xs text-gray-700
                    border-b border-r
                    shadow-md
                    ml-2
                    hover:scale-110 hover:text-red-300
                "
                @click="selectTeam(team.name)"
            >
                <img
                    :src="'/img/logo/' + team.name + '.svg'"
                    class="w-4 h-4 mr-1"
                />
                {{ team.city }} {{ team.name }}
            </span>
        </div>
        <div class="p-4 m-4 flex-auto border rounded shadow-lg">
            {{ selectedTeam }}
        </div>
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
    data() {
        return {
            selectedTeam: 'No team selected yet!',
        }
    },
    methods: {
        selectTeam(team) {
            this.selectedTeam = team
        },
    },
}
</script>
