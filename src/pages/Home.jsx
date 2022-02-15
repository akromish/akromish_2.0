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
      <Typography
        fontWeight="bold"
        variant="h2"
        textAlign="center"
        sx={{ paddingBottom: { mobile: '8vw', tablet: '5vw', desktop: '3vw' } }}
      >
        Akram Weheba
      </Typography>
      <Avatar
        alt="akram"
        src="/akram-main.jpg"
        sx={{
          width: { mobile: '60vw', tablet: '30vw', desktop: '18vw' },
          height: { mobile: '60vw', tablet: '30vw', desktop: '18vw' },
        }}
      />
      <Typography variant="h5">(software engineer??)</Typography>
      <Stack direction="row" spacing={2}>
        <Link rel="noopener noreferrer" target="_blank" href="https://github.com/akromish">
          <Typography variant="h3"><GitHubIcon fontSize="inherit" /></Typography>
        </Link>
        <Link rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/aweheba/">
          <Typography variant="h3"><LinkedInIcon fontSize="inherit" /></Typography>
        </Link>
        <Link rel="noopener noreferrer" target="_blank" href="mailto: akram.weheba.11@gmail.com">
          <Typography variant="h3"><EmailSharpIcon fontSize="inherit" /></Typography>
        </Link>
      </Stack>
    </Stack>
  );
}
