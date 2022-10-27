import { useEffect } from 'react';
import { TodoList } from '../components/TodoList';

export const Home = () => {
    useEffect(() => {
        alert('Good job!')
        console.log('Congratulation!')
    },[])
    return (
        <>
            <h1 data-testid="page-title">Home</h1>
            <p>This is the list.</p>
            <TodoList />
            <h2>Blabla</h2>
        </>
    );
};
