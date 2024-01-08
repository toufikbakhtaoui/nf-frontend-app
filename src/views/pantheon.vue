<template>
    <div>
        <BarChart
            :chart-data="mostWinsInRegularSeason()"
            class="h-96 w-auto"
        ></BarChart>
        <BarChart
            :chart-data="mostLosesInRegularSeason()"
            class="h-96 w-auto"
        ></BarChart>
        <BarChart :chart-data="mostSuperBowls()" class="h-96 w-auto"></BarChart>
    </div>
</template>

<script>
import { onMounted } from 'vue'
import useTeams from '../stores/team-store'
import BarChart from '../components/common/BarChart.vue'
export default {
    name: 'Pantheon',
    components: {
        BarChart,
    },
    setup() {
        const { loadTeams, teams } = useTeams()
        onMounted(async () => {
            if (teams.value.length === 0) {
                await loadTeams()
            }
        })

        const mostWinsInRegularSeason = () => {
            const orderedTeams = teams.value.sort(
                (t1, t2) => t2.stats.win - t1.stats.win
            )
            const xAxisData = orderedTeams.map((team) => team.name)
            const yAxisData = orderedTeams.map((team) => team.stats.win)
            return {
                xAxisdata: xAxisData,
                yAxisdata: yAxisData,
            }
        }

        const mostLosesInRegularSeason = () => {
            const orderedTeams = teams.value.sort(
                (t1, t2) => t2.stats.lost - t1.stats.lost
            )
            const xAxisData = orderedTeams.map((team) => team.name)
            const yAxisData = orderedTeams.map((team) => team.stats.lost)
            return {
                xAxisdata: xAxisData,
                yAxisdata: yAxisData,
            }
        }
        const mostSuperBowls = () => {
            let orderedTeams = teams.value.sort(
                (t1, t2) =>
                    t2.trophiesRecord.superBowl.winner -
                    t1.trophiesRecord.superBowl.winner
            )
            orderedTeams = orderedTeams.filter(
                (team) => team.trophiesRecord.superBowl.winner > 0
            )
            const xAxisData = orderedTeams.map((team) => team.name)
            const yAxisData = orderedTeams.map(
                (team) => team.trophiesRecord.superBowl.winner
            )
            return {
                xAxisdata: xAxisData,
                yAxisdata: yAxisData,
            }
        }
        return {
            mostWinsInRegularSeason: mostWinsInRegularSeason,
            mostLosesInRegularSeason: mostLosesInRegularSeason,
            mostSuperBowls: mostSuperBowls,
        }
    },
}
</script>
