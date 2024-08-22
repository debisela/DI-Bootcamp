import { Link } from "react-router-dom";

const Navbar = (props)=>{


    return(
        <header>
        <nav>
          <Link to='/'>Home </Link>
          <Link to='/profile'>Profile </Link>
          <Link to='/shop'>Shop</Link>
        </nav>
      </header>
    )
}
export default Navbar;