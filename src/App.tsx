import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './layouts/Layout'
import { Home } from './pages/home/Home'
import { Second } from './pages/second/Second'
import NotFound from './pages/not-found/NotFound'

export const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index path='/' element={<Home />}></Route>
						<Route index path='/second' element={<Second />}></Route>
						<Route index path='*' element={<NotFound />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}
