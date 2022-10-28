import { TodoList } from '../components/TodoList';

export const Home = () => {
    return (
        <div>
            <h1 data-testid="page-title">Home</h1>
            <p>This is the list.</p>
            <TodoList />
        </div>
    );
};
