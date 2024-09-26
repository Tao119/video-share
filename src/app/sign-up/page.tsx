"use client";
import { useState } from "react";
import { Axios } from "../../services/axios";
import { Button } from "../../components/button";
import Image from "next/image";
import ShowInput from "../../assets/img/show_input.svg";
import HideInput from "../../assets/img/hide_input.svg";

interface Props {
  signIn: () => void;
}

const Page = ({ signIn }: Props) => {
  const [err, setErr] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hiddenPass, hidePass] = useState(true);

  const Verify = () => {};

  return (
    <div className="p-signin">
      <div className="p-signin__content">
        <div className="p-signin__content-box">
          {err.length > 0 ? (
            <div className="p-signin__error">{err}</div>
          ) : (
            <></>
          )}
          <div className="p-signin__item-container">
            <div className="p-signin__item">
              <p className="p-signin__item-label">メールアドレス</p>
              <div className="p-signin__item-inputBox">
                <input
                  placeholder="メールアドレスを入力"
                  className="p-signin__item-input"
                  type="text"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
              </div>
            </div>
            <div className="p-signin__item">
              <p className="p-signin__item-label">パスワード</p>
              <div className="p-signin__item-inputBox">
                <input
                  placeholder="パスワードを入力"
                  className="p-signin__item-input"
                  type={hiddenPass ? "password" : "text"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
                <Image
                  className={`p-signin__item-input-icon ${
                    hiddenPass ? "" : "-hidden"
                  }`}
                  src={ShowInput}
                  alt="show"
                  onClick={() => {
                    hidePass(false);
                  }}
                />
                <Image
                  className={`p-signin__item-input-icon ${
                    !hiddenPass ? "" : "-hidden"
                  }`}
                  alt="hide"
                  src={HideInput}
                  onClick={() => {
                    hidePass(true);
                  }}
                />
              </div>
            </div>
          </div>

          <Button
            className={`p-signin__submit ${
              email.length > 0 && password.length > 0 ? "" : "-disabled"
            }`}
            label="ログイン"
            onClick={() => {
              if (email.length == 0 || password.length == 0) return;
              Verify();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
