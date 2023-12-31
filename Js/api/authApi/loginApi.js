import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiManager } from '../ApiManager';
import { loginEndpoint } from '../../Constants/SettingCardInfo/Apiurl';
import { otpEndpoint } from '../../Constants/SettingCardInfo/Apiurl';




// - - - - - Verify User API - - - - - //
export const userVerifyApi = createAsyncThunk(loginEndpoint,
    async (data, {dispatch,rejectWithValue}) => {
        const params = {
            ...data
        }
        const request = {
            method: "post",
            url: loginEndpoint,
            body: {...data},
        };
        try{
            const res = await dispatch(ApiManager({},request))
            // const res = await ApiManager({}, request)
            console.log("esresfdgfews",res)
            return res
        } catch  (error){
            const data = {
                status : error.status,
                code: error.data.Code,
                message: error.data.Msg
            }
            return await rejectWithValue(data)
        }   
})
// - - - - - Login User API - - - - - //
export const otpVerifyApi = createAsyncThunk(otpEndpoint,
    async (data, {dispatch,rejectWithValue}) => {
        const params = {
            ...data
        }
        const request = {
            method: "post",
            url:otpEndpoint,
            body: {...data},
        };

        const addHeaders = {
            "x-app-id" : 4,
        }
        try{
            const res = await dispatch(ApiManager({}, request));
            return res;
        } catch(error){
            console.log("errorororor", error)
            const data = {
                status : error.status,
                code: error.data.Code,
                message: error.data.Msg
            }
            return rejectWithValue(data)
        }   
})