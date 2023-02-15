import React, {useEffect, useState, useRef} from 'react';
import DOMPurify from 'dompurify'
import Author from '../Author';
import Comment from '../Comment';
import ReplyForm from '../ReplyForm';
import Pagination from '../Pagination';
import axiosInstance from '../../common/axios';
import './style.scss';

function Topic (props) {
    const [comments, setComments] = useState(props.comments || []);
    const [replyComment, setReplyComment] = useState(null);
    const [page, setPage] = useState(props.page);
    const {user, updated_at, id, title, html_content, group} = props;

    const replyFormRef = useRef(null);

    const fetchComments = async () => {
        await axiosInstance.get(`/group/topic/${id}/comments`, {
            params: {
                page: page,
            }
        }).then((res) => {
            if (res.status == 200) {
                if (res.data.r === 0) {
                    setComments(res.data.comments);
                }
                else {
                    alert(res.data.msg);
                }
            }
        })
    }

    useEffect(() => {
        console.log(page);
        fetchComments();
    }, [page]);

    useEffect(() => {
        if (replyComment && replyFormRef.current) {
            replyFormRef.current.querySelector('textarea').focus();
        }
    }, [replyComment]);


    const onReply = (comment) => setReplyComment(comment);

    // get comment id from url query ,active and scroll to it
    const urlParams = new URLSearchParams(window.location.search);
    const commentId = urlParams.get('comment_id');
    useEffect(() => {
        if (commentId) {
            const comment = document.getElementById(`comment-${commentId}`);
            if (comment) {
                comment.scrollIntoView();
                comment.classList.add('highlight');
                setTimeout(() => {
                    comment.classList.remove('highlight');
                }, 1000);
            }
        }
    }, []);

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
            <div className='comments-wrapper'>
                <div className='comments'>
                    {comments.map((comment, index) =>
                        <Comment key={index} {...comment} onReply={onReply} />)}
                </div>
                <div className='pagination'>
                    <Pagination
                        current={page}
                        total={props.total}
                        pageSize={props.page_size}
                        onChange={(page) => setPage(page)}
                    />
                </div>
            </div>
            <div className='reply-form-wrapper'>
                <ReplyForm ref={replyFormRef} replyComment={replyComment} topicId={id} />
            </div>
        </div>
    );
}

export default Topic;
