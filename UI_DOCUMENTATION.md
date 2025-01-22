# Portfolio Creamsicle UI Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [Core Components](#core-components)
4. [UI Customization Guide](#ui-customization-guide)
5. [Dependencies](#dependencies)
6. [Animation System](#animation-system)
7. [Styling System](#styling-system)
8. [Case Study System](#case-study-system)
9. [Layout Customization Guide](#layout-customization-guide)
10. [Case Study Layout Customization](#case-study-layout-customization)

## Project Overview

Portfolio Creamsicle is a Next.js-based portfolio website with smooth animations and a modern UI. The project uses:
- Next.js 13+ (App Router)
- Tailwind CSS for styling
- Framer Motion for animations
- TypeScript for type safety

## Project Structure

```
portfolio-creamsicle/
├── public/                        # Static assets
│   ├── case-studies/             # Case study images
│   │   ├── apploi/              # Apploi case study assets
│   │   │   ├── frame1.png
│   │   │   ├── frame2.png
│   │   │   ├── ...
│   │   │   ├── hero.png
│   │   │   └── preview.png
│   │   └── umba/                # Umba case study assets
│   │       ├── preview.png
│   │       ├── umba_image_frame_1.png
│   │       └── ...
│   ├── dendenlogo.svg           # Site icons and logos
│   ├── file.svg
│   ├── globe.svg
│   └── window.svg
├── src/                         # Source code
│   ├── app/                     # Next.js app router pages
│   │   ├── case-study/         # Case study routes
│   │   │   └── [slug]/         # Dynamic case study pages
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/             # React components
│   │   ├── case-study/         # Case study components
│   │   │   ├── CaseStudy.tsx
│   │   │   ├── CaseStudyContainer.tsx
│   │   │   ├── CaseStudyContent.tsx
│   │   │   ├── CaseStudyFrame.tsx
│   │   │   ├── CaseStudyPreview.tsx
│   │   │   └── CaseStudySection.tsx
│   │   ├── effects/            # Animation components
│   │   │   └── ScrollProgress.tsx
│   │   ├── hero/               # Hero section
│   │   │   └── Hero.tsx
│   │   ├── navigation/         # Navigation components
│   │   │   └── Navigation.tsx
│   │   └── shared/             # Shared components
│   │       └── Button.tsx
│   ├── lib/                    # Utilities and data
│   │   └── case-studies/       # Case study content
│   │       ├── apploi.ts
│   │       └── umba.ts
│   ├── styles/                 # Additional styles
│   └── types/                  # TypeScript types
│       └── case-study.ts
├── .eslintrc.json             # ESLint configuration
├── next.config.js             # Next.js configuration
├── package.json               # Project dependencies
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration

### Key Files and Their Purposes

1. **Configuration Files**
   - `next.config.js`: Next.js configuration and build settings
   - `tailwind.config.js`: Tailwind CSS theme and plugin settings
   - `postcss.config.js`: PostCSS plugins configuration
   - `tsconfig.json`: TypeScript compiler options

2. **Core Components**
   - `src/app/page.tsx`: Main landing page
   - `src/app/layout.tsx`: Root layout with metadata and providers
   - `src/components/hero/Hero.tsx`: Hero section component
   - `src/components/navigation/Navigation.tsx`: Navigation bar

3. **Case Study System**
   - `src/app/case-study/[slug]/page.tsx`: Dynamic case study pages
   - `src/components/case-study/*.tsx`: Case study components
   - `src/lib/case-studies/*.ts`: Case study data files
   - `public/case-studies/`: Case study images and assets

4. **Styling**
   - `src/app/globals.css`: Global styles and Tailwind imports
   - `src/styles/`: Additional style utilities
   - `tailwind.config.js`: Theme customization

5. **Type Definitions**
   - `src/types/case-study.ts`: Case study type definitions
   - `tsconfig.json`: TypeScript configuration

## Core Components

### 1. Page Layout (`src/app/page.tsx`)
The main page component that handles:
- Overall layout structure
- Scroll-based navigation
- Case study transitions
- Animation orchestration

Key UI Elements:
```tsx
<div className="h-screen">              // Main container
  <div className="bg-neutral-900">      // Background
    <main>                              // Content wrapper
      <Navigation />                    // Navigation component
      <Hero />                          // Hero section
      <CaseStudyPreview />             // Case study previews
    </main>
  </div>
</div>
```

### 2. Navigation (`src/components/navigation/Navigation.tsx`)
Navigation bar with:
- Logo
- Social links
- Responsive menu

Customization Points:
- Colors in Tailwind classes
- Link destinations in component props
- Menu items in component state

### 3. Hero Section (`src/components/hero/Hero.tsx`)
Landing section with:
- Main heading
- Subheading
- CTA buttons

Customization Points:
- Text content in component
- Button styles in Tailwind classes
- Animation timings in Framer Motion props

### 4. Case Study Preview (`src/components/case-study/CaseStudyPreview.tsx`)
Case study display with:
- Preview image
- Title and description
- Category tags
- Transition animations

## UI Customization Guide

### Colors
Colors are defined in `tailwind.config.js`:
```js
colors: {
  'neutral-900': '#171717',
  'inverse-primary': '#FF7F50', // Creamsicle orange
  // Add your custom colors here
}
```

### Typography
Font settings in `tailwind.config.js`:
```js
fontFamily: {
  sans: ['var(--font-inter)'],
  // Add custom fonts here
}
```

### Spacing
Key spacing classes used:
- `p-6`: Standard padding
- `px-20`: Horizontal container padding
- `py-10`: Vertical container padding
- `gap-4`: Standard gap between elements

### Animations
Framer Motion animations in components:
1. Page Transitions:
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
```

2. Scroll Animations:
```tsx
<motion.div
  initial={{ y: 50 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.6 }}
>
```

## Layout Customization Guide

### Common Layout Properties

#### 1. Padding and Margins
```tsx
// Main container padding
className="p-6"         // All sides: 1.5rem (24px)
className="px-20"       // Left/Right: 5rem (80px)
className="py-10"       // Top/Bottom: 2.5rem (40px)

// Individual side padding
className="pt-4"        // Top padding
className="pr-4"        // Right padding
className="pb-4"        // Bottom padding
className="pl-4"        // Left padding

// Responsive padding
className="p-4 md:p-6 lg:p-8"  // Increases with screen size

// Margins work the same way
className="m-4"         // All sides margin
className="mx-auto"     // Center horizontally
className="my-4"        // Top/Bottom margin
```

#### 2. Spacing and Gaps
```tsx
// Flex and Grid gaps
className="gap-4"       // 1rem (16px) gap all directions
className="gap-x-4"     // Horizontal gap
className="gap-y-4"     // Vertical gap

// Space between elements
className="space-x-4"   // Horizontal space between children
className="space-y-4"   // Vertical space between children

// Common locations:
// 1. CaseStudyPreview.tsx - Card spacing
className="flex flex-col gap-4"

// 2. Navigation.tsx - Nav items
className="flex items-center gap-6"

// 3. Hero.tsx - Content spacing
className="space-y-8"
```

#### 3. Flex Layout
```tsx
// Container
className="flex"              // Enable flexbox
className="flex-col"          // Vertical stack
className="flex-row"          // Horizontal row (default)
className="flex-wrap"         // Allow wrapping

// Alignment
className="items-center"      // Vertical center
className="items-start"       // Top align
className="items-end"         // Bottom align
className="justify-center"    // Horizontal center
className="justify-between"   // Space between items
className="justify-end"       // Right align

// Common combinations
className="flex items-center justify-between"  // Centered row with space between
className="flex flex-col items-center"         // Centered vertical stack
```

#### 4. Visibility and Display
```tsx
// Hide elements
className="hidden"            // Remove from layout
className="invisible"         // Hide but keep space
className="opacity-0"         // Transparent but interactive

// Responsive visibility
className="hidden md:block"   // Hide on mobile, show on tablet+
className="md:hidden"         // Show on mobile, hide on tablet+

// Common use cases:
// 1. Mobile menu toggle
className="block md:hidden"   // Only show on mobile

// 2. Desktop navigation
className="hidden md:flex"    // Only show on desktop

// 3. Conditional content
className={`${isVisible ? 'block' : 'hidden'}`}
```

### Key Component Layout Examples

#### 1. Main Page Layout (`src/app/page.tsx`)
```tsx
// Main container
<div className="h-screen w-full bg-neutral-900">
  {/* Padding animation container */}
  <motion.div className="w-full h-full relative p-20">
    {/* Main content area */}
    <main className="w-full h-full rounded-3xl relative overflow-hidden">
```
Customization points:
- `p-20`: Adjust overall page padding
- `rounded-3xl`: Change border radius
- `overflow-hidden`: Control content overflow

#### 2. Navigation Layout (`src/components/navigation/Navigation.tsx`)
```tsx
<nav className="flex items-center justify-between p-6">
  <div className="flex items-center gap-6">
    {/* Navigation items */}
  </div>
</nav>
```
Customization points:
- `p-6`: Adjust navigation padding
- `gap-6`: Change spacing between items
- `items-center`: Modify vertical alignment

#### 3. Hero Section Layout (`src/components/hero/Hero.tsx`)
```tsx
<div className="flex flex-col gap-8 md:gap-12">
  <div className="space-y-4">
    {/* Hero content */}
  </div>
</div>
```
Customization points:
- `gap-8`: Adjust section spacing
- `space-y-4`: Modify text spacing
- `md:gap-12`: Change tablet/desktop spacing

### Layout Breakpoints

Our responsive breakpoints:
```tsx
sm: '640px'   // Small devices (phones)
md: '768px'   // Medium devices (tablets)
lg: '1024px'  // Large devices (laptops)
xl: '1280px'  // Extra large (desktop)
2xl: '1536px' // Extra extra large
```

Usage examples:
```tsx
// Mobile-first responsive design
className="flex-col md:flex-row"        // Stack on mobile, row on tablet+
className="p-4 md:p-6 lg:p-8"          // Increasing padding with screen size
className="gap-4 md:gap-6 lg:gap-8"    // Increasing gaps with screen size
```

### Common Layout Patterns

#### 1. Centered Content
```tsx
className="flex items-center justify-center"  // Center both ways
className="mx-auto"                          // Center horizontally
className="text-center"                      // Center text
```

#### 2. Responsive Stacking
```tsx
className="flex flex-col md:flex-row"        // Stack vertically on mobile
className="grid grid-cols-1 md:grid-cols-2"  // Single column to two columns
```

#### 3. Fixed Aspect Ratio
```tsx
className="aspect-video"                     // 16:9 ratio
className="aspect-square"                    // 1:1 ratio
```

### Tips for Layout Changes

1. **Start Mobile-First**
   - Begin with mobile layout
   - Add responsive classes with `md:`, `lg:` prefixes
   - Test each breakpoint

2. **Use Developer Tools**
   - Inspect elements to find classes
   - Toggle device toolbar for responsive testing
   - Add/remove classes to test changes

3. **Common Issues**
   - Overflow: Add `overflow-hidden` to containers
   - Height: Ensure parent has explicit height
   - Flex: Remember to add `flex` before `items-center`

4. **Performance**
   - Use `hidden` instead of `opacity-0` for unused elements
   - Avoid nested flex containers when possible
   - Use `will-change` sparingly

## Case Study Layout Customization

### 1. Case Study Preview (`components/case-study/CaseStudyPreview.tsx`)
```tsx
// Main preview container
<div className="relative w-full h-full">
  {/* Image container */}
  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
    <Image fill className="object-cover" />
  </div>
  
  {/* Content container */}
  <div className="flex flex-col gap-4 mt-6">
    {/* Title and description */}
    <div className="space-y-2">
      <h3 className="text-2xl font-bold">
      <p className="text-gray-400">
    </div>
    
    {/* Categories */}
    <div className="flex flex-wrap gap-2">
      {/* Tags */}
    </div>
  </div>
</div>
```

Customization points:
- `aspect-video`: Change image aspect ratio
- `rounded-lg`: Adjust corner radius
- `gap-4`: Modify spacing between elements
- `mt-6`: Adjust margin below image
- `text-2xl`: Change title size
- `space-y-2`: Adjust text spacing

### 2. Case Study Frame (`components/case-study/CaseStudyFrame.tsx`)
```tsx
// Frame container
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
  {/* Content side */}
  <div className="flex flex-col gap-6">
    <div className="space-y-4">
      {/* Text content */}
    </div>
  </div>
  
  {/* Image side */}
  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
    <Image fill className="object-cover" />
  </div>
</div>
```

Key customization areas:
- `grid-cols-2`: Change layout columns
- `gap-8`: Adjust spacing between content and image
- `aspect-[4/3]`: Modify image aspect ratio
- `rounded-lg`: Change image corner radius

### 3. Case Study Navigation
```tsx
// Navigation container
<nav className="sticky top-0 z-50 bg-neutral-900/80 backdrop-blur-sm">
  <div className="flex items-center justify-between p-4">
    {/* Back button */}
    <button className="flex items-center gap-2 text-sm">
      <ArrowLeftIcon className="w-4 h-4" />
      Back
    </button>
    
    {/* Progress indicator */}
    <div className="h-1 bg-gray-800 rounded-full">
      <div 
        className="h-full bg-inverse-primary rounded-full transition-all"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
</nav>
```

Styling options:
- `bg-neutral-900/80`: Adjust background opacity
- `backdrop-blur-sm`: Change blur intensity
- `p-4`: Modify padding
- `gap-2`: Adjust icon spacing
- `h-1`: Change progress bar height
- `rounded-full`: Adjust corner radius

### Responsive Layout Tips

1. **Image Handling**
```tsx
// Responsive image container
<div className="relative w-full aspect-video md:aspect-[16/9] lg:aspect-[2/1]">
  <Image
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
</div>
```

2. **Text Scaling**
```tsx
// Responsive typography
<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
<p className="text-sm md:text-base lg:text-lg text-gray-400">
```

3. **Layout Switching**
```tsx
// Switch from vertical to horizontal layout
<div className="flex flex-col md:flex-row gap-4 md:gap-6">
  {/* Content */}
</div>

// Change grid columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>
```

4. **Conditional Visibility**
```tsx
// Show/hide elements based on screen size
<div className="hidden md:block"> // Desktop only
<div className="md:hidden">       // Mobile only
<div className="block lg:hidden"> // Hide on large screens
```

### Animation Customization

1. **Scroll Progress**
```tsx
// Progress bar animation
<motion.div
  className="h-full bg-inverse-primary rounded-full"
  initial={{ width: 0 }}
  animate={{ width: `${progress}%` }}
  transition={{ duration: 0.2 }}
/>
```

2. **Content Fade In**
```tsx
// Fade in on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  {/* Content */}
</motion.div>
```

## Dependencies

### Core Dependencies
- `next`: ^13.0.0
- `react`: ^18.0.0
- `framer-motion`: ^10.0.0
- `tailwindcss`: ^3.0.0

### UI-Related Dependencies
- `@heroicons/react`: Icon system
- `classnames`: Class name utilities
- `tailwind-merge`: Tailwind class merging

## Animation System

### 1. Page Load Sequence
1. Initial fade-in (0ms)
2. Content padding animation (400ms delay)
3. Navigation fade-in (1000ms delay)

### 2. Case Study Transitions
- Entry: Slide from right
- Exit: Slide to left
- Duration: 500ms
- Easing: Custom cubic-bezier

### 3. Scroll Animations
- Throttled scroll events (500ms cooldown)
- Smooth transitions between sections
- Progressive reveal of content

## Styling System

### 1. Tailwind Classes
Common patterns:
```css
/* Container styles */
.container-base = "w-full h-full relative"
.container-padding = "p-6 md:p-10"

/* Text styles */
.heading-large = "text-4xl md:text-6xl font-bold"
.body-text = "text-base md:text-lg"

/* Animation classes */
.transition-base = "transition-all duration-300"
```

### 2. Custom Utilities
Located in `src/styles/utilities.css`:
- Custom animations
- Responsive helpers
- Layout utilities

## Case Study System

### 1. Data Structure
Case studies are defined in `src/lib/case-studies/`:
```typescript
interface CaseStudy {
  id: string;
  title: string;
  description: string;
  previewImage: string;
  categories: string[];
  frames: Frame[];
}
```

### 2. Image Requirements
- Preview images: 1200x800px recommended
- Frame images: 1600x900px recommended
- Format: PNG or JPG
- Location: `public/case-studies/[study-id]/`

### 3. Adding New Case Studies
1. Create new file in `src/lib/case-studies/`
2. Add images to `public/case-studies/[study-id]/`
3. Import and add to `projects` array in `page.tsx`

## Making UI Changes

### Quick Start Guide
1. Locate the component you want to modify
2. Check for dependencies in the component's imports
3. Identify the Tailwind classes controlling the style
4. Make changes incrementally to avoid breaking animations
5. Test on all screen sizes

### Common Modifications

#### 1. Changing Colors
```tsx
// Before
className="bg-neutral-900 text-white"

// After
className="bg-[#your-color] text-[#your-color]"
```

#### 2. Adjusting Spacing
```tsx
// Before
className="p-6 gap-4"

// After
className="p-8 gap-6"
```

#### 3. Modifying Animations
```tsx
// Before
transition={{ duration: 0.5 }}

// After
transition={{ 
  duration: 0.7,
  ease: "easeInOut"
}}
```

### Testing Changes
1. Check mobile responsiveness
2. Verify animation sequences
3. Test scroll behavior
4. Validate color contrast
5. Check performance impact

## Best Practices

1. **Maintain Animation Flow**
   - Keep transition timings consistent
   - Don't remove exit animations
   - Preserve animation sequence order

2. **Responsive Design**
   - Use Tailwind breakpoints consistently
   - Test on multiple devices
   - Maintain readable text sizes

3. **Performance**
   - Optimize images before adding
   - Keep animations simple
   - Use will-change sparingly

4. **Accessibility**
   - Maintain color contrast
   - Keep text readable
   - Preserve semantic HTML

## Troubleshooting

Common issues and solutions:

1. **Broken Animations**
   - Check AnimatePresence usage
   - Verify motion component hierarchy
   - Confirm transition props

2. **Layout Shifts**
   - Check container constraints
   - Verify image dimensions
   - Review padding/margin changes

3. **Performance Issues**
   - Reduce animation complexity
   - Optimize image sizes
   - Check for layout thrashing

## Support and Resources

- Framer Motion Docs: https://www.framer.com/motion/
- Tailwind CSS Docs: https://tailwindcss.com/docs
- Next.js Docs: https://nextjs.org/docs
