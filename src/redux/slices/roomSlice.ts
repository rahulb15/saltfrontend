// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// // import {IHotel} from '../models'

// export interface HotelState {
//   rooms: any[];
// }

// const initialState: HotelState = {
//   rooms: [],
// };
// export const roomSlice = createSlice({
//   name: "rooms",
//   initialState,
//   reducers: {
//     setRooms: (state, action: PayloadAction<{ rooms: any[] }>) => {
//       state.rooms = action.payload.rooms;
//     },
//   },
// });

// export const { setRooms } = roomSlice.actions;

// export default roomSlice.reducer;


// redux/slices/roomSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RoomState {
  rooms: any[];
  selectedRoom: any | null;
  lastUpdated: number | null;
}

const initialState: RoomState = {
  rooms: [],
  selectedRoom: null,
  lastUpdated: null
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setRooms: (state, action: PayloadAction<{ rooms: any[] }>) => {
      state.rooms = action.payload.rooms;
      state.lastUpdated = Date.now();
    },
    setSelectedRoom: (state, action) => {
      state.selectedRoom = action.payload;
    },
    clearRooms: (state) => {
      state.rooms = [];
      state.selectedRoom = null;
      state.lastUpdated = null;
    },
    updateRoomData: (state, action: PayloadAction<{ roomId: string; data: any }>) => {
      const index = state.rooms.findIndex(room => room._id === action.payload.roomId);
      if (index !== -1) {
        state.rooms[index] = { ...state.rooms[index], ...action.payload.data };
      }
    }
  }
});

export const { setRooms, setSelectedRoom, clearRooms, updateRoomData } = roomSlice.actions;
export default roomSlice.reducer;
