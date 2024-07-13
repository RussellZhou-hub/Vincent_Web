import React from 'react';
import './MayaRig_V2.css'
import Axios from "axios";
import ReactMarkdown from 'react-markdown'
import Path from '../MarkdownViewer/MayaRig_V2.md';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

import MarkdownViewer from '../MarkdownViewer/MarkdownViewer';
import  "./MayaRig_V2.css";

const MayaRig_V2 = () => {
    return <div>
            <h2> --</h2>
            <h2>Project : Star</h2>
            <div>
            -------------------------------------------------------------------------------------------------
        </div>
        <div className='md-body'>
            <MarkdownViewer markdownFilePath={Path}/>
        </div>
        </div>
};

export default MayaRig_V2;