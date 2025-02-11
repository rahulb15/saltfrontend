import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormData {
  title: string;
  gender: string;
  fName: string;
  lName: string;
  country: string;
  state: string;
  streetAddress: string;
  addressTwo?: string;
  city: string;
  zip: string;
  phone: string;
  email: string;
  note?: string;
}
const initialState: FormData = {
  fName: "",
  lName: "",
  country: "",
  streetAddress: "",
  addressTwo: "",
  city: "",
  state: "",
  zip: "",
  phone: "",
  email: "",
  note: "",
  title: "",
  gender: "",
};

export const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<Partial<FormData>>) => {
      return { ...state, ...action.payload };
    },
    resetFormData: () => initialState,
  },
});

export const { setFormData, resetFormData } = formDataSlice.actions;

export default formDataSlice.reducer;
