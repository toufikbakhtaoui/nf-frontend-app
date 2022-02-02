<template>
    <div
        class="bg-contain bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(/img/banner/${team}.png)` }"
    ></div>
</template>

<script>
export default {
    name: 'TeamBanner',
    props: {
        team: {
            type: String,
            required: true,
        },
    },
}
</script>
