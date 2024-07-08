import React from 'react';
import './ProjectStar.css'
import Axios from "axios";
import ReactMarkdown from 'react-markdown'
import Path from '../MarkdownViewer/project_star.md';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

import MarkdownViewer from '../MarkdownViewer/MarkdownViewer';
import  "./ProjectStar.css";

const Project_star = () => {
    return <div>
            <h2> --</h2>
            <h2>Project : Star</h2>
            <div>
            -------------------------------------------------------------------------------------------------
        </div>
        <div className='md-body'>
            <VideoPlayer videoName="sample-5s.mp4"/>
            <MarkdownViewer markdownFilePath={Path}/>
        </div>
        </div>
};

export default Project_star;