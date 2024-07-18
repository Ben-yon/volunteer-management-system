import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { getMessages } from './messagingActions';
import { GetMessagesInitialStateInterface } from '../../interfaces/MessagingInterface';
import { TargetTypes } from '../../enums/targetTypes';

const initialState: GetMessagesInitialStateInterface = {
    loading: false,
    success: false,
    error: null,
    messageDetails:[{
        id: '',
        body: '',
        senderUserId: '',
        targetId: '',
        targetType: TargetTypes.USER,
        createdDate: '',
        createdBy: '',
        modifiedDate: '',
        modifiedBy: '',
        target: ''
    }]
}


const getMessagesSlice = createSlice({
    name: "getMessagesSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMessages.pending, (state) => {
            state.error = null;
            state.loading = true;
            state.success = false;
        })
        .addCase(getMessages.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.messageDetails = action.payload;
        })
        .addCase(getMessages.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        })
    }
});

export default getMessagesSlice.reducer