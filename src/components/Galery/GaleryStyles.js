import styled from 'styled-components';
import img from '../../images/foto5.jpg'

export const GaleryContainer = styled.div`
    background-image: url(${img});
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 0 30px;
    height: 845px;
    position: relative;
    z-index: 1;
`
export const GContentAll = styled.div`
    align-items: center;
    text-align: center;


`
export const GH1 = styled.h1`
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
export const GContent = styled.div`
    background: #fff;
    width: 800px;
    height: 350px;
    border-radius: 5px;
    max-width: 1200px;
    width: 850px ;
    height: 500px ;
    margin-left: 200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;


`