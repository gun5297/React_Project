import styled from 'styled-components';
import { media } from '../../style/media';
export const SubscribersBtnWrap = styled.div`
    display: flex;
    button {
        /* 11/13 오후 김혜림 부분 수정  */
        max-height: 4rem;
    }
    .subscribers-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        /* 11/13 오후 김혜림 부분 추가 */
        white-space: nowrap;
        img {
            width: 2.4rem;
            margin-right: 0.4rem;
        }
    }
    .not-subscribers-btn {
        color: #fff;
        background-color: #212121;
        &:hover {
            background-color: #424242;
        }
    }
    /* 11-18 김신영 추가 */
    .channel-btn,
    .video-btn {
        min-width: 6.1vw;
        letter-spacing: -0.1rem;
    }
    .channel-btn {
        margin-right: 1rem;
    }
    /* 11/13 오후 김혜림 부분 추가 */
    @media ${media.mobile} {
        .subscribers-btn {
            .img {
                width: 35%;
            }
        }
        /* 11-18 김신영 추가 */
        .channel-btn,
        .video-btn {
            width: 20vw;
            font-size: 90%;
        }
    }
`;
