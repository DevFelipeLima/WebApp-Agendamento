import React from 'react'
import Video from '../../videos/video.mp4'
import { FsContainer, FsBackground, VideoBackGround, FsContent, FsH1, FsP } from './FSStyles'

const FristSec = () => {
    return (
        <FsContainer>
            <FsBackground>
                <VideoBackGround autoPlay loop muted src={Video} type='video/mp4' />
            </FsBackground>
            <FsContent>
                <FsH1> Lorem ipsum dolor sit amet </FsH1>
                <FsP> Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</FsP>
            </FsContent>
        </FsContainer>
    )
}

export default FristSec