import React from 'react'

import {List, ListItem, IconButton, ListItemText} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {Stack, Checkbox} from '@mui/material';
// import { useState } from 'react';
// import TextField from '@mui/material/TextField';

const Todo = ({ id, title, description, completeTodo, editTodo, deleteTodo, isCompleted}) => {



    const handleComplete = (e) => {
    	completeTodo(id)
    }
    

    return (    

        <List>
            <ListItem divider disablePadding>
            <ListItem>
            <Stack direction="column">
                <ListItemText primary={title} />
                <ListItemText secondary={description} />
                {/* <TextField
                    
                    label="Title"
                    defaultValue={title}
                    variant="standard"
                />
                <TextField
                    label="Description"
                    defaultValue={description}
                    variant="standard"
                /> */}
            </Stack>
            </ListItem>
            <IconButton  onClick={() => deleteTodo(id)} edge="end" aria-label="delete">
                      <DeleteIcon />
            </IconButton>
            <Checkbox checked={isCompleted} onChange={() => handleComplete(id) } color="secondary" />
          </ListItem>

        </List>
    );
  };


export default Todo