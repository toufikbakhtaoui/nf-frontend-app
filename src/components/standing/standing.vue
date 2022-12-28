<template>
    <div class="flex flex-wrap">
        <div
            v-for="division in divisions"
            :key="division.id"
            class="
                mx-2
                mb-4
                h-fit
                w-96
                grow
                border
                bg-zinc-100
                capitalize
                text-gray-600
                shadow
            "
        >
            <table>
                <thead>
                    <tr>
                        <th class="bg-gray-200"></th>
                        <th class="w-24 bg-gray-200 pb-3 pt-1 text-left">
                            {{ division[0] }}
                        </th>
                        <th class="w-24 bg-gray-200 pb-3 pt-1">win</th>
                        <th class="w-24 bg-gray-200 pb-3 pt-1">lost</th>
                        <th class="w-24 bg-gray-200 pb-3 pt-1">draw</th>
                        <th class="w-24 bg-gray-200 pb-3 pt-1">scored</th>
                        <th class="w-24 bg-gray-200 pb-3 pt-1">conceded</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr
                        v-for="team in sortStandings(division[1], season)"
                        :key="team.id"
                    >
                        <td>
                            <span class="mx-1 flex h-7 w-7">
                                <img :src="`/img/logo/${team.name}.svg`" />
                            </span>
                        </td>
                        <td>
                            <span class="capitalize">
                                {{ team.name }}
                            </span>
                        </td>
                        <td>
                            <div>
                                {{ team.standings[season - 1].win }}
                            </div>
                        </td>
                        <td>
                            {{ team.standings[season - 1].lost }}
                        </td>
                        <td>
                            {{ team.standings[season - 1].draw }}
                        </td>
                        <td>
                            {{ team.standings[season - 1].scored }}
                        </td>
                        <td>
                            {{ team.standings[season - 1].conceded }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { onMounted, computed, ref } from 'vue'
import useTeams from '../../stores/team-store'
import useSeasons from '../../stores/season-store'
export default {
    name: 'Standing',
    setup() {
        const { loadTeams, teamsByDivision } = useTeams()
        const { loadSeasons, seasons, currentSeason } = useSeasons()
        let season = ref(1)

        onMounted(async () => {
            if (seasons.value.length === 0) {
                await loadSeasons()
            }
            if (teamsByDivision.value.length === 0) {
                await loadTeams()
            }
            season.value = currentSeason.value.identifier
        })

        const sortStandings = (division, season) => {
            return division.sort((a, b) => {
                return (
                    b.standings[season - 1].win - a.standings[season - 1].win ||
                    b.standings[season - 1].draw -
                        a.standings[season - 1].draw ||
                    b.standings[season - 1].scored -
                        a.standings[season - 1].scored ||
                    a.standings[season - 1].conceded -
                        b.standings[season - 1].conceded
                )
            })
        }
        return {
            divisions: computed(() => teamsByDivision.value),
            season: season,
            sortStandings: sortStandings,
        }
    },
}
</script>
