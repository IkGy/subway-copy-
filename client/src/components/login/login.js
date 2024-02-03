import "./login.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCookie, removeCookie, setCookie } from "../../useCookies";
import { Link, useFetcher, useNavigate } from "react-router-dom";
import { API_URL } from "../config/contansts";

function Login() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (getCookie("saveID")) {
      setUserId(getCookie("saveID"));
    }
  }, []);

  const login = async (e) => {
    e.preventDefault();
    const email = e.target.login_id.value;
    const password = e.target.login_pwd.value;
    const saveID = e.target.login_saveID.checked;
    axios.get(`${API_URL}/user/login`, { params: { email, password } })
      .then((response) => {
        console.log("로그인 성공");
        if (saveID == 1) {
          setCookie("saveID", email);
        } else if (saveID == 0) {
          removeCookie("saveID");
        }
        console.log(response);
        setCookie("role", response.data.role);
        setCookie("user", response.data.id);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("이메일과 비밀번호를 확인해주세요");
      });
  };
  return (
    <div className="login_container">
      <div className="login_section">
        <h1>LOGIN</h1>
        <div className="login_coments">
          <p>마이웨이 회원으로 로그인하시면 제공하는</p>
          <p>다양한 서비스를 이용할 수 있습니다.</p>
        </div>
        <fieldset className="login_form">
          <form onSubmit={login} className="login_form">
            <div className="login_input">
              <div className="login_id_input">
                <label>이메일</label>
                <input
                  id="login_id"
                  type="text"
                  value={userId}
                  placeholder="아이디(이메일) 입력"
                  autocomplete="off"
                ></input>
              </div>
              <div className="login_pwd_input">
                <label>비밀번호</label>
                <input
                  id="login_pwd"
                  type="password"
                  placeholder="비밀번호 입력"
                ></input>
              </div>
            </div>
            <div className="login_id_save">
              <input id="login_saveID" type="checkbox" /> 이메일 저장
            </div>
            <div className="login_btn">
              <button type="submit">로그인</button>
            </div>
          </form>
        </fieldset>
        <ol className="login_nav">
          <Link to="/searchid">
            <li>이메일 찾기</li>
          </Link>

          <Link to="/searchpw">
            <li className="login_nav_second">비밀번호 찾기</li>
          </Link>

          <li>
            <Link to={'/register'}>회원가입</Link>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Login;
