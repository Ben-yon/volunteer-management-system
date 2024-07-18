import { MessageTypes } from "../enums/messageTypes";
import { TargetTypes } from "../enums/targetTypes";

export interface PostMessagesPayload{
    body: string;
    messageType: MessageTypes;
    sendUserId: string;
    targetId: string;
    targetType: TargetTypes
}


export interface PostMessagesDetails{
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