import React, {useState} from 'react'
import { Button } from 'antd';
import styled from 'styled-components';
import PopUp from './PopUp';

const AppHeader = () => {
    const[modelOpen, setModelOpen] = useState(false);
  return (
    <Clicks>
        <Button 
        className='add-btn'
        onClick={() =>{
            setModelOpen(true)
        }}
        >Add Task</Button>
        <PopUp type="add" modelOpen={modelOpen} setModelOpen={ setModelOpen} />
    </Clicks>
    
    
  )
}

export default AppHeader;

const Clicks = styled.div`
    position: relative;
    height: 60px;
    z-index: 99;
    Button{
        background-color: #4EA8DE;
        color: #fff;
        font-weight: bold;
        font-size:20px;
        height: 50px;
        width: 150px;
        border: none;

        &:hover{
            background-color: transparent;
            border: 1px solid;
        }
    }
    .add-btn{
        position: absolute;
        top: -25px;
        left: 50%;
    }
    
`


// #5E60CE