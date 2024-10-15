'use client'

import { useState } from 'react'
import { Pencil, Plus, Trash2 } from 'lucide-react'

export default function TodoList() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [editIndex, setEditIndex] = useState(-1)

  const handleAddTask = () => {
    if (task.trim()) {
      if (editIndex !== -1) {
        const newTasks = [...tasks]
        newTasks[editIndex] = task
        setTasks(newTasks)
        setEditIndex(-1)
      } else {
        setTasks([...tasks, task])
      }
      setTask('')
    }
  }

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  const handleEditTask = (index) => {
    setTask(tasks[index])
    setEditIndex(index)
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddTask}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-3 bg-gray-100 rounded-md"
          >
            <span className="text-gray-800">{task}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleEditTask(index)}
                className="p-1 text-blue-500 hover:text-blue-600 focus:outline-none"
              >
                <Pencil className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleRemoveTask(index)}
                className="p-1 text-red-500 hover:text-red-600 focus:outline-none"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}