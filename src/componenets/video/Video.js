import React from 'react'
import "./_video.scss";

import {AiFillEye} from 'react-icons/ai'

export default function Video() {
    return (
          <div className="video">
            <div className="video__top">
              <img src="https://i.ytimg.com/vi/Yf5d_Zx3AaI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfKPpvsDFdWHFE9VtSUhpjVYwxbg" alt="" />
              <span>05:43</span>
            </div>
            <div className="video__title">
              Create app in 5 minutes #made by chintu
            </div>
            <div className="video__details">
              <span>
                <AiFillEye />  5m Views •
              </span>
              <span>5 days ago</span>
            </div>
            <div className="video__channel">
              <img src="https://yt3.ggpht.com/ytc/AAUvwngJOnqXAjdaVpCXl1DqBr66FiWTUTwKIWRSpO12zg=s68-c-k-c0x00ffffff-no-rj" alt="" />
              <p>Rainbow Hat jr</p>
            </div>
          </div>  
    )
}
