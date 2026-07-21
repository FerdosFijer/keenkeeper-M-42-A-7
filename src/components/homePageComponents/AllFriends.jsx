import React, { use } from 'react';
import FriendCard from '../ui/FriendCard';

const friendPromise = fetch("./friendData.json").then((res) => res.json());

const AllFriends = () => {

    const friends = use(friendPromise);

    return (
        <div className="my-12 container mx-auto ">
            <h2 className="font-bold text-3xl mb-6">Your Friends </h2>

            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                {
                    friends.map((friend, id) => {
                        return( <FriendCard key={id} friend={friend}></FriendCard>)
                    })
                }
            </div>
        
        </div>
    );
};

export default AllFriends;