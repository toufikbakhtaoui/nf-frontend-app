import { createApp } from 'vue'
import App from '../src/App.vue'
import router from '../src/router'
import '../src/main.css'

import ECharts from 'vue-echarts'
import { use } from 'echarts/core'

import { CanvasRenderer } from 'echarts/renderers'
import { PieChart, BarChart } from 'echarts/charts'
import {
    GridComponent,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    VisualMapComponent,
} from 'echarts/components'

use([
    CanvasRenderer,
    PieChart,
    BarChart,
    GridComponent,
    TooltipComponent,
    TitleComponent,
    LegendComponent,
    VisualMapComponent,
])

const app = createApp(App)
app.component('v-chart', ECharts)
app.use(router)
app.mount('#app')
