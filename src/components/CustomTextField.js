import React from 'react';
import FixedTextField from './FixedTextField'
import {
    withStyles
} from '@material-ui/core/styles';
const CssTextField = withStyles({
    root: {
        '& label': {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            // fontSize: '150%',
            alignItems: 'center',
            textAlign: 'center',

            color: ' #fff',
            transform: 'translate(22px, 16px) scale(1)'
        },

        '& label.Mui-focused': {
            color: ' #fff',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#fff',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '1px solid #fff',
                borderRadius: '10px'
            },
            '&:hover fieldset': {
                borderColor: ' #fff',
            },
            '&.Mui-focused fieldset': {
                borderColor: ' #fff',
            },
        },
    },
})(FixedTextField);

export default CssTextField;