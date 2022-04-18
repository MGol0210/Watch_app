import React from "react"
import { DefaultLayout } from "../../Components/Layout/Default";

import Banner from './Banner';
import Discover from './Discover';
import Deals from './Deals';
import Recent from './Recent';
import Series from './Series';


interface Props {}

const Home = (props: Props) => {
	return <DefaultLayout>
      <Banner />
      <Discover />
      <Deals />
      <Recent />
      <Series />
	</DefaultLayout>
}

export default Home;