function NavItem() {
    return (
        <div className="nav-item flex justify-center space-x-10 py-16">
        <a className="text-lg font-semibold text-white text-opacity-60" href="#">Profile</a>
        <a className="text-lg font-semibold text-white text-opacity-60" href="#">Skills</a>
        <a className="text-lg font-semibold text-white text-opacity-60" href="#">Projects</a>
        <a className="text-lg font-semibold text-white text-opacity-60" href="#">About</a>
      </div>
    );
}

export default NavItem;