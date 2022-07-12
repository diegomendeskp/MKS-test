import { Container, Typography, Card, Button, Grid} from '@mui/material';
import {  styled } from '@mui/material/styles';

export const Cards = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 280px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  text-Align: center;
  background: #FFFFFF;
  border-radius: 8px;
`;
export const StyleButton = styled(Button)`
background: #0F52BA;
border-radius: 0px 0px 8px 8px;
width: auto;
height: 32px;
color: #FFFFFF;
font-weight: 600;
font-size: 14px;
line-height: 18px;
:hover{
    background: #3973cc;
}
`;
export const CardContainer = styled(Grid)`
display: flex;
margin-left: 10%;
margin-right: 10%;
flex-direction: row;
justify-content: center;
align-content: center;
flex-wrap: wrap;
column-gap: 20px;
row-gap: 20px;
width: 80%;
border: solid red 1px;
`;