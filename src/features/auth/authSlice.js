import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = import.meta.env.VITE_SERVER_URL;

const initialState = {
  user: {
    name: JSON.parse(localStorage.getItem("user"))?.fullName || "",
    email: JSON.parse(localStorage.getItem("user"))?.email || "",
  },

  signIn: {
    isSuccess: false,
    isLoading: false,
    isError: false,
    errorMessage: "",
  },
  signUp: {
    isSuccess: false,
    isLoading: false,
    isError: false,
    errorMessage: "",
  },
};

// --- Sign in functionality ---
export const signInHandler = createAsyncThunk(
  "auth/signIn",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/sign-in`, data);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue("Something went wrong. Please try again.");
      }
    }
  }
);

// --- Sign Up functionality ---
export const signUpHandler = createAsyncThunk(
  "auth/signUp",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/sign-up`, data);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue("Something went wrong. Please try again.");
      }
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { fullName, email } = action.payload;
      state.user.name = fullName;
      state.user.email = email;
    },

    resetSignInState: (state) => {
      state.signIn.isSuccess = false;
      state.signIn.isError = false;
      state.signIn.errorMessage = null;
    },

    resetSignUpState: (state) => {
      state.signUp.isSuccess = false;
      state.signUp.isError = false;
      state.signUp.errorMessage = null;
    },

    logOut: (state) => {
      state.user.name = "";
      state.user.email = "";
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    // --- sign in handlers ---
    builder
      .addCase(signInHandler.pending, (state) => {
        state.signIn.isLoading = true;
        state.signIn.isError = false;
        state.signIn.isSuccess = false;
      })
      .addCase(signInHandler.fulfilled, (state, action) => {
        const { fullName, email, jwtToken } = action.payload;
        state.signIn.isLoading = false;
        state.signIn.isSuccess = true;
        state.signIn.isError = false;
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("user", JSON.stringify({ fullName, email }));
      })
      .addCase(signInHandler.rejected, (state, action) => {
        state.signIn.isLoading = false;
        state.signIn.isSuccess = false;
        state.signIn.isError = true;
        state.signIn.errorMessage = action.payload;
      });

    // --- sign up handlers ---
    builder
      .addCase(signUpHandler.pending, (state) => {
        state.signUp.isLoading = true;
        state.signUp.isError = false;
        state.signUp.isSuccess = false;
      })
      .addCase(signUpHandler.fulfilled, (state) => {
        state.signUp.isLoading = false;
        state.signUp.isError = false;
        state.signUp.isSuccess = true;
      })
      .addCase(signUpHandler.rejected, (state, action) => {
        state.signUp.isLoading = false;
        state.signUp.isSuccess = false;
        state.signUp.isError = true;
        state.signUp.errorMessage = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setUser, logOut, resetSignUpState, resetSignInState } =
  authSlice.actions;

export default authSlice.reducer;
