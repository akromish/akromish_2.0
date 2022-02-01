import React from 'react';
import { Stack, Typography } from '@mui/material';

export default function Ramblings() {
  return (
    <Stack alignItems="center" spacing={4}>
      <Typography fontWeight="bold" fontSize={{ xs: '12vw', lg: '4vw' }}>Ramblings</Typography>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <Typography fontSize={{ xs: '8vw', lg: '2vw' }} color="primary">
            Ramble 1.0
          </Typography>
          <Typography fontSize={{ xs: '5vw', lg: '1.25vw' }}>
            Once upon a time, there was a member of the bourgeoisie.
            It was a young man. A mysterious one to be sure...
            <br />
            <br />
            His eyes glistened as he focused his gaze upon the noble Bob. &quot;Bob&quot;
            he exclaimed! What had Bob done this time. One would hope it
            was not a repeat of the horseshoe incident...lest we want another war
            that is. No, this seemed milder. It must&apos;ve been something to do
            with last week&apos;s festival. Yes, it must&apos;ve been.
            <br />
            <br />
            Just a week ago, Master Klingon decided to host a festival in honor
            of his son&apos;s recent graduation from the cycling academy. Fireworks,
            arcade machines, and best of all, free computational devices for all
            invited. It was the real deal, as is commonly said. Seemingly,
            any time there is joy to be had, Bob gravitates towards preventing
            it. This festival was no different. Bam! The...
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}