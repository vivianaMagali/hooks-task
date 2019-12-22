import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

const SaveTask = ({ saveTodo }) => {
    const [value, setValue] = useState('');

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                saveTodo(value);
                setValue('');
            }}>

            <TextField
                variant="outlined"
                placeholder="Add task"
                margin="normal"
                onChange={(event) => {
                    setValue(event.target.value);
                }}
                value={value}
            />
        </form>
    );
};
export default SaveTask;