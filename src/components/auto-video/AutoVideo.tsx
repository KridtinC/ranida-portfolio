import { useRef, useState } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import { Waypoint } from 'react-waypoint';
import './AutoVideo.css'

export const AutoVideo = (props: ReactPlayerProps) => {

    const ref = useRef<HTMLDivElement>(null);
    let [shouldPlay, updatePlayState] = useState(false);

    let handleEnterViewport = () => {
        updatePlayState(true);
    }
    let handleExitViewport = () => {
        updatePlayState(false);
    }

    return (
        <Waypoint
            onEnter={handleEnterViewport}
            onLeave={handleExitViewport}
        >
            <div ref={ref} style={{ width: '100%', height: '100%' }}>
                <ReactPlayer
                    playing={shouldPlay}
                    width='100%'
                    height='100%'
                    {...props}
                />
            </div>
        </Waypoint>
    )
}