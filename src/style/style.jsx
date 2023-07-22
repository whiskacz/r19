import { styled } from "styled-components";

export const Wrapper = styled.div `
    display:flex;
    flex-direction: column;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    background-color: #d1d13d;
    width: 20vw;
    height: 40vh;
    border-radius: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;

    .form {
        display: flex;
        flex-direction: column;
        height: 20%;
        width: 100%;
        //background-color: green;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid white;
    }

    input{
        background-color: transparent;
        border: none;
        border-bottom: 1px solid black;
        margin: 10px;
    }

    .result {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #493fd6;
        height: 20%;
        width: 100%;
        border-radius: 0 0 20px 20px;
        color: white;
        font-size: 2rem;
    }

    .result > div {
        margin: 20px;
    }

`
