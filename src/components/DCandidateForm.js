import { FormControl, Button, Grid, TextField, withStyles, InputLabel, Select, MenuItem, FormHelperText} from '@material-ui/core'
import { ErrorSharp } from '@material-ui/icons'
import React,{ useState } from 'react'
import { ReactReduxContext } from 'react-redux'
import useForm from './useForm'

const styles = theme=>({
    root:{
        '& .MuiTextField-root':{
            margin: theme.spacing(1),
            minWidth: 230,
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
    },
    smMargin: {
        margin: theme.spacing(1),
     }
})

const initialFieldValues={
    fullName :'',
    mobile:'',
    email:'',
    age: '',
    bloodGroup:'',
   address:''
}

const DCandidateForm= ({classes, ...props}) => {

const validate = ()=>{
let temp={}
temp.fullName = values.fullName?"":"This field is required."
temp.mobile = values.mobile?"":"This field is required."
temp.bloodGroup = values.bloodGroup?"":"This field is required."
temp.email=(/^$|.+@.+..+./).test(values.email) ? "" :"Email is not valid."
setErrors({
    ...temp
})
return Object.values(temp).every(x=>x=="")

}

    const {
        values,
        setValues,
        errors, 
        setErrors,
        handleInputChange
    } = useForm(initialFieldValues)

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(()=>{
        setLabelWidth(inputLabel.current.offsetWidth);
    },[]);

const handleSubmit = e =>{
    e.preventDefault()
    if(validate()){
         window.alert('validation succeeded')
    }
}

    return (<form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
<Grid container>
    <Grid item xs={6}>
        <TextField 
        name="fullName"
        variant="outlined"
        label="Full name"
        value={values.fullName}
        onChange={handleInputChange}
        {...(errors.fullName && {error: true, helperText: errors.fullName})}
        />
         <TextField 
        name="email"
        variant="outlined"
        label="Email"
        value={values.email}
        onChange={handleInputChange}
        {...(errors.email && {error: true, helperText: errors.email})}
        />
       <FormControl variant="outlined"
       className={classes.formControl}
       {...(errors.bloodGroup && {error:true})}>
           <InputLabel ref={inputLabel}>Blood Group</InputLabel>
           <Select
           name="bloodGroup"
           value={values.bloodGroup}
           labelWidth = {labelWidth} 
           onChange={handleInputChange} >
               <MenuItem value="">Select blood group</MenuItem>
               <MenuItem value="B-">B-</MenuItem>
               <MenuItem value="A+">A+</MenuItem>
               <MenuItem value="O">O</MenuItem>
               <MenuItem value="O-">0-</MenuItem>
           </Select>
 {errors.bloodGroup && <FormHelperText>{errors.bloodGroup}</FormHelperText>}          


       </FormControl>
    </Grid>
    <Grid item xs={6}>
        <TextField 
            name="mobile"
            variant="outlined"
            label="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
        {...(errors.mobile && {error: true, helperText: errors.mobile})}
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
        <div>
            <Button 
            variant="contained"
            color="primary"
            type="submit"
            className={classes.smMargin}>
                Submit
            </Button>
            <Button 
            variant="contained"
            className={classes.smMargin}>
                Reset
            </Button>
        </div>
    </Grid>
</Grid>
    </form>);
}

export default withStyles(styles)(DCandidateForm);
