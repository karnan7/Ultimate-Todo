import React, { useState } from 'react'
import { Card, Input, DatePicker, Form, Select, Button } from 'antd';
import styled from 'styled-components';
import { MdOutlineClose } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/Todo/todoSlice';
import { v4 } from 'uuid';
import { toast } from 'react-hot-toast'

const { TextArea } = Input;
const dateFormat = 'DD/MM/YYYY';

const PopUp = ({modelOpen, setModelOpen}) => {

    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const[dueDate, setDueDate] = useState('');
    const[status, setStatus] = useState("Incomplete");

    const dispatch = useDispatch();

    const handleSubmit =(e) => {
        e.preventDefault();
        if(title && status && description){
            dispatch(addTodo({
                id: v4(),
                title,
                description,
                dueDate,
                status,
                time: new Date().toLocaleString(),
            }));
            toast.success('Task added successfully')
            setModelOpen(false)
        }else{
            toast.error("Title and description shouldn't be empty")
        }
    }
return (
        <Wrap>
            {modelOpen && (
            <> 
            <MdOutlineClose 
            className='close'
            style={{
                fontSize:'25px',
                backgroundColor:'#333',
                padding: '5px',
                borderRadius: '5px',
                margin: '5px 0px 8px 665px',
                }}
            onClick={() => {
                setModelOpen(false)
            }}    
            />
            <Card
            title ="Add The Task"
            style={{width: 700,
                height: '400px', 
                border: 'none',
                color: '#fff',
                backgroundColor: '#333',
                boxShadow:' 0px 0px 20px 5px rgba(0,0,0,0.5)',
            }}>
            <Form>
                <Form.Item
                rules={[
                    {
                    required: true,
                    message: 'Please input your username!',
                    },
                ]}
                >
                <Input 
                placeholder='Title' 
                size='large' 
                style={{
                    backgroundColor: '#333',
                    color: '#fff'
                }}
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
                />
                </Form.Item>

                <Form.Item>
                    <TextArea 
                    style={{
                        backgroundColor: '#333',
                        color: '#fff'
                    }}
                    rows={4}
                     placeholder="Description ( maxLength is 100 )" 
                     maxLength={100} 
                     value={description}
                     onChange={(e) => [
                        setDescription(e.target.value)
                     ]}
                     />
                </Form.Item>

                <Form.Item>
                    <DatePicker
                        placeholder='Due Date'
                        onChange={(date, dateString) => {
                            setDueDate(dateString)
                        }}
                        format={dateFormat}
                    />
                    <Select
                    defaultValue="status"
                    value={status}
                     onChange={(e) => [
                        setStatus(e.target.value)
                     ]}
                    style={{
                        width: 180,
                        marginLeft: 50,
                    }}
                    options={[
                        {
                        value: 'Complete',
                        label: 'Complete',
                        },
                        {
                        value: 'Incomplete',
                        label: 'Incomplete',
                        },
                    ]}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit"
                    onClick={handleSubmit}
                    style={{
                        fontSize: '15px',
                        height: '40px',
                        width: '100px',
                    }}
                    >
                        Add
                    </Button>
                    <Button type="primary" htmlType="submit"

                    style={{
                    backgroundColor: '#CDCDE0',
                    color: "#777689",
                    marginLeft: 20,
                    fontSize: '15px',
                    height: '40px',
                    width: '100px',
                    }}

                    onClick={() => {
                        setModelOpen(false)
                    }}   
                    >
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
            </Card>
            </>
            )}
        </Wrap>

  )
}

export default PopUp;

const Wrap = styled.div`
    display: grid;
    place-content: center;
    height: 60vh;

    Input::placeholder,
    TextArea::placeholder{
        color: #fff;
        opacity: 0.5;
    }
    .close{
        color: #fff;
        &:hover{
            color:red;
            transition: all 250ms;
        }
    }
`
