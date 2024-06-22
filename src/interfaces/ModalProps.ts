export interface ModalProps extends Props{
    updateAvatar: (imgSrc: string | undefined ) => void,
}

export interface Props{
    closeModal: () => void
}

export interface ChangeProfileModalProps extends Props{
    setAvatar: (imgSrc: string | undefined) => void
}