import React from "react";
import "./mainpage.css";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const MainPage = () => {
  return (
    <div className="main-container">
      <div className="main-information">
        <img className="profil-photo"
          src="https://i0.wp.com/furkandemir.av.tr/wp-content/uploads/2021/11/cropped-cropped-DEMIR-HUKUK-BUROSU-1-scaled-1.jpg?fit=512%2C512&ssl=1"
          alt="profil foto"
        />
        <h1>Serkan Demir</h1>

        <h3>Ankara Üniversitesi Hukuk Fakültesi'nden mezun oldu.</h3>
        <h3>2011 yılında Ankara Barosu'nda avukatlık stajını tamamladı.</h3>
        <h3>İstanbul'da ABC Hukuk Bürosu'nda 3 yıl avukat olarak çalıştı.</h3>
        <h3>Halen kendi kurduğu hukuk bürosunda avukatlık yapmaktadır.</h3>
      </div>
      <div className="card-information">
        <img className="inf-photo"
          src="https://fastly.4sqi.net/img/general/600x600/599198155_XqkL0YslfTA0E1w8USz2YcFZz7NzkK71Oqn9rlSP_bk.jpg"
          alt="Ankara savciliği"
        />
        <img  className="inf-photo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_48aefmPieroaHIan9AHPVkcF3Z1CEcEdsg&usqp=CAU"
          alt="Hukuk bürosu"
        />
        <img  className="inf-photo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShAANBqypGLHc96LB7JXRJfy4HhEJhWJXdDg&usqp=CAU"
          alt="Hukuk bürosu"
        />
        
        <FloatingWhatsApp />
      </div>
    </div>
  );
};

export default MainPage;