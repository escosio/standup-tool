function Header({ children }) {
  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <img
          style={{ paddingTop: "20px" }}
          src="https://cdn.shortpixel.ai/spai/q_lossless+to_auto+ret_img/www.boldin.com/retirement/wp-content/themes/chap-child/new-assets/img/boldin-logo.svg"
        />
      </div>
      <h2 className="header">💻 Welcome to the Planner Team Standup 💻</h2>
      {children}
    </>
  );
}

export default Header;
