import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  MenuItem,
} from '@mui/material';

const countries = ['India', 'USA', 'UK'];
const states = ['Maharashtra', 'Karnataka', 'Delhi'];

function AddressForm() {
  const [formData, setFormData] = useState({
    permanentAddress: {
      line1: '',
      line2: '',
      country: '',
      state: '',
      pincode: '',
      city: '',
    },
    localAddress: {
      sameAsPermanent: false,
      line1: '',
      line2: '',
      country: '',
      state: '',
      pincode: '',
      city: '',
    },
  });

  const handleChange = (e, section) => {
    const { name, value, checked, type } = e.target;

    if (name === 'sameAsPermanent') {
      const newLocal = checked
        ? { ...formData.permanentAddress, sameAsPermanent: true }
        : {
            sameAsPermanent: false,
            line1: '',
            line2: '',
            country: '',
            state: '',
            pincode: '',
            city: '',
          };

      setFormData((prev) => ({
        ...prev,
        localAddress: newLocal,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [name]: type === 'checkbox' ? checked : value,
        },
      }));
    }
  };

  const sharedTextFieldProps = {
    fullWidth: true,
    margin: 'normal',
  };

  const renderAddressFields = (section) => (
    <>
      <TextField
        label="Address Line 1"
        name="line1"
        value={formData[section].line1}
        onChange={(e) => handleChange(e, section)}
        {...sharedTextFieldProps}
      />
      <TextField
        label="Address Line 2"
        name="line2"
        value={formData[section].line2}
        onChange={(e) => handleChange(e, section)}
        {...sharedTextFieldProps}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} >
          <TextField
            select
            label="Country"
            name="country"
            value={formData[section].country}
            onChange={(e) => handleChange(e, section)}
            {...sharedTextFieldProps}
          >
            {countries.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            label="State"
            name="state"
            value={formData[section].state}
            onChange={(e) => handleChange(e, section)}
            {...sharedTextFieldProps}
          >
            {states.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Pincode"
            name="pincode"
            type="number"
            inputProps={{ maxLength: 6 }}
            value={formData[section].pincode}
            onChange={(e) => handleChange(e, section)}
            {...sharedTextFieldProps}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="City/Village"
            name="city"
            value={formData[section].city}
            onChange={(e) => handleChange(e, section)}
            {...sharedTextFieldProps}
          />
        </Grid>
      </Grid>
    </>
  );

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Residence / Permanent Address
      </Typography>
      {renderAddressFields('permanentAddress')}

      <Typography variant="h6" sx={{ mt: 4 }}>
        Correspondence / Local Address
      </Typography>

      <FormControlLabel
        control={
          <Checkbox
            name="sameAsPermanent"
            checked={formData.localAddress.sameAsPermanent}
            onChange={(e) => handleChange(e, 'localAddress')}
          />
        }
        label="Same as Permanent Address"
        sx={{ mb: 2 }}
      />

      {!formData.localAddress.sameAsPermanent && renderAddressFields('localAddress')}
    </Box>
  );
}

export default AddressForm;
