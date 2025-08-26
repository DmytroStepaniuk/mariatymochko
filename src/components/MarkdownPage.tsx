import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownPageProps {
  fileName: string;
}

const MarkdownPage: React.FC<MarkdownPageProps> = ({ fileName }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/content/${fileName}`)
      .then((res) => res.text())
      .then(setContent);
  }, [fileName]);

  return (
    <div className="markdown-body">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownPage;
