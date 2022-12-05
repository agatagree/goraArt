import { MessagePage } from "../../utils/messages/MessagePage";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { ExitBtn } from "../../utils/Buttons/ExitBtn/ExitBtn";
import { Dispatch, SetStateAction } from "react";

type toogleType = {
  toggleLogin: boolean;
  setToggleLogin: Dispatch<SetStateAction<boolean>>;
};

export const Login = ({ toggleLogin, setToggleLogin }: toogleType) => {

  const handleClick = () => {
    setToggleLogin(!toggleLogin)
    
  }
  return (
    <>
      <div className={styles.navBarLoginLayout}>
        <header className={styles.LoginHeader}>
          <h3 className={styles.LoginTitle}>Login</h3>
          <ExitBtn onClick={handleClick}/>
        </header>
        <form className={styles.LoginForm}>
          <div className={styles.LoginInputWrapper}>
            <label className={styles.LoginLabel} htmlFor="email">
              E-mail address:
            </label>
            <input
              className={styles.LoginInput}
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div className={styles.LoginInputWrapper}>
            <label className={styles.LoginLabel} htmlFor="passwrod">
              Password:
            </label>
            <input
              className={styles.LoginInput}
              type="password"
              name="password"
              id="password"
            />
          </div>
        </form>
        <div className={styles.LoginButtonContainer}>
          <button
            className={`${styles.rectangularBtn} ${styles.LoginBtn}`}
            type="submit"
          >
            log in
          </button>
          <Link
            to="/signUp"
            className={`${styles.rectangularBtnRegular} ${styles.LoginBtn}`}
          >
            Create new account
          </Link>
          <Link
            to="/forgotPassword"
            className={`${styles.rectangularBtnNegative} ${styles.LoginBtn}`}
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </>
  );
};
