import { Button, Grid, Typography} from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Grid)`
  display: flex;
  justify-content: flex-start;
  background: #0F52BA;
  width: 100%;
  height: 101px;
  align-items: center;
  position: absolute;
  @media (max-width: 500px) {
  }
`;

export const Text = styled(Typography)`
  font-style: normal;
  font-weight: 500px;
  font-size: 40px;
  line-height: 19px;
  color: #FFFFFF;
`;
export const Sub = styled(Typography)`
  font-style: normal;
  font-weight: 250px;
  font-size: 20px;
  line-height: 19px;
  color: #FFFFFF;
`;

export const Btn = styled(Button)`
  background: #FFFFFF;
  width: 90px;
  height: 45px;
  border-radius: 8px;
  
`;