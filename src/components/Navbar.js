import Button from "./Button";
import Logo from "./Logo";
import Nav from "./Nav";

function Navbar() {
    return (
      <div className="flex items-center">
        <div className="w-3/12">
          <Logo/>
        </div>
        <div className="w-6/12">
         <Nav/>
        </div>
        <div className="3/12">
          <Button>
            Contact
          </Button>
        </div>
      </div>
    )
}

export default Navbar;