import clsx from 'clsx';
import React from 'react';
import BaseContainer, { BaseContainerProps } from './BaseContainer';

export const HeroContainer: React.FC<BaseContainerProps> = ({ 
  children, 
  className,
  ...props 
}) => (
  <BaseContainer 
    className={clsx(
      "min-h-screen flex flex-col",
      "surface-hero", // Semantic surface class
      className
    )} 
    {...props}
  >
    {children}
  </BaseContainer>
);

export const CaseStudyContainer: React.FC<BaseContainerProps> = ({ 
  children, 
  className,
  ...props 
}) => (
  <BaseContainer 
    className={clsx(
      "container-screen",
      "surface-case-study", // Surface styling
      className
    )} 
    {...props}
  >
    {children}
  </BaseContainer>
);

export const PreviewContainer: React.FC<BaseContainerProps> = ({ 
  children, 
  className,
  ...props 
}) => (
  <BaseContainer 
    className={clsx(
      "aspect-video overflow-hidden",
      "surface-preview", // Semantic surface class
      className
    )} 
    {...props}
  >
    {children}
  </BaseContainer>
);

export const ContentContainer: React.FC<BaseContainerProps> = ({ 
  children, 
  className,
  ...props 
}) => (
  <BaseContainer 
    className={clsx(
      "relative w-full flex flex-col",
      "surface-content", // Semantic surface class
      className
    )} 
    {...props}
  >
    {children}
  </BaseContainer>
);

export const NavigationContainer: React.FC<BaseContainerProps> = ({ 
  children, 
  className,
  ...props 
}) => (
  <BaseContainer 
    className={clsx(
      "w-full flex-none",
      "surface-navigation", // Semantic surface class
      className
    )} 
    {...props}
  >
    {children}
  </BaseContainer>
);

export const FrameContainer: React.FC<BaseContainerProps> = ({ 
  children, 
  className,
  ...props 
}) => (
  <BaseContainer 
    className={clsx(
      "flex flex-col gap-8",
      "surface-frame", // Semantic surface class
      className
    )} 
    {...props}
  >
    {children}
  </BaseContainer>
);

export { BaseContainer };
