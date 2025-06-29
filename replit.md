# Trust Engine - Zero-Knowledge Provenance Stamp

## Overview
Trust Engine is a full-stack web3 startup application built with a modern tech stack combining React, Express, and PostgreSQL. The application features an early-2000s styled landing page for a blockchain protocol focused on digital asset provenance verification with zero-knowledge proofs.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theme management
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Animation**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL support
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions
- **Development**: tsx for TypeScript execution in development

### Database Strategy
- **Primary Database**: PostgreSQL with Neon serverless hosting
- **ORM**: Drizzle ORM for type-safe database operations
- **Migrations**: Drizzle Kit for schema migrations
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`

## Key Components

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/ui/  # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
├── server/           # Express backend API
├── shared/           # Shared TypeScript definitions
└── migrations/       # Database migration files
```

### Authentication & Authorization
- Basic user schema with username/password authentication
- In-memory storage implementation with interface for database integration
- Session-based authentication ready for implementation

### UI/UX Design System
- **Color Scheme**: Monochrome (#000, #111, #fff) with accent color (#00FFB3)
- **Typography**: IBM Plex font family (Sans, Serif, Mono)
- **Theme**: Early-2000s inspired design with retro aesthetics
- **Components**: Comprehensive UI component library with consistent styling

## Data Flow

### Client-Server Communication
- REST API endpoints prefixed with `/api`
- JSON-based request/response format
- React Query for efficient data fetching and caching
- Error handling with custom error boundaries

### Database Operations
- Type-safe database operations through Drizzle ORM
- Shared schema definitions for consistency
- PostgreSQL-specific dialect configuration
- Migration-based schema evolution

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@radix-ui/***: Accessible UI primitives
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **tailwindcss**: Utility-first CSS framework

### Development Dependencies
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for Node.js
- **drizzle-kit**: Database migration toolkit
- **@replit/vite-plugin-***: Replit-specific development plugins

## Deployment Strategy

### Build Process
- Frontend: Vite builds optimized static assets to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Single deployment artifact with both frontend and backend

### Environment Configuration
- `NODE_ENV` for environment detection
- `DATABASE_URL` for PostgreSQL connection
- Development vs production build configurations

### Development Workflow
- `npm run dev`: Start development server with hot reload
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run db:push`: Push database schema changes

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 29, 2025. Initial setup