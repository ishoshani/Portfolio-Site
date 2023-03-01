import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
export interface markdownBlockProps {
    stringPath? : string;
    mdString? : string;
}
export const MarkdownBlock = (props:markdownBlockProps) => {
    const [markdown, setMarkdown] = useState("");
    
    useEffect(() => {
        if (props.mdString) {
            setMarkdown(props.mdString);
        }else if (props.stringPath){
            fetch(props.stringPath)
            .then((response) => response.text())
            .then((text) => {
                setMarkdown(text);
            });
        }
    }, [props.stringPath, props.mdString]);
    return <div>
        <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
}