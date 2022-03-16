import React from 'react'
import Video from '../../videos/video.mp4'
import { FsContainer, FsBackground, VideoBackGround } from './FSStyles'

const FristSec = () => {
    return (
        <FsContainer>
            <FsBackground>
                <VideoBackGround autoPlay loop muted src={Video} type='video/mp4' />
            </FsBackground>
        </FsContainer>
    )
}

export default FristSec