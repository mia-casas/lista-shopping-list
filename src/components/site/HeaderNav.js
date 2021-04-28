import {
        Navbar, 
        NavbarBrand, 
        Nav, 
        NavItem, 
        NavLink,
        Button,
        
    } from 'reactstrap';
    import Lista from '../assets/Lista.png'
    
    const Header = (props) => {
        return(
            <header>
                <Navbar className='header'>

<img src={Lista} alt="logo" id="logo" />
    {/*                 <NavbarBrand >Lista Shopping List</NavbarBrand> */}

                    <Nav className='ml-auto' navbar>
                        
                        <NavItem>
                            <NavLink href='https://github.com/mia-casas/blue-badge-final-client'>
                                GitHub
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <Button onClick={props.clickLogout}>Logout</Button>
                        </NavItem>
                        
                    </Nav>
                </Navbar>
            </header>
        );
    };  
export default Header;