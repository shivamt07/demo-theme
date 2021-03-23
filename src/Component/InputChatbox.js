import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SendIcon from '@material-ui/icons/Send';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    // textField: {
    //     width: '50ch',
    // },
}));

export default function InputAdornments(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    //   const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    //   };

    const [message, setMessage] = React.useState("");

    const messenger = () => {
        props.messageHandler(message)
        setMessage("")
    };



    return (
        // <div className={classes.root}>
        //     <div>

                <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
                    <FilledInput
                      onKeyPress={(ev) => {
                        console.log(`Pressed keyCode `,ev.key);
                        if (ev.key === 'Enter') {
                            messenger()
                       
                        }
                      }}
                        id="filled"
                        value={message}
                        onChange={event => setMessage(event.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                    onClick={messenger}
                                >
                                    <SendIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

        //     </div>
        // </div>
    );
}
