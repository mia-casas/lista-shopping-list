import { Row, NavItem, NavLink } from 'reactstrap'; 

const Footer = () => {
    return(
        <footer>
            <Row>
                <p>&copy; 2021 Lista Shopping List</p>
                <br />
                <NavLink style={{color:"white", listStyleType: "none", marginTop: "5px", marginLeft: "15px" }}href='https://github.com/mia-casas/lista-shopping-list'>GitHub</NavLink>
            </Row>
            
        </footer>
    );
}
;
export default Footer;