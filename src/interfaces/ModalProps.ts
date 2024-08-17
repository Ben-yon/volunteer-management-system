import { UserDetails } from './AuthInterface';
export interface ModalProps extends BasicModalProps{
    updateAvatar: (imgSrc: string | undefined ) => void,
}

export interface BasicModalProps{
    closeModal: () => void
}

export interface ChangeProfileModalProps extends BasicModalProps{
    setAvatar: (imgSrc: string | undefined) => void
}

export interface DeleteAdminModalProps extends BasicModalProps{
    getAdminId: (id: string | undefined) => void
}

export interface DisplayChatUsers extends BasicModalProps{
    getSelectedUserId: (id: string | undefined) => void;
    users: UserDetails[] | undefined;
}