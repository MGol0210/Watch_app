import React, { useState } from "react"
import { Layout, Spin } from "antd"
import Header from "../Layout/Header"
import Footer from "../Layout/Footer"

const { Content } = Layout

export const DefaultLayout = (props: any) => {
	const [loading] = useState(false)

	return (
		<Layout className="main-layout">
			<Header />
			<Content className="maint-content"  style={{backgroundColor: '#E5E5E5'}}>
				<Spin tip={"Đang tải..."} spinning={loading}>
					{props.children}
				</Spin>
			</Content>
			<Footer />
		</Layout>
	)
}
