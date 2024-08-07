import React from "react";
import "./AboutUs.css";
import images from "../../constants/images";

const AboutUs = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding "
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.H} alt="" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">درباره ما</h1>
          <img src={images.spoon} alt="" className="spoon__img" />
          <p className="p__opensans">
            یکی از خاطره‌انگیزترین عبارت‌ها برای دهه شصت و هفتادی‌ها، ساندویچ
            کثیف است! به یاد تمام روزهایی که بعد از مدرسه، قبل یا بعد از سینما
            رفتن، گردش در پارک، کافه دانشگاه، بعد از بازی فوتبال در کوچه و
            خیابان و ... خودشان را به یک ساندویچی می‌رساندند تا یک خوراک یا
            همبرگر 3 نان بر بدن بزنند البته با نوشابه شیشه‌ای ترجیحا مشکی!
            ساندویچ کثیف از آن دست اصطلاحاتی است که هنوز هم برای خودش طرفدار
            دارد و بعضی‌ها معتقدند که طعم هیچ ساندویچ یا املتی با غذایی که در
            چنین جاهایی خورده می‌شود، قابل مقایسه نیست. حسن کریمی معروف به عمو
            حسن، یکی از افرادی است که یک کافه قدیمی در گرگان دارد
          </p>
          <button className="custom__button" type="button">بیشتر بدانید</button>
        </div>
        <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knifeimage" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">تاریخچه</h1>
        <img src={images.spoon} alt="" className="spoon__img" />
        <p className="p__opensans">
            یکی از خاطره‌انگیزترین عبارت‌ها برای دهه شصت و هفتادی‌ها، ساندویچ
            کثیف است! به یاد تمام روزهایی که بعد از مدرسه، قبل یا بعد از سینما
            رفتن، گردش در پارک، کافه دانشگاه، بعد از بازی فوتبال در کوچه و
            خیابان و ... خودشان را به یک ساندویچی می‌رساندند تا یک خوراک یا
            همبرگر 3 نان بر بدن بزنند البته با نوشابه شیشه‌ای ترجیحا مشکی!
            ساندویچ کثیف از آن دست اصطلاحاتی است که هنوز هم برای خودش طرفدار
            دارد و بعضی‌ها معتقدند که طعم هیچ ساندویچ یا املتی با غذایی که در
            چنین جاهایی خورده می‌شود، قابل مقایسه نیست. حسن کریمی معروف به عمو
            حسن، یکی از افرادی است که یک کافه قدیمی در گرگان دارد</p>
            <button className="custom__button" type="button">بیشتر بدانید</button>
      </div>
      </div>
     
    </div>
  );
};

export default AboutUs;
