<template>
    <div class="flex h-full flex-row bg-blue-100">
        <Game class="m-4 flex h-fit w-3/4 flex-col"></Game>
        <Standing class="mt-4 mr-2 h-fit"></Standing>
    </div>
</template>

<script>
import Game from '../components/game/game.vue'
import Standing from '../components/standing/standing.vue'
export default {
    name: 'Home',
    components: {
        Game,
        Standing,
    },
}
</script>
