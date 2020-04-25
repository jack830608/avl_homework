import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    width:100vw;
    height:100vh;
    background:rgb(35,37,41);
    @media screen and (max-width: 768px) {

    }
`
export const Left = styled.div`
    width:20%;
    height:100%;
    background:rgb(28,29,31);
    color:#FFF;
`
export const Right = styled.div`
    width:80%;
    height:100%;
    background:rgb(35,37,41);
    color:#FFF;
    box-sizing:border-box;
    padding:60px 5%;
    display: flex;
`
export const Content = styled.div`
    width:100%;
    height:100%;
    background:rgb(35,37,41);
    border-radius:10px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.8);

`
export const InBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:50px;
`
export const In = styled.input`
    font-size:45px;
    width:30px;
    background:rgb(46,48,53);
    border:none;
    outline: none;
    border-bottom:1px solid #FAFAFA;
    color:rgb(89,189,190);
    text-align: center;
`
export const InFrame = styled.div`
    background:rgb(46,48,53);
    border:1px solid rgb(58,60,64);
    width:fit-content;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:0 15px 10px 15px;
    border-radius:5px;
    margin:5px;
`