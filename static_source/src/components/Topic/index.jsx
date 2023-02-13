import React, {useEffect, useState} from 'react';
import DOMPurify from 'dompurify'
import Author from '../Author';
import Comment from '../Comment';
import './style.scss';

function Topic (props) {
    const [comments, setComments] = useState(props.comments || []);
    const {user, updated_at, created_at, title, html_content, group} = props;

    useEffect(() => {
        console.log('Topic mounted');
        return () => {
            console.log('Topic unmounted');
        };
    }, []);

    console.log(comments);

    return (
        <div className='topic'>
            <div className='title'>
                {title}
            </div>
            <Author {...user} authored_at={updated_at} />
            <div
                className='content'
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(html_content)
                }}
            />
            <div className='divide'></div>
            <div className='comments'>
                {comments.map((comment, index) => {
                    return <Comment key={index} {...comment} />;
                })}
            </div>

        </div>
    );
}

export default Topic;
