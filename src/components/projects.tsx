
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { mainTheme } from "../style/theme";

export interface Project {
    id: string;
    description: string;
    images: string; 
}

const ProjectZone = styled.div`
    display: flex;
    flex-flow: row wrap ;
    width: 100%;
    padding-right: 5px;
    margin-left: 5px;
    gap: 2%;
    margin-top: 10px;
    `
const ProjectContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    flex: 0 0 49%;
    box-sizing: border-box;
    height: min-content;
    border: 3px solid ${mainTheme.colors.darkText};
    background-color: ${mainTheme.colors.light};
    color: ${mainTheme.colors.darkText};
    padding: 5px;
    `
const ProjectTitle = styled.h1`
    flex: 0 1 20px;
    `
const ProjectImage = styled.img`
    flex: 0 0;
    width: 40%;
    aspect-ratio: 1/1;

    `
const ProjectDescription = styled.div`
    flex: 0 1 100px;
    align-text: left;
    `


export const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    useEffect(() => {
        fetch("http://localhost:3020/projectList").then((response) => {
            console.log(response);
            return response.json()}).then((json) => {
                console.log(json);
                setProjects(json.result as Project[]);

            }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (<ProjectZone>
        {projects.map((project) => (
            <ProjectContainer key={project.id}>
                <ProjectTitle>{project.id}</ProjectTitle>
                <ProjectImage src={project.images} />
                <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectContainer>
        ))}
    </ProjectZone>);
}