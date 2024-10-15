import TodoList from '@/components/Todo';

export default function TodoPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">To-Do List</h1>
      <TodoList />
    </div>
  );
}