import React, { useEffect, useState } from "react";
import { MarkdownBlock } from "./markdownBlock";
import styled from "@emotion/styled";
import fs from "fs";
import {mainTheme} from '../style/theme'

const PostZone = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    height: 100%;
    flex: 1;
    `;

const PostContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    margin: 10px 10px 10px 10px;
    padding-left: 10px;
`
const ContentContainer = styled.div`
    border: 4px solid ${mainTheme.colors.darkText};
    background-color: ${mainTheme.colors.light};
    color: ${mainTheme.colors.darkText};
    padding-left: 10px;
    margin-top:0;
    `
const TitleContainer = styled.div`
    color: ${mainTheme.colors.lightText};
    font-size: 2vh;
    padding-left: 5px;
    
    `
//A react component that renders a set of blogs based on a folder in resources

export interface post{
    id: string;
    content: string;
}
export const Posts = () => {
    
        const [posts, setPosts] = useState([] as post[]);
        useEffect(() => {
            fetch("http://localhost:3020/postList").then((response) => {
                console.log(response);    
                return response.json()}).then((json) => { 
                console.log(json);
                    setPosts(json.result as post[]);
            }).catch((error) => {
                console.log(error);
            });
            }, []);
        return <PostZone>
    
            {posts.map((post) => (
    
                    <PostContainer key={post.id}>
                    <TitleContainer><i className="fa-solid fa-file"></i> {post.id}</TitleContainer>
                    <ContentContainer>
                        <MarkdownBlock mdString={post.content} />
                    </ContentContainer>
                    </PostContainer>
    
            ))}
            </PostZone>
}