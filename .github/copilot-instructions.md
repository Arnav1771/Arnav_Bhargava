# AI Agent Instructions for Portfolio Project

This document provides essential guidance for AI agents working with this React-based portfolio project.

## Project Architecture

- **Framework**: React with Create React App
- **Styling**: Styled Components + Material-UI (MUI)
- **Routing**: React Router v6
- **Key Components**:
  - `src/App.js`: Main app container with theme switching and routing
  - `src/Components/`: Reusable UI components
  - `src/Pages/`: Page components for different routes
  - `src/styles/`: Global styles and theme definitions

## Theme System

The project uses a custom theme system with light/dark modes:
- Theme variables defined in `src/styles/GlobalStyle.js`
- Theme switching handled in `App.js` using React state
- Colors and styles accessed via CSS variables (e.g., `var(--primary-color)`)

Example usage:
```javascript
color: var(--font-light-color);
background-color: var(--background-dark-color);
```

## Component Patterns

1. **Styled Components**: Each component typically has its own styled wrapper
   ```javascript
   const ComponentStyled = styled.div`
     // Component-specific styles
   `;
   ```

2. **Page Structure**: Pages are wrapped in `MainContentStyled` from `App.js`

3. **Responsive Design**:
   - Sidebar collapses into hamburger menu at 1200px
   - Font sizes adjust at 502px breakpoint

## Development Workflow

1. **Local Development**:
   ```bash
   npm start  # Runs dev server at http://localhost:3000
   ```

2. **Building for Production**:
   ```bash
   npm run build  # Creates optimized build in /build
   ```

3. **Deployment**:
   - Project is configured for GitHub Pages
   - Deploy branch should be set in repository settings

## File Organization

- Place new components in appropriate directories:
  - UI components → `src/Components/`
  - Page components → `src/Pages/`
  - Data files → `src/data/`
  - Images → `src/img/`

## Common Tasks

1. **Adding a New Page**:
   - Create page component in `src/Pages/`
   - Add route in `App.js` Routes component
   - Update navigation in `Components/SideBar.js`

2. **Styling Guidelines**:
   - Use theme variables for colors/spacing
   - Include mobile-responsive styles
   - Follow existing component structure with styled-components

3. **Asset Management**:
   - Place images in `src/img/` subdirectories by type
   - Use relative imports for assets