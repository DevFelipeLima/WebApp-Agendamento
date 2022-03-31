import styled from "styled-components";
import img from '../../images/foto1.jpg'


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

export const FsContent = styled.div`
background-image: url(${img});
border-radius: 5px;
opacity: 80%;
z-index:3;
max-width: 1200px;
width: 1150px ;
height: 600px ;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`

export const FsH1 = styled.h1`
color: #000;
font-size: 54px;
text-align: center;

@media screen and (max-width: 768px){
    font-size: 40px
}
@media screen and (max-width: 480px){
    font-size: 40px;
}
`
export const FsP = styled.p`
margin-top: 32px;
color: #000;
font-size: 32px
text-align: center;
max-width: 600px;

@media screen and (max-width: 768px){
    font-size: 32px
}
@media screen and (max-width: 480px){
    font-size: 24px;
}
`
