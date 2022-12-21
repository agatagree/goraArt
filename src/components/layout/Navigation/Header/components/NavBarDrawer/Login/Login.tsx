import { useContext } from "react";
import { Link } from "react-router-dom";
import { Btn, MenuDrawer } from "components/common";
import { NavBarContext } from "../../Header";
import { DrawerHeader } from "../common";
import styles from "./Login.module.scss";

export const Login = () => {
  const { setActiveDrawer, isOpen, setIsOpen } = useContext(NavBarContext);

  const handleClick = () => {
    setActiveDrawer("");
    setIsOpen(!isOpen);
  };

  return (
    <MenuDrawer variant="fullHeight">
      <DrawerHeader title="Login" />
      <form className={styles.loginForm}>
        <div className={styles.loginInputWrapper}>
          <label className={styles.loginLabel} htmlFor="email">
            E-mail address:
          </label>
          <input
            className={styles.loginInput}
            type="text"
            name="email"
            id="email"
          />
        </div>
        <div className={styles.loginInputWrapper}>
          <label className={styles.loginLabel} htmlFor="passwrod">
            Password:
          </label>
          <input
            className={styles.loginInput}
            type="password"
            name="password"
            id="password"
          />
        </div>
      </form>
      <div className={styles.loginButtonContainer}>
        <Btn variant="rect" size="sm" type="submit" onClick={handleClick}>
          log in
        </Btn>
        <Btn
          as={Link}
          to="/signUp"
          variant="rectRegular"
          size="sm"
          onClick={handleClick}
        >
          Create new account
        </Btn>
        <Btn
          as={Link}
          to="/forgotPassword"
          size="sm"
          color="secondary"
          onClick={handleClick}
        >
          Forgot password?
        </Btn>
      </div>
    </MenuDrawer>
  );
};
