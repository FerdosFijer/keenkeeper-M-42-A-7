import { useContext, useState } from "react";
import { BsChatLeftText } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { LuBellRing } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { VscArchive } from "react-icons/vsc";
import { NavLink, useLoaderData, useParams } from "react-router";
import { FriendContext } from "../../context/FriendsContext";

const FriendDetails = () => {
  const { id } = useParams();
  const friends = useLoaderData();
  const singleFriend = friends.find((friend) => friend.id == id);

  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    bio,
    goal,
    next_due_date,
  } = singleFriend;

    const {handleCallSmsVideo, callSmsVideoList} =useContext(FriendContext);
    /* console.log(handleCallSmsVideo, callSmsVideoList, "friendContext1"); */

 

  return (
    <div className="container mx-auto my-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="space-y-4">
        <NavLink className="card bg-base-100 shadow-sm">
          <div className="card bg-base-100 shadow-sm">
            <figure className="rounded-full w-20 h-20 mx-auto mt-4">
              <img
                src={picture}
                alt={name}
                className="rounded-full w-full h-full object-cover"
              />
            </figure>

            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>

              <div className="flex flex-wrap justify-center gap-2">
                <button className="btn btn-warning btn-sm rounded-full px-6">
                  {status}
                </button>

                {singleFriend.tags.map((tag, ind) => (
                  <button
                    key={ind}
                    className="btn btn-accent btn-sm rounded-full px-6"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <p className="font-semibold italic">"{bio}"</p>

              <p>Preferred: {email}</p>
            </div>
          </div>
        </NavLink>

        <div className="py-3 bg-base-100 shadow-sm">
          <div className="flex justify-center items-center gap-2">
            <LuBellRing />
            <p>Snooze 2 Weeks</p>
          </div>
        </div>

        <div className="py-3 bg-base-100 shadow-sm">
          <div className="flex justify-center items-center gap-2">
            <VscArchive />
            <p>Archive</p>
          </div>
        </div>

        <div className="py-3 bg-base-100 shadow-sm">
          <div className=" flex justify-center items-center gap-2 text-red-500">
            <RiDeleteBin6Line />
            <p>Delete</p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body text-center">
              <h2 className="font-bold text-3xl">{days_since_contact}</h2>
              <p>Days Since Contact</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm">
            <div className="card-body text-center">
              <h2 className="font-bold text-3xl">{goal}</h2>
              <p>Goal (Days)</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm">
            <div className="card-body text-center">
              <h2 className="font-bold text-3xl">{next_due_date}</h2>
              <p>Next Due</p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Relationship Goal</h2>

              <button className="btn btn-sm">Edit</button>
            </div>

            <p>
              Connect every <span className="font-bold">{goal} days</span>
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="text-xl font-semibold mb-3">Quick Check-In</h2>

            <div className="grid grid-cols-3 gap-4">
              <div
                className="card border"
                onClick={() => handleCallSmsVideo(singleFriend, "call")}
              >
                <div className="card-body items-center">
                  <FiPhoneCall className="text-3xl" />
                  <p>Call</p>
                </div>
              </div>

              <div
                className="card border"
                onClick={() => handleCallSmsVideo(singleFriend, "Text")}
              >
                <div className="card-body items-center">
                  <BsChatLeftText className="text-3xl" />
                  <p>Text</p>
                </div>
              </div>

              <div
                className="card border"
                onClick={() => handleCallSmsVideo(singleFriend, "Video")}
              >
                <div className="card-body items-center">
                  <IoVideocamOutline className="text-3xl" />
                  <p>Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
