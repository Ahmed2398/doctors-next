# Features Directory

This directory organizes code by features or domains of the application.

## Structure

Each feature has its own directory with the following sub-directories:

- `/components`: Components specific to this feature
- `/hooks`: Custom hooks used by this feature
- `/services`: API calls and data fetching for this feature
- `index.js`: Exports the public API of the feature

## Guidelines

- Feature folders should be self-contained and minimize dependencies on other features
- Code that's used by multiple features should be moved to shared directories
- Features can be nested if needed for complex domains
