'use client';
import React from 'react';
import { Typography, AppBar, Toolbar } from '@mui/material';
import Box from '@mui/system/Box';
import theme from './theme';
import Grid from '@mui/material/GridLegacy';
import { appConfig } from './../data/staticData.js';

export default function Header() {
  return (
    <>
      <AppBar>
        <Toolbar disableGutters>
          <Grid item p={1}>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.common.white,
                fontFamily: 'monospace',
                background:
                  'radial-gradient(  hsla(240, 8%, 5%, 0.40) 0%,rgba(64,150,238,1) 100%)',
                borderRadius: 1,
              }}
            >
              {appConfig.appName}
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
