import React from 'react';
import {
  Avatar, Box, Link, Stack,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';

export default function Home() {
  return (
    <Stack alignItems="center" spacing={2}>
      <Box fontSize={{ xs: '12vw', lg: '4vw' }} textAlign="center">Akram Weheba</Box>
      <Avatar
        alt="akram"
        src="/akram-main.jpeg"
        sx={{ width: { xs: '60vw', lg: '20vw' }, height: { xs: '60vw', lg: '20vw' } }}
      />
      <Box fontSize={{ xs: '5vw', lg: '1vw' }}>(software engineer??)</Box>
      <Stack direction="row" spacing={2}>
        {/* TODO: make links open new tabs */}
        <Link href="https://github.com/akromish">
          <GitHubIcon sx={{ fontSize: { xs: '12vw', lg: '2vw' } }} />
        </Link>
        <Link href="https://github.com/akromish">
          <LinkedInIcon sx={{ fontSize: { xs: '12vw', lg: '2vw' } }} />
        </Link>
        <Link href="mailto: akram.weheba.11@gmail.com">
          <EmailSharpIcon sx={{ fontSize: { xs: '12vw', lg: '2vw' } }} />
        </Link>
      </Stack>
    </Stack>
  );
}
