import React from 'react';
import { Avatar, Link, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {
  return (
    <Stack alignItems="center" spacing={2}>
      <div style={{ fontSize: '3vw' }}>Akram Weheba</div>
      <Avatar
        alt="akram"
        src="/akram-main.jpeg"
        sx={{ width: 250, height: 250 }}
      />
      <div style={{ fontSize: '1vw' }}>(software engineer??)</div>
      <Stack direction="row" spacing={2}>
        {/* TODO: make links open new tabs */}
        <Link href="https://github.com/akromish">
          <GitHubIcon />
        </Link>
        <Link href="https://github.com/akromish">
          <LinkedInIcon />
        </Link>
      </Stack>
    </Stack>
  );
}
