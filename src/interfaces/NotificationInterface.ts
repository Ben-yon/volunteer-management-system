import { TargetTypes } from "../enums/targetTypes";

export interface CreateNotificationInterface{
    details: string;
    typeOfActivity: string;
    activityId: string;
    notificationTargets: Array<NotificationTargetInterface>;
}

interface NotificationTargetInterface{
    targetType: TargetTypes;
    targetId: string;
}