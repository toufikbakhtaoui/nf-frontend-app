<template>
    <div
        class="bg-center bg-contain bg-no-repeat"
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
