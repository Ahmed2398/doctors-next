# Project Structure

This Next.js project follows a scalable and maintainable folder structure:

```
/src
├── /app                   # Next.js App Router
├── /components            # Shared UI components
│   ├── /ui                # Basic UI elements
│   ├── /forms             # Form components
│   ├── /navigation        # Navigation components
│   └── /feedback          # Loaders, alerts, etc.
├── /features              # Feature-based modules
│   ├── /auth              # Authentication feature
│   │   ├── /components    # Feature-specific components
│   │   ├── /hooks         # Custom hooks (e.g., useAuth.js)
│   │   ├── /services      # API calls related to auth
│   │   └── index.js       # Public exports
│   └── /appointments      # Appointments feature
├── /hooks                 # Global custom hooks
├── /lib                   # Utility functions, libraries
│   ├── /utils             # Helper functions
│   ├── /formatters        # Date, currency formatters
│   └── /validators        # Validation functions
├── /services              # Service layer (API clients)
├── /constants             # App-wide constants
└── /layouts               # App-level layouts
```

## Key Principles

1. **Feature-based organization**: Related code is grouped by feature or domain
2. **Separation of concerns**: Clear boundaries between UI, logic, and services
3. **Reusability**: Components and utilities organized for maximum reuse
4. **Discoverability**: Logical structure makes it easy to find code
5. **Scalability**: Structure can grow with the application's complexity

## Usage Guidelines

- **New features**: Create a new directory under `/features`
- **Shared components**: Place in `/components` with appropriate subdirectory
- **API calls**: Use the service layer in `/services` or feature-specific services
- **Global state**: Consider context providers in feature directories
- **Utility functions**: Add to `/lib` with appropriate categorization

See individual README files in each directory for more specific guidelines.
