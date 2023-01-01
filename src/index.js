import { createApp } from 'vue'
import App from '../src/App.vue'
import router from '../src/router'
import '../src/main.css'

import ECharts from 'vue-echarts'
import { use } from 'echarts/core'

import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'

use([CanvasRenderer, BarChart, GridComponent, TooltipComponent])

const app = createApp(App)
app.component('v-chart', ECharts)
app.use(router)
app.mount('#app')
