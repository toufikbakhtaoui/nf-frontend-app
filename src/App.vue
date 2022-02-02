<template>
    <div class="App flex h-screen flex-col text-center">
        <header>
            <nav class="flex justify-evenly bg-blue-50 py-2">
                <a v-for="item in items" :key="item">
                    <router-link :to="{ name: `${item}` }">{{
                        item
                    }}</router-link>
                </a>
            </nav>
        </header>
        <div class="flex-auto">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: ['Home', 'Stats', 'Pantheon', 'Teams'],
        }
    },
}
</script>
