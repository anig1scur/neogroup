import React from 'react';
import Author from '../Author';
import Like from '../Like';
import Quote from '../Quote';
import './style.scss';

export const ReplyIcon = (props) => {
    return <svg {...props} width="24px" height="24px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-reply-fill">
        <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
    </svg>
}

function Comment (props) {
    const {id, user, created_at, content, liked, like_count, onReply, comment_reply} = props;
    console.log(comment_reply);

    return (
        <div className='comment'>
            <Author {...user} authored_at={created_at} />
            <div className='comment-content'>
                {
                    comment_reply &&
                     <Quote comment={comment_reply} />
                }
                <div className='comment-text'>
                    {content}
                </div>
            </div>
            <div className='comment-action'>
                <Like targetId={id} liked={liked} likeCount={like_count} />
                <div className='reply' onClick={() => onReply(props)}>
                    <ReplyIcon />
                </div>
            </div>
        </div>
    );
}

export default Comment;
