import styled from 'styled-components';
import { media } from '../../style/media';

export const WatchWrap = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 2% 3.5%;
    display: flex;
    > .video-wrap {
        position: relative;
        width: 70%;
        margin: 0 2rem 0 0;
        .videoInner {
            width: 100%;
            height: 0;
            padding-bottom: 56.25%;
            position: relative;
            border-radius: 2rem;
            overflow: hidden;
        }
        iframe,
        video {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border: none;
        }
    }
    @media ${media.mobile} {
        display: block;
        padding: 0;
        margin-top: -0.9rem;
        .video-wrap {
            width: 100%;
            .videoInner {
                border-radius: 0;
            }
        }
    }
`;

export const WatchListWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    .sub_video_wrap {
        width: 100%;
    }
    .video-loder {
        display: flex;
        width: 100%;
        .video-wrap {
            max-width: 22rem;
            overflow: hidden;
            padding-bottom: 24%;
        }
        .text-wrap {
            width: 100%;
            .channel-logo {
                display: none;
            }
            .movie_info {
                margin-left: 1rem;
                .movie_title {
                    font-size: 1.4rem;
                    word-break: break-all;
                }
                .mobile {
                    display: block;
                }
                .channel_name,
                .movie_like_count {
                    font-size: 1.2rem;
                }
            }
        }
    }
    @media ${media.mobile} {
        display: block;
        width: 100%;
        .sub_video_wrap {
            .video-loder {
                display: flex;
                width: 100%;
                flex-direction: column;
                margin-bottom: 2rem;
                .video-wrap {
                    border-radius: 0;
                    max-width: 100%;
                    padding-bottom: 55%;
                }
                .text-wrap {
                    .movie_info {
                        .movie_title {
                            font-size: 2.4rem;
                        }
                        .mobile {
                            display: flex;
                        }
                    }
                }
            }
        }
    }
    @media ${media.tablet} {
        display: block;
        width: 100%;
        .movie_title {
            display: block;
        }
        .video-loder {
            .video-wrap {
                border-radius: 2rem;
                .movie_title {
                }
            }
        }
        .text-wrap {
        }
        .save-list {
            right: -100%;
        }
    }
`;
