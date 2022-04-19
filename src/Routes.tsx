import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Screen/Home"
import Detail from './Screen/DetailProduct';
interface Props {}

const AppRoutes = (props: Props) => {
	return (
		<BrowserRouter>
			<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/detail" element={<Detail />} />
		</Routes>
		</BrowserRouter>
		
	)
}

export default AppRoutes
