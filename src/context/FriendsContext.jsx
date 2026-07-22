import React, { createContext, useState } from "react";

export const FriendContext = createContext();

const FriendsContext = ({ children }) => {
  const [callSmsVideoList, setCallSmsVideoList] = useState([]);

  const handleCallSmsVideo = (singleFriend) => {
    // console.log(singleFriend);
    setCallSmsVideoList([...callSmsVideoList, singleFriend]);
  };

  const data = {handleCallSmsVideo, callSmsVideoList, setCallSmsVideoList};

  return (
    <div>
      <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
    </div>
  );
};

export default FriendsContext;
