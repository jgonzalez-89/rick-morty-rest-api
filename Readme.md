README
This repository includes a Dockerfile for Gitpod and some configuration files to set up a development environment for an example project.

Configuration
The .gitpod.Dockerfile file contains the Docker instructions to build the development environment. It installs the necessary dependencies and sets up the environment variables.

The following ports are exposed:

Port 3000 is set to public and will open the default browser when the workspace is started.
Port 3001 is set to public and will open a preview window when the workspace is started.
Port 5432 is set to ignore and will not open automatically.
Tasks
There are two tasks defined in the .gitpod.yml file:

The init task initializes the project. It copies the .env.example file to .env, installs dependencies, creates a database, installs an extension, runs a script to create database tables, and runs a Python script to display a greeting message.
The command task sets an environment variable, installs dependencies, and runs a Python script to display a greeting message.
Visual Studio Code
The esbenp.prettier-vscode extension is installed in the workspace to ensure consistent code formatting.