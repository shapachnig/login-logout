import {configureStore} from "@reduxjs/toolkit";
import token from "../features/slices/tokenSlice.ts";
import user from "../features/slices/userSlice.ts";
import {UserProfile} from "../components/utils/types";

const preloadedState = JSON.parse(localStorage.getItem("state") || '{}') as
    {user: UserProfile, token: string};

export const store = configureStore({
    reducer: {token, user},
    preloadedState: preloadedState
})

store.subscribe(()=>localStorage.setItem("state", JSON.stringify(store.getState())));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch