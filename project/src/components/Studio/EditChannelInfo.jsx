import { useDispatch, useSelector } from 'react-redux';
import { EditChannelInfoWrap } from './styled';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../../ui/Button';

const EditChannelInfo = ({ setEdit }) => {
    const { User_ID } = useParams();
    const { Channel } = useSelector((state) => state.channel);
    const { isAuth, isLoginUser } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const thisChannel = Object.values(Channel).find(
        (channel) => channel.channel_id === Number(User_ID)
    );
    const [channel, setChannel] = useState({
        channel_name: thisChannel.channel_name,
        channel_banner: thisChannel.channel_banner,
        channel_image: thisChannel.channel_image,
        channel_introduction: thisChannel.channel_introduction,
    });

    const changeInput = (e) => {
        const { name, value } = e.target;
        setChannel({
            ...channel,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };
    if (thisChannel)
        return (
            <EditChannelInfoWrap>
                <form className='inner' onSubmit={onSubmit}>
                    <p>
                        <label htmlFor='channel_name'>채널명</label>
                        <input
                            type='text'
                            name='channel_name'
                            id='channel_name'
                            value={channel.channel_name}
                            onChange={changeInput}
                        />
                    </p>
                    <p>
                        <label htmlFor='channel_introduction'>채널 설명</label>
                        <input
                            type='text'
                            name='channel_introduction'
                            id='channel_introduction'
                            value={channel.channel_introduction}
                            onChange={changeInput}
                        />
                    </p>
                    <p>
                        <input type='file' name='channel_banner' id='channel_banner' />
                        <img src={channel.channel_banner} alt='channel_banner' />
                    </p>
                    <p>
                        <input type='file' name='channel_image' id='channel_image' />
                        <img src={channel.channel_image} alt='channel_image' />
                    </p>
                    <p className='btn-wrap'>
                        <Button type='submit'>업로드</Button>
                        <Button onClick={() => setEdit(false)}>취소</Button>
                    </p>
                </form>
            </EditChannelInfoWrap>
        );
};

export default EditChannelInfo;
