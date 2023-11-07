import "./header.component.css";
const Header = ({ navigationList }) => {
  return (
    <header className="header">
      <div>
        <img src="" alt="" />
        <p className="favicon-name">/ hello@samurai.com</p>
      </div>
      <div className="navigation">
        {navigationList.map((el, i) => {
          return (
            <p key={i} className="nav-item">
              {el}
            </p>
          );
        })}
      </div>
      <div className="btns">
        <button className="login-btn">Log in</button>
        <button className="gets-btn">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
