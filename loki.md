# Python DSA PDF Library

## Overview

This is a PDF document management application that allows users to upload, view, download, and delete PDF files. The application is built with Python Flask for the backend, serving a traditional HTML/CSS frontend with Jinja2 templating. The project also contains scaffolding for a React/TypeScript frontend that is not currently in use.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Backend Architecture
- **Framework**: Python Flask serves as the primary web framework
- **Entry Point**: The application runs through `app.py`, which is launched via the Node.js bridge in `server/index.ts`
- **File Storage**: PDFs are stored locally in an `uploads/` directory with a 16MB file size limit
- **Templating**: Jinja2 templates render the HTML pages from the `templates/` directory
- **Static Assets**: CSS styles served from the `static/` directory

### Key Design Decisions

1. **Flask as Primary Backend**: The application uses Flask for its simplicity in handling file uploads and serving static content, making it ideal for a straightforward document library.

2. **Node.js Bridge Pattern**: The `server/index.ts` file spawns the Python Flask process, allowing the Replit environment to use npm scripts while running a Python application.

3. **Local File Storage**: Files are stored directly on the filesystem rather than in a database or cloud storage, keeping the architecture simple for a small-scale PDF library.

4. **Unused React Scaffold**: The repository contains a full React/TypeScript frontend scaffold with shadcn/ui components, Drizzle ORM, and PostgreSQL configuration, but the active application uses Flask templates instead.

### Directory Structure
- `app.py` - Main Flask application with routes for upload, view, download, delete
- `templates/` - Jinja2 HTML templates
- `static/` - CSS stylesheets
- `uploads/` - PDF file storage (created at runtime)
- `client/` - Unused React frontend scaffold
- `server/` - Node.js bridge to run Flask

## External Dependencies

### Active Dependencies (Flask Application)
- **Flask**: Web framework for Python
- **Werkzeug**: WSGI utilities for secure file handling

### Inactive/Scaffold Dependencies
- **PostgreSQL**: Database configured in `drizzle.config.ts` but not actively used
- **Drizzle ORM**: Schema defined in `shared/schema.ts` with a users table
- **shadcn/ui**: React component library configured but not in use
- **React Query**: Data fetching library configured in the scaffold
- **Vite**: Build tool configured for the React frontend

### Environment Variables
- `DATABASE_URL`: Required by Drizzle configuration but not used by the active Flask application
