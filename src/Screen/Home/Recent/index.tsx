import {RecentWapper} from './styles';

import images from '../../../assets/Images';

const Recent: React.FC = () =>{
  return(
    <RecentWapper>
      <div className="wrapper-left">
        <p className="recent-title">Recent News</p>
        <div className="separation"></div>
        <p className="recent-label">Where To Travel</p>
        <p className="recent-question">Matoa Where To Travel? Yogyakarta</p>
        <button className="discover">Discover</button>
      </div>
      <div className="wrapper-right">
        <img className="recent-img" src={images.Product_5} alt="recent-img" />
      </div>
    </RecentWapper>
  )
}

export default Recent;  