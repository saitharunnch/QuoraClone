import React from "react";
import "./css/WidgetContent.css";

function WidgetContent() {
  return (
    <div className=" widget__contents">
      <div className="widget__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1737435-100-jxcfmjdvwvpkcketifttdmeeimxcatua.jpeg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Mobile App Programmer</h5>
          <p>The best Mobile App Development Company</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/09/Tux%2C_gray%EF%BC%8Fgrey_background.png"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Unix & Linux For users of Linux</h5>
          <p>FreeBSD and other Unix-like operating systems</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210614194148/Screenshot20210614194018.jpg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Data Structures</h5>
          <p>Group for Data Structures and Algorithms concepts and Questions</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rocket_League_coverart.jpg/768px-Rocket_League_coverart.jpg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Rocket League</h5>
          <p>Group for Rocket League fans</p>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;