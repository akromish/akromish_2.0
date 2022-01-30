import React from 'react';
import { Avatar, Stack } from '@mui/material';

export default function Home() {
  return (
    <Stack alignItems="center" spacing={2}>
      <h1>Akromish 2.0</h1>
      <Avatar
        alt="akram"
        src="/akram-main.jpeg"
        sx={{ width: 250, height: 250 }}
      />
    </Stack>
  );
}
