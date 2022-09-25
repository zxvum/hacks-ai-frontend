import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import routes from './services/router'
import Chart from 'chart.js/auto'

import { CategoryScale } from 'chart.js'
Chart.register(CategoryScale)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BrowserRouter>{routes}</BrowserRouter>
	</React.StrictMode>
)
