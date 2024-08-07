import React from "react";
import images from "../../constants/images";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./Header.css";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding " id="home">
      <div className="app__wrapper_info">
        <SubHeading title='دنبال طعم جدید'/> <h1 className="app__header-h1"> راز غذای خوب</h1>
        <p className="p__opensans">
          حتما شما هم با این سوالات که ناهار چی بپزم؟ برای شام غذا چی درست کنم؟
          مواجه هستید! اگر از غذاهای تکراری خسته شدید و به دنبال لیست غذاهای
          ایرانی هستین، این مقاله مخصوص شماست. ما یک لیست غذای ایرانی از
          محبوب‌ترین غذاهای خانگی ایجاد کردیم. برای آشنایی بیشتر با جدول لیست
          غذای هفتگی با ما تا انتهای متن همراه باشید.
        </p>
        <button type="button" className="custom__button" >جستجوی منو </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header-image" />
      </div>
    </div>
  );
};

export default Header;
