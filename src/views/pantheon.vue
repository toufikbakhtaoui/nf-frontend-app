<template>
    <div>
        <BarChart
            v-bind:chartData="mostWinsInRegularSeason()"
            class="h-96 w-auto"
        ></BarChart>
        <BarChart
            v-bind:chartData="mostLosesInRegularSeason()"
            class="h-96 w-auto"
        ></BarChart>
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
            if (teams.value.length == 0) {
                await loadTeams()
            }
        })

        const mostWinsInRegularSeason = () => {
            const orderedTeams = teams.value.sort(
                (t1, t2) => t2.stats.win - t1.stats.win
            )
            const xAxisdata = orderedTeams.map((team) => team.name)
            const yAxisData = orderedTeams.map((team) => team.stats.win)
            return {
                xAxisdata: xAxisdata,
                yAxisdata: yAxisData,
            }
        }

        const mostLosesInRegularSeason = () => {
            const orderedTeams = teams.value.sort(
                (t1, t2) => t2.stats.lost - t1.stats.lost
            )
            const xAxisdata = orderedTeams.map((team) => team.name)
            const yAxisData = orderedTeams.map((team) => team.stats.lost)
            return {
                xAxisdata: xAxisdata,
                yAxisdata: yAxisData,
            }
        }
        return {
            mostWinsInRegularSeason: mostWinsInRegularSeason,
            mostLosesInRegularSeason: mostLosesInRegularSeason,
        }
    },
}
</script>
