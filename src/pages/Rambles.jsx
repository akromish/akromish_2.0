import React from 'react';
import {
  Box, Stack, Typography,
} from '@mui/material';
import ReadMoreCard from '../components/ReadMoreCard';

export default function Rambles() {
  const rambles = require('../json_blobs/rambles.json'); // eslint-disable-line global-require
  const rambleList = rambles.rambles.map((ramble) => ramble);

  return (
    <Box>
      <Typography alignItems="center" justifyContent="center" display="flex" fontWeight="bold" variant="h2">Rambles</Typography>
      <Stack spacing={2} paddingTop={{ mobile: '8vw', tablet: '5vw', desktop: '3vw' }}>
        {rambleList.map((ramble) => (
          <ReadMoreCard jsonEntry={ramble} key={ramble.id} />
        ))}
      </Stack>
    </Box>
  );
}
