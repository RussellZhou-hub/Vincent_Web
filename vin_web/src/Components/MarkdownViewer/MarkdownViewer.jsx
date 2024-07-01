import React,{useState, useEffect} from 'react' 
import './MarkdownViewer.css'
import Axios from "axios";
//import markdownFilePath from './test.md';
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import Highlight, { Prism } from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {cpp} from 'react-syntax-highlighter/dist/esm/styles/prism';
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const MarkdownViewer = ({ markdownFilePath }) => {
    const [markdownContent, setMarkdownContent] = useState('');

    const codeString = `function helloWorld() {
        console.log('Hello, world!');
            console.log('Hello, world!');
    }`;

    const cpp_codeString = `int helloWorld() {
                return 0;
    }`;
  
    useEffect(() => {
      const fetchMarkdownContent = async () => {
        try {
          const response = await fetch(markdownFilePath);
          if (!response.ok) {
            throw new Error('Failed to fetch markdown content');
          }
          const markdownText = await response.text();
          setMarkdownContent(markdownText);
        } catch (error) {
          console.error('Error fetching markdown:', error);
        }
      };
  
      fetchMarkdownContent();
    }, [markdownFilePath]);
  
    return (
        
      <div className='markdown-container'>
        <ReactMarkdown Plugins={[gfm]} urlTransform={ uri => uri.startsWith('http') ? uri : `${process.env.PUBLIC_URL} ${uri}`}
            components={
                {
                    code({node,inline,className,children, ...props}){
                        const match=/language-(\w+)/.exec(className || '')
                        return !inline && match ?(
                            <Highlight language={match[1]} 
                                    preTag="div"
                                    showLineNumbers={true}
                                    showInlineLineNumbers={false} /* line line numbers at front */
                                    wrapLineNumbers={false}
                                    children={children}
                                    style={vs2015}>
                                    {cpp_codeString}
                                </Highlight>
                        ):(
                            <Highlight language="cpp"
                                    preTag="div"
                                    showLineNumbers={true}
                                    showInlineLineNumbers={false} /* line line numbers at front */
                                    wrapLineNumbers={false}
                                    children={children}
                                    style={vs2015}>
                                    {cpp_codeString}
                                </Highlight>
                        )

                    }
                }
            }
        >{markdownContent}</ReactMarkdown>
      </div>
    );
  };
  
  export default MarkdownViewer;