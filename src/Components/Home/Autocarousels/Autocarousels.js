import React from 'react'
import "./Autocarousels.css"
const Autocarousels = () => {
    return (
        <div>
            <div class='slider'>
    <input name="input-slider" id='input-slide-0' type="radio" class='input-slide input-slide-num' />
    <input name="input-slider" id='input-slide-1' type="radio" class='input-slide input-slide-num' />
    <input name="input-slider" id='input-slide-2' type="radio" class='input-slide input-slide-num' />
    <input name="input-slider" id='input-slide-3' type="radio" class='input-slide input-slide-num' />
    <input name="input-slider" id='input-slide-autoplay' type="radio" class='input-slide' checked />
    <ul>
      <li class='slide-0'></li>
      <li class='slide-1'></li>
      <li class='slide-2'></li> 
      <li class='slide-3'></li>        
    </ul>
    <div class='slide-description'>
      <label class='slide-0'>
        <img src="./images/img6.jpg" class="text-slide"/>
      </label>
      <label class='slide-1'>
      <img src="./images/img1-slider.png" class="text-slide"/>
      </label>
      <label class='slide-2'>
      <img src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3825,w_5823,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_1029009367_x1u5we.jpg" class="text-slide"/>
      </label>
      <label class='slide-3'>
      <img src="https://cdn.shopify.com/s/files/1/0507/2096/4799/files/69538118_1155314721525528_580174988481396736_o_e27c6c1b-1157-48f4-9a58-62d088f9692d.jpg?v=1617184893" class="text-slide"/>
      </label>
    </div>
    <div class='slider-arrow-prev'>
      <label class='slide-0' for='input-slide-0'></label>
      <label class='slide-1' for='input-slide-1'></label>
      <label class='slide-2' for='input-slide-2'></label>
      <label class='slide-3' for='input-slide-3'></label>
    </div>
    <div class='slider-arrow-next'>
      <label class='slide-0' for='input-slide-0'></label>
      <label class='slide-1' for='input-slide-1'></label>
      <label class='slide-2' for='input-slide-2'></label>
      <label class='slide-3' for='input-slide-3'></label>
    </div>        
    <div class='slider-dot'>
      <label class='slide-0' for='input-slide-0'></label>
      <label class='slide-1' for='input-slide-1'></label>
      <label class='slide-2' for='input-slide-2'></label>
      <label class='slide-3' for='input-slide-3'></label>
    </div>        
  </div>
  
        </div>
        )
}

export default Autocarousels
