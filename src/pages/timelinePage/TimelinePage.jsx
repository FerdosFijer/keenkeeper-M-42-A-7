import React, { useContext } from "react";
import ListedCallSmsVideo from "../../components/listedCallSmsVideo/ListedCallSmsVideo";
import { FriendContext } from "../../context/FriendsContext";
import call from "../../assets/call.png";
import text from "../../assets/text.png";
import video from "../../assets/video.png";

const TimelinePage = () => {
    
  const { callSmsVideoList } = useContext(FriendContext);

  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold mt-5">Timeline:</h2>
      {callSmsVideoList.map((list, ind) => {
        if (list.action === "call") {
          return (
            <div
              key={ind}
              className="container mx-auto p-4 rounded my-3 flex items-center gap-4 shadow-xl"
            >
              <img
                src={call}
                alt={list.name}
                className="w-14 h-14 rounded-full"
              />
              <div>
                <h2> Call with {list.name}</h2>
                <p>{new Date().toISOString().split("T")[0]}</p>
              </div>
            </div>
          );
        } else if (list.action === "Text") {
          return (
            <div
              key={ind}
              className="container mx-auto p-4 rounded my-3 flex items-center gap-4 shadow-xl"
            >
              <img
                src={text}
                alt={list.name}
                className="w-14 h-14 rounded-full"
              />

              <div>
                <h2> Text with {list.name}</h2>
                <p>{new Date().toISOString().split("T")[0]}</p>
              </div>
            </div>
          );
        } else if (list.action === "Video") {
          return (
            <div
              key={ind}
              className="container mx-auto p-4 rounded my-3 flex items-center gap-4 shadow-xl"
            >
              <img
                src={video}
                alt={list.name}
                className="w-14 h-14 rounded-full"
              />

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
