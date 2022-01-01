import React from 'react';
import { Avatar } from '@mui/material';

export default function Home() {
  return (
    <div>
      <h1>Akromish 2.0</h1>
      <Avatar
        alt="akram"
        src="/akram-main.jpeg"
        sx={{ width: 250, height: 250 }}
      />
    </div>
  );
}
