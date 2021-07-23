import styled from "styled-components";

export const Nav = styled.nav`
        display: flex;
        justify-content: baseline;
        position: sticky;
        align-items: center;
        background-color: #FFFFFF;
        height: 4.3em;
        top:0;
        border-bottom:#DFB21C solid ;
        z-index: 100;
    `;
    
export const LogoImage = styled.img`
        height: 90%;
        padding: 1em;

    `;
export const Input = styled.input`
        margin-left: 1em;
        height: 3em;
        width: 30em;
        outline: none;
        border: 0.2em solid #365FA3;
        border-radius: 1em;
        padding-left: 1em;
        font-family: 'Cinzel', serif;
        `;

export const Grid = styled.div`
        display: grid;
        gap: 1em;
        grid-template-columns: repeat(auto-fill, minmax(22em,1fr));
        justify-items: center;
        align-items: center;
      //  margin: 0 2em ;
      
`
export const ErrorCartel = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100% ;
        height: 90vmin;
        p{
                color: red;
                width: 50%;
                padding: 1em;
                font-size: 2em;
                font-family: 'Cinzel', serif;
                margin-top: 1em;
                border: #DFB21C 1px dotted;
                margin-bottom: 1em;
                text-align: center;
                @media (max-width: 600px) {
                        
                font-size: 1em;
                }
        }


`