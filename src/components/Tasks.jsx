
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addTask,
  deleteTask,
  updateTask,
  updateStatus
} from "../features/tasks/TaskSlice";

function Tasks() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a task title");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      dueDate,
      assignedTo,
      status: "To Do"
    };

    dispatch(addTask(newTask));

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDueDate("");
    setAssignedTo("");
  };

  const handleEdit = (task) => {
    const newTitle = prompt("Enter the updated task title:", task.title);

    if (newTitle && newTitle.trim()) {
      dispatch(
        updateTask({
          ...task,
          title: newTitle.trim()
        })
      );
    }
  };

  
return (
  <div className="mt-8 space-y-8">

    {/* Task Form */}
    <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Task Management
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Create and organise your team's tasks.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Task title
          </label>
          <input
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#2a9089] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            placeholder="Describe the task..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#2a9089] resize-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Priority
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-3 outline-none focus:ring-2 focus:ring-[#2a9089]"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Due date
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-3 outline-none focus:ring-2 focus:ring-[#2a9089]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Assigned to
            </label>
            <input
              type="text"
              placeholder="Team member"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-3 outline-none focus:ring-2 focus:ring-[#2a9089]"
            />
          </div>

        </div>

        <button
          type="submit"
          className="bg-[#2a9089] hover:bg-[#237c76] text-white font-medium px-6 py-3 rounded-lg transition-colors"
        >
          + Add Task
        </button>

      </form>
    </section>

    {/* All Tasks */}
    <section>
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-gray-800">
          All Tasks
        </h2>
        <span className="text-sm text-gray-500">
          {tasks.length} tasks
        </span>
      </div>

      {tasks.length === 0 ? (
        <div className="bg-white border border-dashed border-gray-300 rounded-xl p-10 text-center">
          <p className="text-gray-500">No tasks added yet.</p>
          <p className="text-sm text-gray-400 mt-1">
            Create your first task above.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start gap-4">

                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-800">
                    {task.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
                    {task.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-4 text-sm text-gray-500">
                    <span>Priority: {task.priority}</span>
                    <span>Due: {task.dueDate || "Not set"}</span>
                    <span>Assigned: {task.assignedTo || "Unassigned"}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 shrink-0">
                  <button
                    onClick={() => handleEdit(task)}
                    className="text-sm text-[#2a9089] hover:underline"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => dispatch(deleteTask(task.id))}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>

              </div>

              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
                <label className="text-sm text-gray-600">
                  Status:
                </label>

                <select
                  value={task.status}
                  onChange={(e) =>
                    dispatch(
                      updateStatus({
                        id: task.id,
                        status: e.target.value
                      })
                    )
                  }
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#2a9089]"
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

            </div>
          ))}
        </div>
      )}
    </section>

  </div>
);
}

export default Tasks;
