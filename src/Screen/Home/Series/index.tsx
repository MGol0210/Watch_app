import React from "react";
import { dataSeries } from "../../../common/data";
import { SeriesWapper } from './styles';
import SeriesProduct from "./SeriesProduct";

const listSeries: dataSeries[] = [
  { id: 0, name: "Maple Series" },
  { id: 1, name: "Ebony Series" },
  { id: 2, name: "Featured" },
]

const Series: React.FC = () => {
  return(
    <SeriesWapper>
      <div className="series-overview">
        {listSeries.map((item) => {
          return (
            <div className="series-wrapper" key={item.id}>
              <div className="series-title">{item.name}</div>
              <div className="separation"></div>
              <SeriesProduct name={item.name} />
            </div>
          );
        })}
      </div>
      <button className="more">See More</button>
    </SeriesWapper>
  );
};

export default Series;

