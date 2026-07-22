import React, { useContext } from 'react';
import ListedCallSmsVideo from '../../components/listedCallSmsVideo/ListedCallSmsVideo';
import { FriendContext } from '../../context/FriendsContext';

const TimelinePage = () => {

    const { callSmsVideoList} =useContext(FriendContext);
    console.log(callSmsVideoList);

    
    
    
    return (
        <div>
            <h2>Timeline</h2>
            {callSmsVideoList.map((list, ind) => {
      if (list.action === "Call") {
        return (
          <div key={ind} className=" p-4 rounded my-3 flex items-center gap-4 shadow-2xl">
            <img src={list.picture} alt={list.name} className="w-14 h-14 rounded-full" />
            <div>
              <h2> Call with {list.name}</h2>
              <p>{new Date().toISOString().split("T")[0]}</p>
            </div>
          </div>
        );
      } else if (list.action === "Text") {
        return (
          <div key={ind} className="bg-blue-500 p-4 rounded my-3 text-white flex items-center gap-4">
            <img src={list.picture} alt={list.name} className="w-14 h-14 rounded-full"/>

            <div>
              <h2> Text with {list.name}</h2>
              <p>{new Date().toISOString().split("T")[0]}</p>
            </div>
          </div>
        );
      } else if (list.action === "Video") {
        return (
          <div key={ind} className="bg-green-500 p-4 rounded my-3 text-white flex items-center gap-4">
            <img src={list.picture} alt={list.name} className="w-14 h-14 rounded-full" />

            <div>
              <h2> Video call with {list.name}</h2>
              <p>{new Date().toISOString().split("T")[0]}</p>
            </div>
          </div>
        );
      }
    })}
        </div>
    );
};

export default TimelinePage;