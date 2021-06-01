// import React from "react";
// import RoomsFilter from "./RoomFilter";
// import RoomsList from "./RoomList";
// import {withRoomConsumer} from "../context";
// import Loading from "./Loading";

// function RoomContainer({context}){
//     const {loading,sortedRooms,rooms}=context;

// }

// export default withRoomConsumer(RoomContainer)





import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";
import {RoomConsumer} from '../context';
import Loading from "./Loading";

export default function RoomContainer() {
   return (
       
       <div>
           Hello From Roooms Container
           <RoomsFilter></RoomsFilter>
           <RoomsList></RoomsList>
       </div>
   );

}
