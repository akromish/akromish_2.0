import React from 'react';
import { Box, Stack } from '@mui/material';

export default function About() {
  return (
    <Stack alignItems="center">
      <Box fontSize={{ xs: '12vw', lg: '4vw' }}>About</Box>
      <Box fontSize={{ xs: '5vw', lg: '1.25vw' }}>
        👋 Hey there fellow human!
        <br />
        Thanks for checking out my website.
        It&apos;s not a masterpiece but it&apos;s my piece.
        <br />
        <br />
        My name is Akram Weheba and I&apos;m a Software Engineer working at NetScout.
      </Box>
    </Stack>
  );
}
