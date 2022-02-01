import React from 'react';
import { Stack, Typography } from '@mui/material';

export default function About() {
  return (
    <Stack alignItems="center">
      <Typography fontWeight="bold" fontSize={{ xs: '12vw', lg: '4vw' }}>About</Typography>
      <Typography fontSize={{ xs: '5vw', lg: '1.25vw' }}>
        👋 Hey there fellow human!
        <br />
        Thanks for checking out my website.
        It&apos;s not a masterpiece but it&apos;s my piece.
        <br />
        <br />
        My name is Akram Weheba and I&apos;m a Software Engineer working at NetScout.
      </Typography>
    </Stack>
  );
}
