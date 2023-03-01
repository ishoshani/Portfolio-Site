import { Intro } from "./Intro";
import { Posts } from "./Posts";
import styled from "@emotion/styled";
import { CurrentProjects } from "./currentProjects";

const HomeContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    width: 100%;
    height: 100%;
    `;
const LeftSide = styled.div`
    display: flex;
    flex: 3;
    flex-flow: column wrap;
    width: 80%;
    height: 100%;
    `
const RightSide = styled.div`
    display: flex;
    flex: 1;
    flex-flow: column wrap;
    width: 20%;
    height: 100%;
    `;
export const Home = () => {
  return <HomeContainer>
        <Intro/>
        <Posts/>

</HomeContainer>
  
};