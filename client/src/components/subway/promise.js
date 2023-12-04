import React from "react";
import promise1 from './sw_images/img_sw_promise01.jpg';
import promise2 from'./sw_images/img_sw_promise02.jpg';
import promise3 from'./sw_images/img_sw_promise03.jpg';
import promise4 from'./sw_images/img_sw_promise04.jpg';
import './promise.css';

function Promise(){
  return(
    <div id="Promise_Main_Div">
      <div className="Head_Line">
        <h2 className="Head_txt">
          <em>HELLO!</em>
          We Are LE SSERAFIM
          {/* <span>®</span> */}
          </h2>
        <p id="Head_subtitle">IM FEARLESS</p>
      </div>
      <div id="grid_1st" className="grid_box">
        <div className="image_sec">
          <img src={promise1}></img>
        </div>
        <div className="grid_txt_area">
          <h3 className="grid_head_txt">세상은 나를 평가해</h3>
          <p className="grid_main_txt">
            The world is my oyster
          </p>
        </div>

        <p className="eng">FEARLESS</p>
      </div>
      <div id="grid_2nd" className="grid_box">
        <div className="grid_txt_area">
          <h3 className="grid_head_txt">ミスや失敗を隠さない</h3>
          <p className="grid_main_txt">
            I'm antifragile
          </p>
        </div>
        <div className="image_sec">
          <img src={promise2}></img>
        </div>
        <p className="eng">The Hydra</p>

      </div>
      <div id="grid_3rd" className="grid_box">
        <div className="image_sec">
          <img src={promise3}></img>
        </div>
        <div className="grid_txt_area">
          <h3 className="grid_head_txt">A closed door, a door locked shut, another door slightly ajar I open them all</h3>
          <p className="grid_main_txt">
            Burn the bridge Burn it all よく見て、
            <br />
            우리는 이 모든 것을 태워 빛이 될 거야
          </p>
        </div>
        <p className="eng">Burn the Bridge</p>
        
      </div>
      <div id="grid_4th" className="grid_box">
        <div className="grid_txt_area">
          <h3 className="grid_head_txt">We are unforgiven</h3>
          <p className="grid_main_txt">
            We don't have to be forgiven
            <br />
            We are unforgiven
          </p>
        </div>
        <div className="image_sec">
          <img src={promise4}></img>
        </div>
        <p className="eng">LE SSERAFIM</p>
      </div>
    </div>
  )
}

export default Promise;