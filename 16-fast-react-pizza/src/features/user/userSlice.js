import { createSlice } from '@reduxjs/toolkit';

// function getPosition() {
//   return new Promise(function(resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }
//
// async function fetchAddress() {
//   // 1) We get the user's geolocation position
//   const positionObj = await getPosition();
//   const position = {
//     latitude:  positionObj.coords.latitude,
//     longitude: positionObj.coords.longitude
//   };
//
//   // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the
//   const addressObj = await getAddress(position);
//   const address =
//           `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;  // 3)
//                                                                                                                //
// Then // we return { position, address }; }

const initialState = {
  userName: '123'
};

const userSlice = createSlice(
  {
    name:     'userSlice',
    initialState,
    reducers: {
      updateName(state, action) {
        state.userName = action.payload;
      }
    }
  });

export const { updateName } = userSlice.actions;
export default userSlice.reducer;


