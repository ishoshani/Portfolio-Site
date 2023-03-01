import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { mainTheme } from "../style/theme";

//an interface that defines the props for the navbar component
interface NavbarProps {
  
    links: {label:string, path: string}[];
}

//setup the component stylesheets 
const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: right;
  min-height: 10vh;
  color: white;
  font-size: calc(10px + 2vmin);
  padding: 0 20px;
  
`;


const NavButton = styled.div`
  display: flex;
  flex: 1;
  margin-right: 10px;
  & a {
    color: ${mainTheme.colors.lightText}
    }  `

const BlankSpace = styled.div`
  display: flex;
  flex: 8;
  `


//A react compononent that renders a Navigation Bar Horizontally with links based on a list of strings in the props
export const Navbar = (props:NavbarProps) => {
  
  return (
    <NavContainer className=".brunswickGreen" >
      <BlankSpace />
        {props.links.map((link) => (
          <NavButton key={link.path}>
            <Link to={link.path}> {link.label} </Link>
          </NavButton>  
        ))}
    </NavContainer>
  );
};
