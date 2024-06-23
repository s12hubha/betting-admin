import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import authReducer from "../../shared/slices/auth"
import modalSliceReducer from '../../shared/slices/common'
import gameSliceReducer from '../../shared/slices/games'
import ColorAndNumberGameReducer from "../../shared/slices/colorGame"
// ...
const store = configureStore({
  reducer: {
    auth:authReducer,
    modal:modalSliceReducer,
    game:gameSliceReducer,
    ColorAndNumberGame:ColorAndNumberGameReducer
  },
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store