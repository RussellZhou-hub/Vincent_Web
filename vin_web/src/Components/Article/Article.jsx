import React,{useState} from 'react' 
import '../LoginSignup/LoginSignup.css'
import './Article.css'
import Axios from "axios";
import ReactMarkdown from 'react-markdown'
import Path from '../MarkdownViewer/test.md';

import MarkdownViewer from '../MarkdownViewer/MarkdownViewer';

const Article = () => {
    return <div>
        <h2>Article Page</h2>

        <div>
            -------------------------------------------------------------------------------------------------
        </div>
        <div className='md-body'>
            <MarkdownViewer markdownFilePath={Path}/>
        </div>
        
    </div>
};

export default Article;