import React, {useEffect} from 'react';
import './style.scss';
import axiosInstance from '../../common/axios';
import Quote from '../Quote';


export const SendIcon = (props) => {
    return <svg {...props} width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>send</title>
        <g id="send-Regular">
            <path id="send-Regular-2" data-name="send-Regular" class="cls-1" d="M20.927,3.073a2.782,2.782,0,0,0-2.663-.738L5.151,5.614A3.83,3.83,0,0,0,5.2,13.058l4.646,1.093L10.942,18.8a3.773,3.773,0,0,0,3.7,2.953h.028a3.773,3.773,0,0,0,3.714-2.9L21.665,5.735A2.781,2.781,0,0,0,20.927,3.073Zm-.718,2.3L16.931,18.484a2.3,2.3,0,0,1-2.277,1.766,2.274,2.274,0,0,1-2.252-1.8l-1.1-4.69L15.53,9.53a.75.75,0,0,0-1.06-1.06L10.237,12.7l-4.69-1.1a2.33,2.33,0,0,1-.031-4.529L18.628,3.791a1.313,1.313,0,0,1,.321-.04,1.3,1.3,0,0,1,1.26,1.621Z" />
        </g>
    </svg>
}


const ReplyForm = React.forwardRef((props, ref) => {
    const {replyComment, topicId} = props;
    const [sending, setSending] = React.useState(false);

    const postComment = async (params) => {
        setSending(true);
        await axiosInstance.post(`/group/topic/${topicId}/`, params,
        ).then((res) => {
            setSending(false);
            if (res.status == 200) {
                if (res.data.r === 0) {
                    location.reload();
                }
                else {
                    alert(res.data.msg);
                }
            }
            else {
                alert('出错啦，请稍后再试或联系管理员');
            }
        })
    }

    const onSubmit = () => {
        let content = ref.current.querySelector('textarea').value;
        if (!content) {
            alert('请输入一段文字再提交吧');
            return
        }
        postComment({
            id: topicId,
            content: content,
            comment_reply: replyComment?.id,
            share_to_mastodon: false
        });
    }

    return (
        <div className='reply-form' ref={ref}>
            {
                replyComment && <Quote comment={replyComment} />
            }
            <div className='reply-content'>
                <textarea placeholder='Neogrp 欢迎文明、友善的交流。' />
            </div>
            <div className='reply-action'>
                <div disabled={sending} className='submit' onClick={onSubmit} ><SendIcon /></div>
            </div>
        </div>
    );
});

export default ReplyForm;
