# Node.js Express Server: Silent Port Conflict

This repository demonstrates an uncommon error in a Node.js Express.js application. The issue revolves around a port conflict that may not always produce a clear or immediately obvious error message.

## The Bug

The `bug.js` file contains a simple Express.js server that attempts to listen on port 3000.  If this port is already in use by another process (e.g., another instance of the server or a different application), the server may fail to start without providing a very clear error message.

## The Solution

The `bugSolution.js` file shows how to improve error handling. We use a `try...catch` block to handle potential errors when the server attempts to listen on the specified port. This helps in providing more informative error messages to the developer.