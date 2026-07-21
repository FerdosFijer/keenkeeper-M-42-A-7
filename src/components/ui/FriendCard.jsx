import React from "react";
import { NavLink } from "react-router";

const FriendCard = ({ friend }) => {
  return (
    <NavLink to={`/friednDetails/${friend.id}`} className="card bg-base-100 shadow-sm">
      <div className="card bg-base-100  shadow-sm">
        <figure className="rounded-full w-40 h-40 mx-auto mt-4">
          <img
            src={friend.picture}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{friend.name}</h2>
          <p> {friend.days_since_contact}d ago</p>
          
            <div className="flex gap-2 ">
                {
                    friend.tags.map((tag, ind)=>{
                        return (<button key={ind} className="btn btn-accent btn-sm rounded-full px-6">{tag}</button>)
                    })
                }
            </div>
            <button className="btn btn-warning btn-sm rounded-full px-6">{friend.status}</button>
        
        </div>
      </div>
    </NavLink>
  );
};

export default FriendCard;
