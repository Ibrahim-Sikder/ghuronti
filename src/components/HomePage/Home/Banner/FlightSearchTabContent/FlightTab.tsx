import React from 'react';
import ZRFAirportAutocomplete from './AuthoCompleteSearch';
import GHForm from '@/components/Forms/Form';
import { airports } from '@/constant';
import { FieldValues } from 'react-hook-form';
import { Button, Grid } from '@mui/material'; // Use the correct import path for MUI Grid

const FlightTab = () => {
    const onSubmit = (data: FieldValues) => {
        console.log('Form Data:', data);
    };

    const inputStyle = { width: '240px' }
    return (
        <GHForm onSubmit={onSubmit}>
            <Grid container spacing={2}> {/* Outer container with spacing */}
                <Grid item xs={12} md={3}> {/* Each field takes full width on small screens and 4/12 on medium */}
                    <ZRFAirportAutocomplete
                        name="departureAirport"
                        label="Departure Airport"
                        options={airports}
                        sx={inputStyle}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <ZRFAirportAutocomplete
                        name="arrivalAirport"
                        label="Arrival Airport"
                        options={airports}
                        sx={inputStyle}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <ZRFAirportAutocomplete
                        name="transitAirport"
                        label="Transit Airport"
                        options={airports}
                        sx={inputStyle}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <ZRFAirportAutocomplete
                        name="transitAirport"
                        label="Transit Airport"
                        options={airports}
                        sx={inputStyle}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Button>Submit</Button>
                </Grid>
            </Grid>
        </GHForm>
    );
};

export default FlightTab;
