import { useContext } from "react";
import { Link } from "react-router-dom";
import { Btn, ExitBtn } from "components/common/Buttons";
import { MenuDrawer } from "components/common/MenuDrawer/MenuDrawer";
import { Text } from "components/common/Text";
import { NavBarContext } from "../../Header";
import styles from "./Login.module.scss";

export const Login = () => {
  const { setActiveDrawer, isOpen, setIsOpen } = useContext(NavBarContext);

  const handleClick = () => {
    setActiveDrawer("");
    setIsOpen(!isOpen);
  };

  return (
    <MenuDrawer variant="fullHeight">
      <div className={styles.navBarLoginLayout}>
        <header className={styles.LoginHeader}>
          <div className={styles.LoginTitle}>
            <Text variant="smallHeader" size="sm">
              Login
            </Text>
          </div>
          <ExitBtn onClick={handleClick} />
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
          <Btn variant="Rect" size="sm" type="submit">
            log in
          </Btn>
          <Btn as={Link} to="/signUp" variant="RectRegular" size="sm">
            Create new account
          </Btn>
          <Btn as={Link} to="/forgotPassword" size="sm" color="secondary">
            Forgot password?
          </Btn>
        </div>
      </div>
    </MenuDrawer>
  );
};
