import { BelowWrap } from './styled';
import { LuMoreHorizontal } from 'react-icons/lu';
import BelowDetail from './BelowDetail';
import { RiFlagLine } from 'react-icons/ri';
import { useState } from 'react';
import Comment from './Comment';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddNewSubscription, DelSubscription, IsAddList } from '../../store/modules/authSlice';

const Below = ({
    title,
    channelName,
    channelSubscribers,
    movieLikeCount,
    channelImage,
    movieBody,
    movie_date,
    channelId,
    moviesComment,
    movie_id,
    channel_name,
}) => {
    const [showReport, setShowReport] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisLiked, setIsDisLiked] = useState(false);
    const dispatch = useDispatch();
    const { isLoginUser } = useSelector((state) => state.auth); // 로그인된 사용자 정보 가져오기
    const { Channel_name } = useParams();

    // 현재 채널이 구독 중인지 확인
    const isSubscribed = isLoginUser.Subscription_Id.includes(channelId);

    const handleReportClick = () => {
        setShowReport((prev) => !prev);
    };

    const handleSubscribeClick = () => {
        // 구독 상태에 따라서 처리
        if (isSubscribed) {
            // 구독 중이면 구독 취소
            dispatch(DelSubscription({ user_id: isLoginUser.user_id, channel_id: channelId }));
        } else {
            // 구독 안 되어 있으면 구독 추가
            dispatch(
                AddNewSubscription({
                    user_id: isLoginUser.user_id,
                    channel_id: channelId,
                })
            );
        }
    };

    const handleLikeClick = () => {
        if (isLiked) {
            setIsLiked(false);
        } else {
            setIsLiked(true);
            setIsDisLiked(false);
            dispatch(IsAddList({ type: 'like_Movie_List', movie_id }));
        }
    };

    const handleDisLikeClick = () => {
        if (isDisLiked) {
            setIsDisLiked(false);
        } else {
            setIsDisLiked(true);
            setIsLiked(false);
        }
    };

    const navigate = useNavigate();

    return (
        <BelowWrap>
            <h2 className='title'>{title}</h2>
            <div className='top'>
                <div className='channel'>
                    <div onClick={() => navigate(`/channel/${channel_name}`)}>
                        <img className='channelImg' src={channelImage} alt='' />
                    </div>
                    <div
                        className='channel_detail'
                        onClick={() => navigate(`/channel/${channel_name}`)}
                    >
                        <h2 className='channel_name'>{channelName}</h2>
                        <p className='channel_subscribers'>{channelSubscribers}명</p>
                    </div>
                    <div className='subscribers'>
                        <button
                            className={`subscribers-btn ${isSubscribed ? 'on' : ''}`}
                            onClick={handleSubscribeClick}
                        >
                            {isSubscribed ? (
                                <>
                                    <img
                                        src='https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/Notification.svg'
                                        alt='구독 중'
                                        className='img'
                                    />
                                    <span className='BelowBtn_comment comment'>구독중</span>
                                </>
                            ) : (
                                '구독'
                            )}
                        </button>
                    </div>
                </div>

                <div className='action'>
                    <span className='Like'>
                        <button className='BelowBtn like' onClick={handleLikeClick}>
                            <img
                                className='img'
                                src={
                                    isLiked
                                        ? 'https://raw.githubusercontent.com/React-Project-Team1/data-center/23eefc8c9a7f5aebbc05941d76cabae0ea0fca14/Icon/disLike_black.svg'
                                        : 'https://raw.githubusercontent.com/React-Project-Team1/data-center/ee727f8dfb7bcd0c51e97b02fc6c584acdb7cd2f/Icon/like.svg.svg'
                                }
                                alt=''
                            />
                            <span className='BelowBtn_comment'>{movieLikeCount}</span>
                        </button>
                        <button className='BelowBtn' onClick={handleDisLikeClick}>
                            <img
                                className='img'
                                src={
                                    isDisLiked
                                        ? 'https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/DisLike_black.svg'
                                        : 'https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/dislike.svg.svg'
                                }
                                alt=''
                            />
                        </button>
                    </span>

                    <button className='BelowBtn'>
                        <img
                            className='img'
                            src='https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/save2.svg.svg'
                            alt=''
                        />
                        <span className='BelowBtn_comment'>오프라인 저장</span>
                    </button>

                    <button className='BelowBtn'>
                        <img
                            className='img'
                            src='https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/save.svg.svg'
                            alt=''
                        />
                        <span className='BelowBtn_comment'>저장</span>
                    </button>
                    <button className='BelowBtn' onClick={handleReportClick}>
                        <LuMoreHorizontal className='icons' />
                    </button>
                    {showReport && (
                        <div className='report-text'>
                            <RiFlagLine /> 신고
                        </div>
                    )}
                </div>
            </div>
            <BelowDetail
                movieBody={movieBody}
                channelName={channelName}
                movie_date={movie_date}
                movieLikeCount={movieLikeCount}
                channelSubscribers={channelSubscribers}
                channelImage={channelImage}
                channel_name={channel_name}
            />
            <Comment moviesComment={moviesComment} movie_id={movie_id} />
        </BelowWrap>
    );
};

export default Below;
