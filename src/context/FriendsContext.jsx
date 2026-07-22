import React, { createContext, useState } from "react";

export const FriendContext = createContext();

const FriendsContext = ({ children }) => {
  const [callSmsVideoList, setCallSmsVideoList] = useState([]);

  const handleCallSmsVideo = (singleFriend, action) => {
    /* console.log(singleFriend); */
    const newItem = { ...singleFriend, action}
    

    setCallSmsVideoList([...callSmsVideoList, newItem]);
    /* console.log(singleFriend, action, newItem); */
  };

  const data = {handleCallSmsVideo, callSmsVideoList, setCallSmsVideoList};

  return (
    <div>
      <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
    </div>
  );
};

export default FriendsContext;
