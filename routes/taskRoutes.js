const express = require("express");
const taskRoutes = express.Router();
const taskController = require("../controllers/taskController");
const authToken = require("../middleware/authToken");
const authRoles = require("../middleware/authRole");

taskRoutes.post(
  "/tasks",
  authToken,
  authRoles(["worker"]),
  taskController.createTask
);

taskRoutes.post(
  "/tasks/:id/image",
  authToken,
  authRoles(["worker"]),
  taskController.addImage
);

taskRoutes.post(
  "/tasks/:id/messages",
  authToken,
  authRoles(["worker", "client"]),
  taskController.addMessage
);

taskRoutes.get(
  "/tasks",
  authToken,
  authRoles(["client", "worker"]),
  taskController.getTasks
);

taskRoutes.get(
  "/tasks/:id",
  authToken,
  authRoles(["client", "worker"]),
  taskController.getTasksById
);

taskRoutes.get(
  "/tasks/:id/messages",
  authToken,
  authRoles(["client", "worker"]),
  taskController.getMessages
);

taskRoutes.patch(
  "/tasks/:id",
  authToken,
  authRoles(["worker"]),
  taskController.updateTask
);

taskRoutes.delete(
  "/tasks/:id",
  authToken,
  authRoles(["admin"]),
  taskController.deleteTask
);

taskRoutes.delete(
  "/messages/:id",
  authToken,
  authRoles(["client", "worker"]),
  taskController.deleteMessage
);

module.exports = taskRoutes;
