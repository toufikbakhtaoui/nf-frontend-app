<template>
    <div>
        <v-chart :option="option" />
    </div>
</template>

<script setup>
import VChart from 'vue-echarts'
import { ref } from 'vue'

const props = defineProps(['chartData'])

const option = ref({
    xAxis: {
        type: 'category',
        data: props.chartData.xAxisdata,
        axisLabel: { interval: 0, rotate: 30 },
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: props.chartData.yAxisdata,
            type: 'bar',
            label: {
                show: true,
                position: 'top',
            },
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)',
            },
        },
    ],
})
</script>
