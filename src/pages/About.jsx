import React from 'react';
import { Box, Typography } from '@mui/material';

export default function About() {
  return (
    <Box>
      <Typography alignItems="center" justifyContent="center" display="flex" fontWeight="bold" variant="h2">About</Typography>
      <Typography
        variant="h5"
        paddingTop={{ mobile: '8vw', tablet: '5vw', desktop: '3vw' }}
      >
        👋 Hey there fellow human! I&apos;m Akram and I&apos;m a Software Engineer👨‍💻 at NetScout.
        Thanks for checking out my website.
        It&apos;s not a masterpiece but it&apos;s my piece.
        <br />
        <br />
        On the CS side of things, recently, I&apos;ve been doing a lot of Kubernetes⎈(my aliases
        can vouch for me lol),
        AWS☁️, and Grafana📈 stuff.
        I enjoy both front-end(like this website lol) as well as backend-end(recently
        java microservices).
        Along with Software Development, I&apos;ve come to really enjoy the fields of
        Site Reliability Engineering and general microservice architecture.
        <br />
        <br />
        Outside of the tech world I have about 9001 too many hobbies/sports.
        I&apos;ve always been a mountain biker🚵 and soccer⚽ player, but since
        I moved to Colorado I have also managed to pick up bouldering🧗 and
        snowboarding🏂 as my latest and greatest sports.
        Cooking👨‍🍳 is also pretty fun, but the fire alarm in my apartment
        has a certain disdain for me.
        Even if I bake something for more than a couple minutes it starts
        to get anxious and whamo🚨 , my whole building knows.
      </Typography>
    </Box>
  );
}
