//  we then import the createslice functon of rtk 
import { createSlice } from "@reduxjs/toolkit";

// we then import the asyncthunk of the fetch jobs 
import {fetchJobs} from './jobFxn'

//  the we create a slice of  the jobs and define the initial state
const jobSlice = createSlice({
    name:'jobs',
    initialState:{
        jobs:[],
        loading:false,
        error:null
    },
reducers:{},
extraReducers:builder=>{
    builder.addCase(fetchJobs.pending, (state)=>{
        state.loading=true
    })
    builder.addCase(fetchJobs.fulfilled, (state,action)=>{
        state.jobs=action.payload
        state.loading=false
    })
    builder.addCase(fetchJobs.rejected, (state,action)=>{
        state.loading=false
        state.error=action.error.message
    })
}
})


export default jobSlice.reducer