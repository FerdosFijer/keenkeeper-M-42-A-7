import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import FriendDetails from "../pages/friendDetails/FriendDetails";
import TimelinePage from "../pages/timelinePage/TimelinePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
        {
            index:true,
            element: <HomePage/>
        },
        {
            path:"/timeline",
            Component:TimelinePage,
        },
        {
            path:"/friednDetails/:id",
            loader:() => fetch('/friendData.json'),
            Component: FriendDetails,
        },
    ],
  },
]); 