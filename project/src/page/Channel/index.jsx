import { useParams } from 'react-router-dom';
import { ChannelWrap } from './styled';
import { useSelector } from 'react-redux';

const Channel = () => {
    const { Channel_name } = useParams();
    const { Channel } = useSelector((state) => state.channel);
    console.log(Channel[Channel_name]);
    return (
        <ChannelWrap>
            <h2>Channel {Channel_name}</h2>
        </ChannelWrap>
    );
};

export default Channel;
