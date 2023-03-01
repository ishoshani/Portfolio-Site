
import React from 'react';
import styled from '@emotion/styled';
import { mainTheme } from '../style/theme';

const SocialContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    height: 100%;
    `;
const SocialBlockContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 80%;
    flex: 0 1 0;
    border: 3px solid ${mainTheme.colors.lightText};
    background-color: ${mainTheme.colors.light};
    color: ${mainTheme.colors.darkText};
    padding: 5px;
    margin: 5px;
    `;
const IconContainer = styled.div`
    flex: 1;
    `;
const LinkContainer = styled.div`
    flex: 1;
    `;
const DescContainer = styled.div`
    flex: 3;
    `;



interface SocialLink {
    label: string;
    path: string;
    icon: string;
    description: string;

} 
interface SocialProps {
    socialLinks: SocialLink[]
}
const SocialBlock = (props:{social: SocialLink}) => {
    const {label, path, icon, description} = props.social;
    return <SocialBlockContainer>
        
        <IconContainer>
            <i className={icon} ></i>
        </IconContainer>
        <LinkContainer>
            <a href={path}>
                {label}
            </a>
        </LinkContainer>
        <DescContainer>
            {description}
        </DescContainer>

    </SocialBlockContainer>
}

export const Social = (props:SocialProps) => {
    const {socialLinks} = props;

    return <SocialContainer>
        {socialLinks.map((social) => (
            <SocialBlock key={social.path} social={social} />
        ))}
    </SocialContainer>
}