import React from 'react';
import {
  Avatar, Link, Stack, Typography,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';

export default function Home() {
  return (
    <Stack alignItems="center" spacing={2}>
      <Typography fontWeight="bold" variant="h2" textAlign="center">Akram Weheba</Typography>
      <Avatar
        alt="akram"
        src="/akram-main.jpeg"
        sx={{ width: { mobile: '60vw', desktop: '18vw' }, height: { mobile: '60vw', desktop: '18vw' } }}
      />
      <Typography fontSize={{ mobile: '5vw', desktop: '1vw' }}>(software engineer??)</Typography>
      <Stack direction="row" spacing={2}>
        <Link rel="noopener noreferrer" target="_blank" href="https://github.com/akromish">
          <GitHubIcon sx={{ fontSize: { mobile: '12vw', desktop: '2vw' } }} />
        </Link>
        <Link rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/aweheba/">
          <LinkedInIcon sx={{ fontSize: { mobile: '12vw', desktop: '2vw' } }} />
        </Link>
        <Link rel="noopener noreferrer" target="_blank" href="mailto: akram.weheba.11@gmail.com">
          <EmailSharpIcon sx={{ fontSize: { mobile: '12vw', desktop: '2vw' } }} />
        </Link>
      </Stack>
    </Stack>
  );
}
