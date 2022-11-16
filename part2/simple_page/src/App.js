import Launches from "./components /Launches";
import {Typography
}
from "@mui/material";
import http from "./http-common";

import {useState, useEffect} from "react";
import CreateTodo from "./components /CreateTodo";


import Todo from "./components /Todo";
import Box from '@mui/material/Box';


function App() {
  const [todos, setTodos] = useState([]);
  const [quote, setQuote] = useState([]);


  const getAllTodos = async () => {
		try {
			const response = await http.get('/todos/')
			const { data } = response
			data.sort(function (a, b) {
				return a.id - b.id;
			  });
			setTodos(data)
		} catch (err) {
			console.log(err)
		}
	}

	const getRandomQuote = async () => {
		try {
			const response = await http.get('/quotes/')
			const { data } = response
			const randomIndex = Math.floor(Math.random() * data.length);
			// get random item
			const randomQuote = data[randomIndex];
			console.log(randomQuote)
			setQuote(randomQuote)
		} catch (err) {
			console.log(err)
		}
	}

  useEffect(() => {
      getAllTodos()
      .then((result)=> {
          setTodos(result.data)
      });

  },[]);

  useEffect(() => {
	getRandomQuote()
	.then((result)=> {
		console.log(result.data)
	});

  },[]);

  const create = async newTodo => {
		try {
			await http.post('/todos/', newTodo)
			getAllTodos()
		} catch (err) {
			console.log(err)
		}
	}

	const completeTodo = async id => {
		try {
			const todo = todos.filter(todo => todo.id === id)[0]
			todo.completed = !todo.completed
			await http.put(`/todos/${id}/`, todo)
			getAllTodos()
		} catch(err) {
			console.log(err)
		}
	}

	const editTodo = async todo => {
		try {
			await http.put(`/todos/${todo.id}/`, todo)
			getAllTodos()
		} catch(err) {
			console.log(err)
		}
	}

	const deleteTodo = async id => {
		try {
			await http.delete(`/todos/${id}/`)
			getAllTodos()
		} catch(err) {
			console.log(err)
		}
	}

  return (
    <div className="container body">
        <Typography variant="h1" color="white">Hello beyondMD!</Typography>
        <Typography sx={{textDecoration:"underline"}} variant="h2" color="white">Experience</Typography>
          <iframe width="40%" height={500} id="myPDF "title="resume" src="Resume_mr.pdf"></iframe>
		  <Typography mt={5} color="white" variant="body1" gutterBottom>
		   " {quote.text} "
     	 </Typography>
		  <Typography mt={2} color="white" variant="body1" gutterBottom>
		    - {quote.author}
     	 </Typography>
		<Typography mt={10} sx={{textDecoration:"underline"}} color="white" variant="h2">TODO LIST</Typography>
        	<CreateTodo create={create}/>
        <Box sx={{textAlign: 'center', width:500 }} mt={2} mb={0}>
              {todos.map((todo, index) => (
                <Todo key={index} id={todo.id} title={todo.title} description={todo.description} completeTodo={completeTodo} editTodo={editTodo} deleteTodo={deleteTodo} isCompleted={todo.completed} />
              ))}
        </Box>
        <Launches/>
    </div>
  );
}

export default App;
