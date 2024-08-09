import { MessageTypes } from "../enums/messageTypes";
import { TargetTypes } from "../enums/targetTypes";
import { BaseInitialStateInterface } from "./AuthInterface";

export interface PostMessagesPayload{
    body: string;
    messageType: MessageTypes;
    senderUserId: string;
    targetId: string;
    targetType: TargetTypes
}


export interface MessagesDetails{
    id: string;
    body: string;
    senderUserId: string;
    targetId: string;
    targetType: TargetTypes;
    createdDate: string;
    createdBy: string;
    modifiedDate: string;
    modifiedBy: string;
    target: string
}

export interface GetMessagesInitialStateInterface extends BaseInitialStateInterface{
    messageDetails: Array<MessagesDetails>;
}

export interface PostMessagesInitialState extends BaseInitialStateInterface{
    messageDetails: MessagesDetails;
}