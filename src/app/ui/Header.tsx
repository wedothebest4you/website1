'use client';
import React, { useState } from 'react';
import { Typography, AppBar, Toolbar, Tabs, Tab, Button } from '@mui/material';
import { appConfig } from './../data/staticData.js';
import { useTheme } from '@mui/material/styles';
import NavLink from './NavLink';

export default function Header() {
  const [selected, setSelected] = useState(0);
  const theme = useTheme();
  const tabs = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'The Revelution',
      href: '/revelation',
    },
    {
      label: 'Services',
      href: '/service',
    },
    {
      label: 'About us',
      href: '/about',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ];

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
          <Tabs
            value={selected}
            sx={{
              // marginLeft: 'auto',
              '& .MuiButtonBase-root': {
                fontWeight: 500,
                //   minWidth: '10px',
                //   marginLeft: '25px',
              },
              width: '100%',
            }}
            slotProps={{
              list: {
                sx: {
                  justifyContent: 'center',
                  mx: 1,
                },
              },
            }}
            onChange={(e, v) => setSelected(v)}
          >
            {tabs.map((item) => (
              <NavLink href={item.href} label={item.label} key={item.label} />
            ))}
          </Tabs>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              minWidth: '130px',
              textTransform: 'none',
              borderRadius: '50px',
              fontFamily: 'Pacifico',
              fontSize: '1rem',
            }}
          >
            Free Estimate
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
