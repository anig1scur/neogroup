import React, {useEffect, useState, useRef} from 'react';
import DOMPurify from 'dompurify'
import Author from '../Author';
import Comment from '../Comment';
import ReplyForm from '../ReplyForm';
import './style.scss';

function Topic (props) {
    const [comments, setComments] = useState(props.comments || []);
    const [replyComment, setReplyComment] = useState(null);
    const {user, updated_at, id, created_at, title, html_content, group} = props;

    const replyFormRef = useRef(null);

    useEffect(() => {
        console.log(replyFormRef.current);
        if (replyComment && replyFormRef.current) {
            // focus on textarea
            replyFormRef.current.querySelector('textarea').focus();
        }
        return () => {
        };
    }, [replyComment]);

    const onReply = (comment) => {
        console.log('onReply', comment)
        setReplyComment(comment);
    };

    return (
        <div className='topic'>
            <div className='title'>
                {title}
            </div>
            <Author {...user} showNote={true} authored_at={updated_at} />
            <div
                className='topic-content'
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(html_content)
                }}
            />
            <div className='divide'></div>
            <div className='comments'>
                {comments.map((comment, index) =>
                    <Comment key={index} {...comment} onReply={onReply} />)}
            </div>
            <div className='reply-form-wrapper'>
                <ReplyForm ref={replyFormRef} replyComment={replyComment} topicId={id} />
            </div>
        </div>
    );
}

export default Topic;
