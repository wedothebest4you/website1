'use client';
import React from 'react';
import { Typography, AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import Box from '@mui/system/Box';
import theme from './theme';
import Grid from '@mui/material/GridLegacy';
import { appConfig } from './../data/staticData.js';
import { useTheme } from '@mui/material/styles';

export default function Header() {
  const theme = useTheme();
  console.log(theme.typography.fontFamily);
  return (
    <>
      <AppBar>
        <Toolbar>
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
          <Tabs value={0} sx={{ marginLeft: 'auto' }}>
            <Tab sx={{ fontFamily: 'Raleway' }} label="Home"></Tab>
            <Tab sx={{ fontFamily: 'Raleway' }} label="Services"></Tab>
            <Tab sx={{ fontFamily: 'Raleway' }} label="The Revolution"></Tab>
            <Tab sx={{ fontFamily: 'Raleway' }} label="About us"></Tab>
            <Tab sx={{ fontFamily: 'Raleway' }} label="Contact"></Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
