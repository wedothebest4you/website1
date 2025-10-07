'use client';
import React from 'react';
import { Typography, AppBar, Toolbar } from '@mui/material';
import Box from '@mui/system/Box';
import theme from './theme';
import { amber } from '@mui/material/colors';
import Grid from '@mui/material/GridLegacy';
import { appConfig } from './../data/staticData.js';

export default function Header() {
  return (
    <>
      <AppBar>
        <Toolbar disableGutters sx={{ m: 1 }}>
          <Grid item>
            <Typography
              variant="h6"
              sx={{
                color: amber[500],
                fontFamily: 'monospace',
              }}
            >
              {appConfig.appName}
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box sx={{ ...theme.mixins.toolbar }}></Box>
    </>
  );
}
