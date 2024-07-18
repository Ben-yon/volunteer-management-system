import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostMessagesInitialState } from "../../interfaces/MessagingInterface";
import { TargetTypes } from "../../enums/targetTypes";
import { postMessages } from "./messagingActions";

const initialState: PostMessagesInitialState = {
    loading: false,
    error: null,
    success: false,
    messageDetails: {
        id: "",
        body: "",
        senderUserId: "",
        targetId: "",
        targetType: TargetTypes.USER,
        createdDate: "",
        createdBy: "",
        modifiedDate: "",
        modifiedBy: "",
        target: ""
    }
}

const postMessagesSlice = createSlice({
    name: "postMessagesSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(postMessages.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        })
        .addCase(postMessages.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.messageDetails = action.payload;
        })
        .addCase(postMessages.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        })
    }
});

export default postMessagesSlice.reducer;