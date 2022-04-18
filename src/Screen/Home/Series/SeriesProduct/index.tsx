import React from "react";
import {SeriesPWapper} from './styles';
import {listProduct} from './products';

import images from "../../../../assets/Images";

type IProps = {
  name: string;
};

const SeriesProduct: React.FC<IProps> = ({name}) => {
  return(
    <SeriesPWapper>
      <div className="list-product-overview">
        {listProduct
          .filter((item) => item.series === name)
          .map((item) => (
            <div className="product-wrapper">
              <div className="img-wrapper">
                <img src={images.Product_1} alt="product" />
              </div>
              <div className="info-product">
                <p className="product-name">{item.name}</p>
                {item.price ? (
                  <p className="product-price">{item.price}</p>
                ) : (
                  <></>
                )}
                <p className="product-promotion">{item.promotion}</p>
              </div>
            </div>
          ))}
      </div>
    </SeriesPWapper>
  );
};

export default SeriesProduct;