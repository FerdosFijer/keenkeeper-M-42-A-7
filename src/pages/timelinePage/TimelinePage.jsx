import React, { useContext } from 'react';
import ListedCallSmsVideo from '../../components/listedCallSmsVideo/ListedCallSmsVideo';
import { FriendContext } from '../../context/FriendsContext';

const TimelinePage = () => {

    const { callSmsVideoList} =useContext(FriendContext);
    console.log(callSmsVideoList);
    
       

    return (
        <div>
            <p>Timeline</p>
            <ListedCallSmsVideo/>
            <p>{callSmsVideoList.map(list =>( <p>{list.name}</p>) )}</p>
        </div>
    );
};

export default TimelinePage;