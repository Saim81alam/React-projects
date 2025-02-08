import "./navbar.css";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">EV-olution</div>
      <div className="nav-menu">
        <ul>Home</ul>
        <ul>Explore</ul>
        <ul>About</ul>
        <ul className="nav-contact">Contact</ul>
      </div>
    </div>
  );
};

export default Navbar;
