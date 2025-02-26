function Header({ children }) {
  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <img
          style={{ paddingTop: "20px", height: "100px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dunder_Mifflin%2C_Inc.svg/1200px-Dunder_Mifflin%2C_Inc.svg.png"
        />
      </div>
      <h2 className="header">💻 Welcome to Team Standup 💻</h2>
      {children}
    </>
  );
}

export default Header;
