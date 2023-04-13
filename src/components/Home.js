import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import { selectTodo } from '../features/Todo/todoSlice'



const Home = () => {
    const todoList = useSelector(selectTodo)
    const sortedTodoList = [...todoList];
    sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  return (
    <Main>
        {(sortedTodoList && sortedTodoList.length > 0) ? (
            sortedTodoList.map((todo) => (
                    <TodoItem key={todo.id} todo={todo}/>
            ))
        ): 'nothing'}
    </Main>
  )
}

export default Home

const Main = styled.main`
    color: #fff;
    min-height: calc(100vh - 200px);
`