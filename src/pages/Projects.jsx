import React from 'react';
import {
  Link, Stack, Typography,
} from '@mui/material';

export default function Projects() {
  return (
    <Stack alignItems="center" spacing={4}>
      <Typography fontWeight="bold" fontSize={{ xs: '12vw', lg: '4vw' }}>Projects</Typography>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <Link href="https://github.com/akromish/pdg-auction" underline="hover">
            <Typography fontSize={{ xs: '8vw', lg: '2vw' }}>
              PD Silent Auction
            </Typography>
          </Link>
          <Typography fontSize={{ xs: '5vw', lg: '1.25vw' }}>
            Whamo! That&apos;s a pretty catchy first word if you ask me. How does it relate to
            this project you ask? Hmmmm...it doesn&apos;t!
            <br />
            <br />
            So you&apos;ve come to the second paragraph I see. Well in that case, I&apos;ll tell
            you a little bit about this project. A friend of mine runs a local
            organization called  Project Downtown Gainesville. They
            help put together meals for the homeless every week. Every year though,
            they have a banquet where they have both a live and a silent auction.
            Typically the silent auction happens on paper, however, my friend had
            the idea of hosting it on the internet because of COVID and recruited
            me to make it.
            <br />
            <br />
            Initially, I was going to create an app using Vue, Node, Express, and Mongo. After
            putting together a basic frontend using Vue, Vue router, and Vuetify, I started
            working on the authentication, which I used firebase for. After getting that set up
            I decided I would give firestore a chance and went with that for my backend. It made
            getting the app up and running much quicker and it also scaled extremely well. After
            getting all that working I went ahead and deployed it using Netlify.
            <br />
            <br />
            On the day of the auction, the app worked flawlessly! Firebase registered
            over 110,000 reads during just the evening of the event. My web app was
            able to help increase the amount the silent auction brought in by opening
            it up to the online public.
            Cool Beans!
            <br />
            <br />
            Also, this website should be live at pdsilent.org
          </Typography>
        </Stack>
      </Stack>
      <div />
    </Stack>
  );
}