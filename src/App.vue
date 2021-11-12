<template>
    <div class="App h-screen flex flex-col text-center">
        <header>
            <nav class="flex justify-evenly py-2 bg-blue-50">
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
