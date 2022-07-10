import { Grid, Stack } from '@mui/material';
import React from 'react';
import { Container, Text, Sub, Btn } from './styles';

function Bar() {
  return (
    <Stack display="flex" direction="row">
      <Container>
        <Text ml={10}>MKS</Text> <Sub ml={1}>sistemas</Sub>
      </Container>
      <Btn> cart</Btn>
    </Stack>
  );
}

export default Bar;
