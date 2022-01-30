import React from 'react';
import {
  Avatar, Box, Link, Stack,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {
  return (
    <Stack alignItems="center" spacing={2}>
      <Box fontSize={{ xs: '12vw', lg: '4vw' }}>Akram Weheba</Box>
      <Avatar
        alt="akram"
        src="/akram-main.jpeg"
        sx={{ width: { xs: '60vw', lg: '20vw' }, height: { xs: '60vw', lg: '20vw' } }}
      />
      <div style={{ fontSize: '1vw' }}>(software engineer??)</div>
      <Stack direction="row" spacing={2}>
        {/* TODO: make links open new tabs */}
        <Link href="https://github.com/akromish">
          <GitHubIcon
            sx={{
              fontSize: { xs: '12vw', lg: '1.75vw' },
            }}
          />
        </Link>
        <Link href="https://github.com/akromish">
          <LinkedInIcon
            sx={{
              fontSize: { xs: '12vw', lg: '1.75vw' },
            }}
          />
        </Link>
      </Stack>
    </Stack>
  );
}
