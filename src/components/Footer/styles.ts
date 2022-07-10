import { Grid, Typography} from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Grid)`
  display: flex;
  align-content: flex-end;
  justify-content: center;
  width: 100%;
  height: 35px;
  align-items: center;
  background: #EEEEEE;
  position: absolute;
  bottom: 0;
  @media (max-width: 500px) {
  }
`;