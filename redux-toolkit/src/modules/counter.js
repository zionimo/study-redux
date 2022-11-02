import { createSlice } from "@reduxjs/toolkit";

// createSlice에 초기값과 reducer 값을 넣는다
export const counter = createSlice({
  name: "counter",
  // 초기값
  initialState: {
    value:0
  },
  // 실행할 ruducer => 객체형태로 익명함수를 할당해서 사용
  reducers:{
    increment : (state) => {
      // toolkit을 이용하면 상태보존이 되기 때문에 
      // 바로 값에 접근해서 수정가능
      state.value += 1
    },
    incrementByAmount : 
  }
