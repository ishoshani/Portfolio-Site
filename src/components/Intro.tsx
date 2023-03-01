import React, { useState } from 'react';
import { MarkdownBlock } from './markdownBlock';
import styled from '@emotion/styled';
import { mainTheme } from '../style/theme';
const IntroContainer = styled.div`
    display: flex;
    color: ${mainTheme.colors.lightText};
    max-width: 80%;
    `;

export const Intro = () => {
    const introPath = require('../resources/intro.md');
    return <IntroContainer>
        <MarkdownBlock stringPath={introPath} />
    </IntroContainer>
}