# Design System Components

This directory contains shared design system components that ensure consistency across all Kanay frontend applications.

## Purpose

The design system provides:

- **Consistency**: Unified look and feel across all platforms
- **Reusability**: Components that can be shared and maintained centrally
- **Efficiency**: Faster development with pre-built, tested components
- **Maintainability**: Single source of truth for UI patterns

## Component Categories

Organize components into these categories as they are developed:

### Foundation
- Colors
- Typography
- Spacing
- Grid system

### Components
- Buttons
- Forms (inputs, selects, checkboxes, etc.)
- Cards
- Modals
- Navigation
- Tables
- Alerts/Notifications

### Layout
- Header
- Footer
- Sidebar
- Container

### Utilities
- Icons
- Loading states
- Error boundaries

## Usage Guidelines

1. **TypeScript**: All components must be fully typed
2. **Accessibility**: Follow WCAG 2.1 AA standards
3. **Documentation**: Include JSDoc comments for props and usage
4. **Testing**: Consider adding tests for complex interactions
5. **Performance**: Keep components lightweight and optimized

## Example Component Structure

```astro
---
/**
 * Button component from the Kanay design system
 * @param variant - Button style variant
 * @param size - Button size
 */
interface Props {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

const { 
  variant = 'primary', 
  size = 'medium',
  disabled = false 
} = Astro.props;
---

<button class={`btn btn-${variant} btn-${size}`} disabled={disabled}>
  <slot />
</button>

<style>
  /* Component styles */
</style>
```

## Syncing Across Projects

As the design system evolves, consider:

1. Creating a separate npm package for shared components
2. Using git submodules for simple sharing
3. Implementing a monorepo structure with shared packages
