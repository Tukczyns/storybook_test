import React, { FC } from "react";
import { ButtonsContainer, PopupBackground, PopupContainer, PopupLine, PopupMessage } from "./confirm_popup.styles";
import { ConfirmPopupTypes } from './confirm_popup.types'
import Button from '../button/Button'

const ConfirmPopup: FC<ConfirmPopupTypes> = ({ visible, message, accept, cancel }) => {
    return (
        <>
            {visible ?
                <PopupBackground>
                    <PopupContainer>
                        <PopupLine />
                        <PopupMessage>
                            {message}
                        </PopupMessage>
                        <ButtonsContainer>
                            <Button text="Anuluj" primary={false} onClick={() => cancel ? cancel() : {}} />
                            <div>
                                <Button text="Na pewno" onClick={() => accept ? accept() : {}} />
                            </div>
                        </ButtonsContainer>
                    </PopupContainer>
                </PopupBackground>
                :
                null
            }
        </>

    )
}

export default ConfirmPopup