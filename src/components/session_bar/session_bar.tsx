import React, { FC, useEffect, useState } from "react";
import { SessionRefreshContainer } from "./session_bar.styles";
import { SessionBarProps } from "./session_bar.types";

const SessionRefresh: FC<SessionBarProps> = ({ duration = 600, action }) => {
    const [time, setTime] = useState(duration)

    const formatTime = () => {
        const minutes = Math.floor(time / 60)
        const minutes_format = minutes < 10 ? '0' + minutes : minutes
        const seconds = (time % 60)
        const seconds_format = seconds < 10 ? '0' + seconds : seconds
        return minutes_format + ':' + seconds_format
    }

    useEffect(() => {
        const checkTime = async () => {
            if (time <= 0) {
                action()
            }
        }
        checkTime()
        const timer = setTimeout(() => {
            if (time > 0) setTime(time - 1)
        }, 1000)
        return () => clearTimeout(timer);
    }, [time])

    useEffect(() => {
        document.addEventListener('click', () => {
            setTime(duration)
        })
        return () => {
            document.addEventListener('click', () => {
                setTime(duration)
            })
        }
    }, [])

    return (
        <SessionRefreshContainer open={time < (0.5 * duration)}>
            <p >
                Za {formatTime()} wylogujemy Cię z serwisu, kliknij w dowolne miejsce aby wydłużyć sesję
            </p>
        </SessionRefreshContainer>
    )
}

export default SessionRefresh