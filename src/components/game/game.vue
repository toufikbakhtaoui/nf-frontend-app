<template>
    <div class="bg-zinc-100 shadow">
        <!-- title -->
        <div class="m-2 mt-4 capitalize drop-shadow">
            <span>week {{ displayedWeek }}</span>
        </div>

        <!-- games -->
        <div class="space-between my-2 flex flex-row flex-wrap">
            <div
                v-for="game in games"
                :key="game._id"
                class="m-2 flex w-36 flex-auto transform flex-col border capitalize text-gray-600 shadow"
            >
                <div class="flex flex-1 border-b">
                    <span class="mx-1 flex h-7 w-7">
                        <img :src="`/img/logo/${game.awayTeam.name}.svg`" />
                    </span>

                    <!-- <span>
                        {{ getTeamSeasonRecord(game.awayTeam.identifier) }}
                    </span> -->
                    <span class="flex-1 text-left">
                        {{ game.awayTeam.name }}
                    </span>

                    <span class="pr-1">
                        {{ game.awayTeam.points }}
                    </span>
                </div>
                <div class="flex flex-1">
                    <span class="mx-1 flex h-7 w-7">
                        <img :src="`/img/logo/${game.homeTeam.name}.svg`" />
                    </span>
                    <!-- <span class="text-xs text-gray-500">
                        {{ getTeamSeasonRecord(game.homeTeam.identifier) }}
                    </span> -->
                    <span class="flex-1 text-left">
                        {{ game.homeTeam.name }}
                    </span>
                    <span class="pr-1">
                        {{ game.homeTeam.points }}
                    </span>
                </div>
            </div>
        </div>

        <!-- buttons -->
        <div class="m-2 mb-4 flex rounded bg-sky-800 drop-shadow">
            <button
                class="flex flex-1 justify-center"
                :disabled="displayedWeek === 1"
                @click="showWeek(--displayedWeek)"
            >
                <ChevronLeftIcon class="h-5 w-5 text-white" />
            </button>
            <button
                class="flex flex-auto justify-center"
                @click="playWeek(displayedWeek)"
            >
                <PlayIcon class="h-5 w-5 text-white" />
            </button>
            <button
                class="flex flex-1 justify-center"
                :disabled="
                    displayedWeek >= 16 && displayedWeek > currentSeason.week
                "
                @click="showWeek(++displayedWeek)"
            >
                <ChevronRightIcon class="h-5 w-5 text-white" />
            </button>
        </div>
    </div>
</template>

<script>
import { onMounted, computed, ref } from 'vue'
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    PlayIcon,
} from '@heroicons/vue/solid'
import useGames from '../../stores/game-store'
import useSeasons from '../../stores/season-store'
import useTeams from '../../stores/team-store'
export default {
    name: 'Game',
    components: { ChevronRightIcon, PlayIcon, ChevronLeftIcon },
    setup() {
        const { loadGames, playGames, games } = useGames()
        const { loadSeasons, seasons, currentSeason } = useSeasons()
        const { loadTeams, teams } = useTeams()
        let displayedWeek = ref(null)

        onMounted(async () => {
            if (teams.value.length === 0) {
                await loadTeams()
            }

            if (seasons.value.length === 0) {
                await loadSeasons()
            }

            if (games.value.length === 0) {
                await loadGames(
                    currentSeason.value.identifier,
                    currentSeason.value.week
                )
            }
            displayedWeek.value = currentSeason.value.week
        })

        const getTeamSeasonRecord = (teamIdentifier) => {
            const standings = teams.value.find(
                (team) => team.identifier === teamIdentifier
            ).standings
            const win = standings.find(
                (standing) => standing.season === currentSeason.value.identifier
            ).win
            const lost = standings.find(
                (standing) => standing.season === currentSeason.value.identifier
            ).lost
            const draw = standings.find(
                (standing) => standing.season === currentSeason.value.identifier
            ).draw
            return '(' + win + '-' + lost + '-' + draw + ')'
        }

        const showWeek = async (week) => {
            if (week <= 16 || week <= currentSeason.value.week) {
                await loadGames(currentSeason.value.identifier, week)
            }
        }

        const playWeek = async (week) => {
            if (week === currentSeason.value.week) {
                await playGames(
                    currentSeason.value.identifier,
                    currentSeason.value.week
                )
                await loadSeasons()
                await loadTeams()
            }
        }

        return {
            currentSeason: computed(() => currentSeason.value),
            games: computed(() => games.value),
            teams: computed(() => teams.value),
            getTeamSeasonRecord: getTeamSeasonRecord,
            showWeek: showWeek,
            playWeek: playWeek,
            displayedWeek: displayedWeek,
        }
    },
}
</script>
