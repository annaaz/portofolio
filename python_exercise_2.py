class TaskManager:
    def __init__(self):
        self.tasks = {}

    def add_task(self, task_id, title):
        """Add a new task."""
        if not isinstance(task_id, int):
            raise TypeError("Task ID must be an integer.")

        if not isinstance(title, str) or not title.strip():
            raise ValueError("Task title must be a non-empty string.")

        if task_id in self.tasks:
            raise ValueError(f"Task with ID {task_id} already exists.")

        self.tasks[task_id] = {
            "title": title.strip(),
            "completed": False,
        }

    def remove_task(self, task_id):
        """Remove an existing task."""
        if task_id not in self.tasks:
            raise KeyError(f"Task with ID {task_id} does not exist.")

        del self.tasks[task_id]

    def mark_complete(self, task_id):
        """Mark a task as completed."""
        if task_id not in self.tasks:
            raise KeyError(f"Task with ID {task_id} does not exist.")

        self.tasks[task_id]["completed"] = True

    def list_pending_tasks(self):
        """Return all tasks that are not completed."""
        return [
            {
                "id": task_id,
                "title": task["title"],
            }
            for task_id, task in self.tasks.items()
            if not task["completed"]
        ]


if __name__ == "__main__":
    manager = TaskManager()

    try:
        manager.add_task(1, "Learn Python")
        manager.add_task(2, "Complete coding test")
        manager.add_task(3, "Review code")

        manager.mark_complete(1)

        print("Pending tasks:")
        for task in manager.list_pending_tasks():
            print(f"{task['id']}: {task['title']}")

        manager.remove_task(3)

    except (TypeError, ValueError, KeyError) as error:
        print(f"Error: {error}")
