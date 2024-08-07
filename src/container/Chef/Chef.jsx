import React from "react";
import "./Chef.css";
import images from "../../constants/images";
import SubHeading from "../../components/SubHeading/SubHeading";
const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img_reverse">
        <img src={images.chef} alt="chef_img" />
      </div>
      <div className="app__wrapper_info">

    <SubHeading title='کلام سرآشبز'/>
    <h1 className="headtext__cormorant">باورهای ما </h1>
     
      <div className="app__chef-content">
        <div className="app__chef-content_qoute">
          <img src={images.quote} alt="" />
          <p className="p__opensans">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
            illum!
          </p>
          <br />
          <p className="p__opensans">
          هر ماده ای که انسان و یا جانوران دیگر می خورند یا گیاهان جذب می کنند
          که زندگی و سلامتی شان پایدار بماند. غذا متشکل از مواد مغذی است. انسان
          از این مواد استفاده می کند: ۱. کربوهیدرات ها به صورت نشاسته در نان،
          
        </p>
        </div>
      
        </div>
   
        <div className="app_chef-sign">
          <p>amo hasan</p>
          <p className="p__opensans">آشپز و مالک</p>
          <img src={images.sign} alt="" />
        </div>
        </div>
     
    </div>
  );
};

export default Chef;
