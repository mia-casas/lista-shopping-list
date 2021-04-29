import {
        Navbar, 
        Nav, 
        NavItem, 
        NavLink,
        Button,
        
    } from 'reactstrap';
    import Lista from '../assets/Lista.png'
    import {button} from "../../Styles"
    
    const Header = (props) => {
        return(
            <header>
                <Navbar className='header'>

<img src={Lista} alt="logo" id="logo" />
    {/*                 <NavbarBrand >Lista Shopping List</NavbarBrand> */}

                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <Button style={button} onClick={props.clickLogout}>Log Out</Button>
                        </NavItem>
                        
                    </Nav>
                </Navbar>
            </header>
        );
    };  
export default Header;