import React from 'react';
import './ProjectStar.css'
import Axios from "axios";
import ReactMarkdown from 'react-markdown'
import Path from '../MarkdownViewer/project_star.md';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

import MarkdownViewer from '../MarkdownViewer/MarkdownViewer';
import  "./ProjectStar.css";

//<VideoPlayer videoName="sample-5s.mp4" videoWidth="960" videoHeight="540"/>

const Project_star = () => {
    return <div>
            <h2> --</h2>
            <h2>Project : Star</h2>
            <div className='splash_line'>
—————————————————————————————————————————————————————————————
        </div>
        <div className='md-body'>
            
            <MarkdownViewer markdownFilePath={Path}/>

            <div width='100%'>
            <img src="img/img_cover.png" width="50%"></img>
            </div>
            <div>图1:实机运行画面</div>
            <div width='100%'>
            <img src="img/img_head.png" width="50%"></img>
            </div>
            <div>图2:Blender定稿画面</div>
            

            
        </div>
        </div>
};

export default Project_star;