import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store/store";

export interface FooterState {
  value: string;
}

const initialState: FooterState = { value: "" };

export const footerSlice = createSlice({
  name: 'footer',
  initialState,
  reducers: {
    setComponent:(state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  }
})

export const { setComponent } = footerSlice.actions;

export const selectState = (state: RootState) => state.footer.value

export default footerSlice.reducer;