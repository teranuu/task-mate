# Task Tracker / Manager

A simple command-line Task Tracker application that allows users to manage tasks efficiently. Tasks are stored locally in a JSON file, and all interactions are performed via command-line arguments.

This project focuses on core programming concepts such as file handling, command-line interfaces, and data persistence—without relying on external libraries or frameworks.

---

## Features

The application allows users to:

- Add a new task
- Update an existing task
- Delete a task
- Mark a task as **todo**, **in-progress**, or **done**
- List all tasks
- List tasks by status:
  - Done
  - Not done (todo)
  - In progress

---

## Task Properties

Each task is stored as a JSON object with the following fields:

- **id**: Unique identifier for the task  
- **description**: Short description of the task  
- **status**: Task status (`todo`, `in-progress`, `done`)  
- **createdAt**: Date and time when the task was created  
- **updatedAt**: Date and time when the task was last updated  

---

## Data Storage

- Tasks are stored in a `tasks.json` file in the current directory.
- The file is automatically created if it does not exist.
- All task data is persisted between runs.

---

## Usage

The application is executed from the command line using positional arguments.

### Examples

```bash
# Add a new task
task-cli add "Buy groceries"

# Update a task description
task-cli update 1 "Buy groceries and cook dinner"

# Delete a task
task-cli delete 1

# Mark a task as in progress
task-cli mark-in-progress 2

# Mark a task as done
task-cli mark-done 2

# List all tasks
task-cli list

# List tasks by status
task-cli list done
task-cli list todo
task-cli list in-progress
