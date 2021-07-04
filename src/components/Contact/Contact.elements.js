import styled from "styled-components";

export const ContactSec = styled.div`
color: #fff;
padding:60px;
background: #15b9a9;
@media only screen and (max-width:550px){
    padding:0px;

}

`
export const Contactgrid= styled.div`
display: grid;
grid-column-gap: 40px;


grid-template-columns: 1fr 1.5fr;
@media only screen and (max-width:550px){
    grid-template-columns:1fr;
    grid-row-gap: 14px;
    grid-template-rows: repeat(auto-fill,auto-fit,1, minmax(100px, 0.25fr)) repeat(auto-fill,auto-fit, 1,minmax(100px, 0.75fr));
}

`
export const ContactHeader = styled.div`
display:grid;
grid-template-rows:0.1fr 0.1fr;
grid-row-gap: 5px;
overflow:wrap;

padding:1px
@media only screen and (max-width:550px){
grid-template-rows:0.1fr 0.1fr;

    
}
`

export const ContactForm = styled.div`
display:grid;
grid-template-rows: 0.4fr 0.4fr 0.4fr 0.4fr 0.2fr 0.2fr 0.2fr;

background:white;
border-radius: 50px;
padding:10px;
overflow:wrap;
width:auto;
@media only screen and (max-width:550px){
    grid-template-columns: 1fr;
    border-radius: 8px;
    background:transparent;
    

    

}
`

export const ContactTextHeader = styled.div`
font-size:46px;
margin-top:100px;
color:black;

@media only screen and (max-width:550px){
    margin-top:30px;
    font-size:40px;
    font-weight:bold;

}

`
export const ContactPara= styled.div`

font-size:24px;
margin-top:150px;
color:black;
@media only screen and (max-width:550px){
    margin-top:10px;
    font-size:19px;
    display:none;

}



`

export const ContactDiscuss = styled.div`
font-size:40px;
text-align:center;
padding:10px;
color:black;
@media only screen and (max-width:550px){
    font-size:20px;
    justify-self:start;
    align-self:start;

}



`
export const ContactSpecialist = styled.div`
font-size:20px;
text-align:center;
padding:10px;
color:black;
@media only screen and (max-width:550px){
    display:none;

}



`
export const ContactName = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
padding:10px;
overflow:wrap;

@media only screen and (max-width:550px){
grid-template-columns:1fr;
grid-template-rows:1fr 1fr;
padding:0;

}



`
export const ContactFullName = styled.div`
align-self:center;
justify-self:right;
padding:5px;
overflow:wrap;

@media only screen and (max-width:550px){
    align-self:start;
    justify-self:start;
    padding:0px;
    


}
`
export const ContactCompanyName = styled.div`
align-self:center;
justify-self:left;
padding:5px;
overflow:wrap;


@media only screen and (max-width:550px){
    align-self:start;
    justify-self:start;
    padding-left:0px;
    


}

`
export const Input = styled.input`
width: ${({ big }) => (big ? '500px' : '250px')};

height:${({ Hbig }) => (Hbig ? '150px' : '50px')};
border-radius:10px;
text-decoration:none;
outline:none;
padding: 12px 20px;
font-size:16px;
background-color:#CEE5D0;
border:none;
overflow:wrap;
@media only screen and (max-width:550px){
    width: ${({ big }) => (big ? '250px' : '250px')};

    height:${({ Hbig }) => (Hbig ? '100px' : '50px')};
}

  
`
export const ContactEmail = styled.div`
align-self:center;
justify-self:center;
overflow:wrap;
@media only screen and (max-width:550px){
    justify-self:start;
    
}

`
export const ContactAsk = styled.div`
align-self:center;
justify-self:center;
overflow:wrap;
@media only screen and (max-width:550px){
display:none;
}

`
export const ContactHelp = styled.div`
align-self:center;
justify-self:center;
padding:10px;
overflow:wrap;
@media only screen and (max-width:550px){
    justify-self:start;
    padding-left:0px;
    
}


`
export const Button = styled.button`
width:50%;
align-self:center;
justify-self:center;
border-radius:8px;
height:40px;
background:#0467FB;
outline:none;
font-size:20px;
color:white;
border:none;
overflow:wrap;
@media only screen and (max-width:550px){
    font-size:13px;
    justify-self:start;


    

}


&:hover{
    background:#4B59F7;
}




`