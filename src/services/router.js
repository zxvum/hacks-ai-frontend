import { Routes, Route } from 'react-router-dom'
// Pages -----
import { MainPage } from '../views/MainPage'
import { FunctionPage } from '../views/FunctionPage'

const routes = (
	<Routes>
		<Route path='/' element={<MainPage />}></Route>
		<Route path='/model' element={<FunctionPage />}></Route>
	</Routes>
)

export default routes
