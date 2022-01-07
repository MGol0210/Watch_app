import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Screen/Home"
interface Props {}

const AppRoutes = (props: Props) => {
	return (
		<BrowserRouter>
			<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
		</BrowserRouter>
		
	)
}

export default AppRoutes
