import { FormControl, Grid, TextField, withStyles, InputLabel, Select, MenuItem} from '@material-ui/core'
import React,{useState} from 'react'
import useForm from './useForm'

const styles = theme=>({
    root:{
        '& .MuiTextField-root':{
            margin: theme.spacing(1),
            minWidth: 230,
        }
    },
})

const initialFieldValues={
    fullName :'',
    mobile:'',
    email:'',
    age: '',
    bloodGroup:'',
   address:''
}

const DCandidateForm= ({classes,...props}) => {

    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFieldValues)

    return (<form autoComplete="off" noValidate className={classes.root}>
<Grid container>
    <Grid item xs={6}>
        <TextField 
        name="fullName"
        variant="outlined"
        label="Full name"
        value={values.fullName}
        onChange={handleInputChange}
        />
         <TextField 
        name="email"
        variant="outlined"
        label="Email"
        value={values.email}
        onChange={handleInputChange}
        />
       <FormControl variant="outlined">
           <InputLabel>Blood Group</InputLabel>
           <Select
           name="blopdGroup"
           value={values.bloodGroup}
           onChange={handleInputChange}>
               
               <MenuItem value="">Select blood group</MenuItem>
               <MenuItem value="B-">B-</MenuItem>
               <MenuItem value="A+">A+</MenuItem>
               <MenuItem value="O">O</MenuItem>
               <MenuItem value="O-">0-</MenuItem>
           </Select>
          


       </FormControl>
    </Grid>
    <Grid item xs={6}>
        <TextField 
            name="mobile"
            variant="outlined"
            label="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
            />
            <TextField 
        name="age"
        variant="outlined"
        label="Age"
        value={values.age}
        onChange={handleInputChange}
        />
        <TextField 
        name="address"
        variant="outlined"
        label="Address"
        value={values.address}
        onChange={handleInputChange}
        />
    </Grid>
</Grid>
    </form>);
}

export default withStyles(styles)(DCandidateForm);
