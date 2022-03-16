import styled from "styled-components";


export const FsContainer = styled.div`
background: #fff;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 1000px;
position: relative;
z-index: 1;
`

export const FsBackground = styled.div`
position: absolute;
top: 0;
right:0;
bottom:0;
left:0;
width: 100%;
height: 100%;
overflow: hidden;
`
export const VideoBackGround = styled.video`
white: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #f53d71 ;
`