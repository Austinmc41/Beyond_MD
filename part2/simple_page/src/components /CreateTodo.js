import { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import React from 'react'

// import {getAllTodos, 
//     getTodo,           
//     create,
//     update,
//     deleteTodo,
//     } from '../services/todoServices'  
    
const CreateTodo = ({create}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const addTodoHandler = e => {
		e.preventDefault()
        console.log(create)
		create({
			title,
			description,
			completed: "false",
		})
	}
    
    return (
    <Box mt={5}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
        >
        <TextField id="title" label="Title " variant="standard" onChange={e => setTitle(e.target.value)}/>
        <TextField id="description" label="Description" variant="standard" onChange={e => setDescription(e.target.value)} />
        <Button style={{maxHeight: '400px'}} variant="contained" color="success" onClick={addTodoHandler}>
                Create Todo
        </Button>
    </Box>
    )
}

export default CreateTodo