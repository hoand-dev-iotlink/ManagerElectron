import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { Stack, IconButton, Grid, Tooltip, Box } from '@mui/material';
import LayoutHome from '../layouts/LayoutHome';
import LeftTreeView from '../components/Menu/LeftTreeView';
import styleU from '../styles/home.module.css';
import Filter1OutlinedIcon from '@mui/icons-material/Filter1Outlined';
import Filter2OutlinedIcon from '@mui/icons-material/Filter2Outlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';

import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    // primary: {
    //   light: '#757ce8',
    //   main: '#3f50b5',
    //   dark: '#002884',
    //   contrastText: '#fff',
    // },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    success:{
      light: '#3b9436',
      main: '#3b9436',
      dark: '#3b9436',
      contrastText: '#000',
    },
    error:{
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    }
  },
});


export default function Home() {
  const [leftTree, setLeftTree] = useState('');
  function onclicktree (val){
    setLeftTree(val);
    console.log(val);
    
  }
  return (
    <LayoutHome>
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <Grid container spacing={2}>
            <Grid item xs={3} md={3}>
              <Box className={styleU.lefttrevview}>
                <LeftTreeView onclicktree={(val)=>{onclicktree(val)}}/>
              </Box>

            </Grid>
            <Grid item xs={9} md={9}>
              <Box>
                <Stack direction="row" spacing={1}>
                  <Tooltip title="Thêm quận">
                    <IconButton size="large" color="success"  className={styleU.btncommon}>
                      {/* <DeleteIcon /> */}
                      <AddBusinessOutlinedIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Thêm phục lục 1">
                    <IconButton size="large" color="success"  className={styleU.btncommon}>
                      {/* <DeleteIcon /> */}
                      <Filter1OutlinedIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Thêm phục lục 2">
                    <IconButton size="large" color="success"  className={styleU.btncommon}>
                      {/* <DeleteIcon /> */}
                      <Filter2OutlinedIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Xuất file">
                    <IconButton size="large" color="primary"  className={styleU.btncommon}>
                      <CloudDownloadOutlinedIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Xóa">
                  <IconButton size="large" color="secondary"  className={styleU.btncommon}>
                    <DeleteForeverOutlinedIcon />
                  </IconButton>
                  </Tooltip>
                </Stack>

              </Box>
              <Box>
                <a>xs=6 md=4</a>
              </Box>
              
            </Grid>
          </Grid>
        </ThemeProvider>
      </React.Fragment>
    </LayoutHome>
  );
};

//export default Home;
