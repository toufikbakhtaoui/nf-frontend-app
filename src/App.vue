<template>
    <div class="App h-screen w-scree">
        <header class="bg-blue-50">
            <nav class="container flex justify-evenly py-2">
                <a v-for="item in items" :key="item">
                    <router-link :to="{ name: `${item}` }">{{
                        item
                    }}</router-link>
                </a>
            </nav>
        </header>
        <div class="border-2 text-center bg-gray-100 h-full">
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
