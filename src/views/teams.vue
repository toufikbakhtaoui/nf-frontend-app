<template>
    <div class="flex h-full">
        <div class="my-4 flex w-48 flex-col justify-around">
            <span
                v-for="team in teams"
                :key="team._id"
                class="
                    ml-2
                    flex
                    transform
                    cursor-pointer
                    border-b border-r
                    text-xs
                    capitalize
                    text-gray-700
                    shadow-md
                    hover:scale-110 hover:text-red-300
                "
                @click="selectTeam(team.name)"
            >
                <img :src="`/img/logo/${team.name}.svg`" class="mr-1 h-4 w-4" />
                {{ team.city }} {{ team.name }}
            </span>
        </div>
        <div class="m-4 flex-auto rounded border p-4 shadow-lg">
            <TeamBanner class="h-1/6" :team="selectedTeam"></TeamBanner>
            <div class="mt-2 h-5/6">
                {{ selectedTeam }}
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import useTeams from '../stores/team-store'
import TeamBanner from '../components/team/team-banner.vue'
export default {
    name: 'Teams',
    components: {
        TeamBanner,
    },
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
