import { useState, useRef, useEffect } from 'react'
import styled from "styled-components";
import AddButton from '../components/homepage/AddButton';
import Header from '../components/homepage/Header';
import InputComp from '../components/homepage/InputComp';
import ListComp from '../components/homepage/ListComp';
import { getCurTimeStamp } from '../static/helpers/helperFunctions';

const StyledDiv = styled.div`
width: 100%;
margin: 0 auto;
background-color: #FFFFFF;
padding: 3.25em;

.styledError{
padding: 0.7em;
margin-top: 0.5em;
color: red;
background-color: #ffe6e6;
}

.styledEmptyList{
    padding: 0.7em;
    margin-top: 0.5em;
    text-align: center;
    background-color: #e9fbf3;
    color: #24c27b;
}

@media(min-width: 37.5em) {
    max-width: 31.25em;
}
`;

const StyledListDiv = styled.div`
height: 33em;
padding: 0.2em 0;
overflow-y: auto;


::-webkit-scrollbar {
    width: 6px;
}
 
::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
}
 
::-webkit-scrollbar-thumb {
    background-color: var(--contrast-color);
    border-radius: 100px;
}
`;

const TodoHome = () => {

    const initialLoadFunction = () => {
        const savedTodos = localStorage.getItem("todos");

        var isSameDay = function (date: Date, otherDate: Date) {
            return date.toDateString() === otherDate.toDateString();
        };

        // const TimeStampAreOnSameDay = (d1, d2) => d1.setHours(0, 0, 0, 0) === d2.setHours(0, 0, 0, 0);

        if (savedTodos && JSON.parse(savedTodos).length) {

            // Old logic. Ignore this
            /*
            const tempObjList = [];
            const todayTodos =localStoragObj.map((obj) => {
                const date = new Date(obj.createdAt);
                let data;
                console.log(isSameDay(date, getCurTimeStamp()));
                if (isSameDay(date, getCurTimeStamp())) {
                    // tempObjList.push(obj);
                    data = obj;
                }
                return data;
            });

            return todayTodos !== null ? todayTodos : [];
            */

            const localStoragObj = JSON.parse(savedTodos);

            console.log(localStoragObj);    

            const date = new Date(localStoragObj[0].createdAt);

            if (isSameDay(date, getCurTimeStamp())) {
                return localStoragObj;
            }
            else {
                localStorage.clear();
                return [];
            }

        } else {
            return [];
        }
    }

    // all States, Refs and Effects
    const [isInputVisible, setInput] = useState<boolean>();
    const [todos, setTodos] = useState(initialLoadFunction);
    const [error, setError] = useState<string | null>();
    const inputRef = useRef<HTMLInputElement>(null);
    
    interface todoType { id: number; title: string | undefined; isDone: boolean; createdAt: Date; }
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // Function to handle button click
    const handleClick = () => {
        setInput(!isInputVisible);
    }

    // Button to handle keyboard keypress
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement> ) : void => {
        if (e.key === 'Enter') {
            const userInput = inputRef?.current?.value;
            if (userInput?.length !== 0) {
                const todo:todoType = {
                    id: todos.length + 1, // with a random unique ID
                    title: userInput,
                    isDone: false,
                    createdAt: getCurTimeStamp(),
                };

                setTodos([...todos, todo]);
                setInput(!isInputVisible);
                error && setError(null);
            } else {
                setError(
                    "Please Enter the valid Todo"
                );
                return;
            }
        }
        else if (e.key === 'Escape') {
            setInput(!isInputVisible);
            error && setError(null);
        }
        else {
            return;
        }
    }

    // function to handle if task's state(completed or not. The checkbox)
    const handleCompletedTask = (obj: { id: string; }) => {
        var foundIndex = todos.findIndex((x: { id: string; }) => x.id === obj.id);
        let updatedList;
        const existingTodoTask = todos[foundIndex];

        if (existingTodoTask) {
            const updatedTask = {
                ...existingTodoTask,
                isDone: !existingTodoTask.isDone,
            }
            updatedList = [...todos];
            updatedList[foundIndex] = updatedTask;
        }
        setTodos(updatedList);
    }

    return (
        <StyledDiv>
            <Header />
            <StyledListDiv>
                {todos.length !== 0 ? todos.map((obj: todoType) => {
                    return <ListComp obj={obj} handleCompletedTask={handleCompletedTask} />
                }) : <div className="styledEmptyList">Empty To Do List</div>}
            </StyledListDiv>
            {isInputVisible && <InputComp handleKeyPress={handleKeyPress}
                inputRef={inputRef}
            />}
            {error && <div className='styledError'>{error}</div>}
            {!isInputVisible && <AddButton handleClick={handleClick} />}
        </StyledDiv>
    )
}

export default TodoHome