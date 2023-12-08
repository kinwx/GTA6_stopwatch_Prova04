import styled from "styled-components";

export const SectionStyled = styled.section`
    --first-color: #6C6FA2;
    --second-color: #887CA4;
    --third-color: #A384AD;
    --fourth-color: #F79D94;
    ---fifth-color: #FE9367;

    position: relative;
    width: 100vw;
    height: 100svh;
    background-image: 
    linear-gradient(
        180deg,
        var(--first-color),
        var(--second-color),
        var(--third-color),
        var(--fourth-color),
        var(---fifth-color));
    z-index: 1;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    & > img:nth-child(1) {
        position: absolute;
        bottom: 0;
        transform: translate(-40%, 10%);

        opacity: .6;
        filter: invert(.1);
    }
    & > img:nth-child(2) {
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(40%, 10%) scaleX(-1);

        opacity: .6;
        filter: invert(.1);
    }
`

export const TextLabels = styled.div`
    position: relative;
    width: 80rem;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: white;

    pointer-events: none;
    text-align: center;
`

export const Logo = styled.img`
    width: 200px;
    filter: invert(1);
`

export const Title = styled.h2`
    font-size: 3rem;
`

export const Days = styled.p`
    font-size: 4rem;
    font-weight: 500;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: .8rem;
`

export const Time = styled.span`
    font-size: 5rem;
    font-weight: 500;
`