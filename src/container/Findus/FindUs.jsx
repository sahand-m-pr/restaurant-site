import React from "react";
import SubHeading from '../../components/SubHeading/SubHeading'
import images from "../../constants/images";

const FindUs = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title='تماس با ما'/>
        <h1 className="headtext__cormorant" style={{marginBottom:'3rem'}}>
          ما را پیدا کنید
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">جنت اباد خیابان بهار نریسیده به کوچه حسن</p>
          <p className="p__cormorant" style={{color:'#DCCA87',margin:'2rem 0'}}>ساعت کاری</p>
          <p className="p__opensans">شنبه تا چهار شنبه : 12 ظهر - 12 شب</p>
          <p className="p__opensans">پنجشنبه تا جمعه : 12 ظهر - 2 شب</p>
        </div>
        <button className="custom__button" type="button" style={{marginTop:'2rem'}}>حضور در کنار ما</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.findus} alt="image_findus" />
      </div>
    </div>
  );
};

export default FindUs;
