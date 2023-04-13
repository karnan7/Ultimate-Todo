import React from 'react'
import { format } from 'date-fns';
import { Table } from 'antd';
import { selectTodo } from '../features/Todo/todoSlice';
import { useSelector } from 'react-redux';
const {Column} = Table;

const TodoItem = () => {
    const todos = useSelector(selectTodo);

    const data = todos.map((todo) => ({
        key: todo.id,
        Date: format (new Date(todo.time), 'p, dd/MM/yyyy'),
        Status: todo.status,
        Title: todo.title,
        Description: todo.description,
        Deadline: todo.dueDate,
      }))
      console.log(data);

  return (
    <Table  dataSource={data} pagination={false}>
        <Column title='Date' dataIndex='Date' key='Date' width='80px'/>
        <Column title="Status" dataIndex="Status" key="Status"  width='10px'> 
            
        </Column>
        <Column title="Title" dataIndex="Title" key="Title"  width='200px'/>
        <Column title='Description' dataIndex="Description" key="Description" width='200px'/>
        <Column title="Deadline" dataIndex="Deadline" key="Deadline" width='200px'></Column>
    </Table>
  )
}

export default TodoItem;