import React from "react";
import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
import {keyframes, jsx, css} from '@emotion/react'
import styled from '@emotion/styled';
import { mainTheme } from "../style/theme";

const title = 'Ido Shoshani'

const LayoutContainer = styled.div`
    display: relative;
    background-color: ${mainTheme.colors.dark};
    height: 100vh;
`

const Header = styled.h1`
    color: ${mainTheme.colors.lightText};
    margin-top: 0;
    padding-top: 10px;
    padding-left: 10px;
    margin-bottom: 0;
    border-bottom: 10px solid black;
    background-color: ${mainTheme.colors.darkText};
    white-space: nowrap;
     
    `

const size = `
    12px + 3vmin
`
const typing = keyframes`
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
`
const blink = keyframes`
  0% {
    border-right-color: ${mainTheme.colors.lightText};
  }
  50% {
    border-right-color: transparent;
  }
  100% {
    border-right-color: ${mainTheme.colors.lightText};
  }
`

const TypedContainer = styled.div`
    display: inline-block;
    font-size: calc(${size});
    font-family: 'Roboto Mono', monospace;
`;

const TypedText = styled.div`
overflow: hidden;
white-space: nowrap;
border-right: 10px solid ${mainTheme.colors.lightText};
width: 0;
animation: ${typing} 1s steps(${title.length},end) forwards, ${blink} 0.7s step-end infinite alternate;
`


const ContentBody = styled.div`
display: flex;
flex-flow: row wrap;
width: 100%;
height: 100%;
`;

const LeftSide = styled.div`
    display: flex;
    flex: 7;
    height: 100%;
    `
const RightSide = styled.div`
    display: flex;
    flex: 1 1;
    flex-flow: column wrap;
    height: 100%;
    border-right: 5px solid ${mainTheme.colors.lightText};
    `;

//A react component that renders around the content of the page
export const Layout = () => {  
    return (
        <LayoutContainer>
            <Header>
                <TypedContainer>
                <TypedText id='typing-text'>
                    {title}
                </TypedText>
                </TypedContainer>
            </Header>
            <ContentBody >
                <RightSide>
                    <Navbar links={[{ label: "Home", path: '/' }, { label: "Projects", path: '/projects' }, { label: "Social", path: "/social" }]} />
                </RightSide>
                <LeftSide>
                    <Outlet />
                </LeftSide>

            </ContentBody>
        </LayoutContainer>
    );
};