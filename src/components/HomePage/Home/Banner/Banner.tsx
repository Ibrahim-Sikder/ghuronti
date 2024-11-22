'use client';

import React from 'react';
import { Box, Button, Tab, useMediaQuery } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MosqueIcon from '@mui/icons-material/Mosque';
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import VisaIcon from '@mui/icons-material/DocumentScanner';
import TourIcon from '@mui/icons-material/TravelExplore';
import BusIcon from '@mui/icons-material/DirectionsBus';
import TrainIcon from '@mui/icons-material/Train';
import './Banner.css';
import HajjSearchContent from './HajjSearchContent';
import FlightTab from './FlightSearchTabContent/FlightTab';

const Banner = () => {
    const [value, setValue] = React.useState('1');

    // Detect screen sizes
    const isMediumScreen = useMediaQuery('(max-width:960px)');
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const tabStyle = {
        '& .MuiTab-root': {
            fontSize: isSmallScreen ? '13px' : isMediumScreen ? '18px' : '20px',
            textTransform: 'none',
            minWidth: isSmallScreen ? '13%' : isMediumScreen ? '13%' : '13.85%',

            border: isSmallScreen ? 'none' : '1px solid white',
            transition: 'background-color 0.3s, color 0.3s',
            color: 'white',
            height: isSmallScreen ? '50px' : '67px',
            display: 'flex',
            flexDirection: isSmallScreen ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        '& .Mui-selected': {
            backgroundColor: '#19ABE3',
            color: 'white',
        },
        '& .MuiTab-iconWrapper': {
            fontSize: isSmallScreen ? '20px' : '35px',
            marginBottom: isSmallScreen ? '4px' : '0',
            marginRight: isSmallScreen ? '0' : '8px',
        },
    };

    return (
        <div className="bannerWrap">
            <h2 className='text-center md:text-2xl px-5 lg:px-0 pb-3 lg:pb-0 lg:text-3xl pt-5  '>Welcome to Ghuronti! Find Tours, Flights & Hotels Packages</h2>

            <div className="heroBoxMain">
                <div>
                    <TabContext value={value}>
                        <Box
                            sx={{
                                borderBottom: 'none',
                                background: '#4AB449',
                                overflowX: 'auto',
                                whiteSpace: 'nowrap',
                                width: isSmallScreen ? '95%' : '100%',
                                display: isSmallScreen ? 'flex' : '',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: isSmallScreen ? ' 10px' : '0',
                                margin: '0 auto',
                                borderRadius: '8px',
                                position: isSmallScreen ? 'relative' : '',
                                top: '-20px'

                            }}
                        >
                            <TabList
                                sx={{
                                    ...tabStyle,
                                    '& .MuiTabScrollButton-root': {
                                        color: '#fff',
                                        fontSize: '40px',
                                        fontWeight: 'bold',
                                        '&.Mui-disabled': {
                                            color: 'rgba(25, 171, 227, 0.5)',
                                        },
                                    },
                                }}
                                onChange={handleChange}
                                variant={isMediumScreen ? 'scrollable' : 'standard'}
                                scrollButtons={isMediumScreen ? 'auto' : false}
                                aria-label="scrollable auto tabs example"
                                allowScrollButtonsMobile
                            >
                                <Tab icon={<MosqueIcon />} label="Hajj & Umrah" value="1" />
                                <Tab icon={<FlightIcon />} label="Flight" value="2" />
                                <Tab icon={<HotelIcon />} label="Hotel" value="3" />
                                <Tab icon={<VisaIcon />} label="Visa" value="4" />
                                <Tab icon={<TourIcon />} label="Tour" value="5" />
                                <Tab icon={<BusIcon />} label="Bus" value="6" />
                                <Tab icon={<TrainIcon />} label="Train" value="7" />
                            </TabList>
                        </Box>
                        <TabPanel value="1"><HajjSearchContent /> <Button>Hello</Button></TabPanel>
                        <TabPanel value="2">
                            <FlightTab />
                        </TabPanel>

                        <TabPanel value="3">Hotel Content</TabPanel>
                        <TabPanel value="4">Visa Content</TabPanel>
                        <TabPanel value="5">Tour Content</TabPanel>
                        <TabPanel value="6">Bus Content</TabPanel>
                        <TabPanel value="7">Train Content</TabPanel>
                    </TabContext>
                </div>
            </div>
        </div>
    );
};

export default Banner;
