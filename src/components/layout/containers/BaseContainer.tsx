import clsx from 'clsx';
import React from 'react';
import { motion } from 'framer-motion';

export interface BaseContainerProps<T extends React.ElementType = 'div'> {
  as?: T | typeof motion.div;
  children: React.ReactNode;
  className?: string;
  [key: string]: any; // Allow any additional props
}

export const BaseContainer = <T extends React.ElementType = 'div'>({ 
  as,
  children, 
  className,
  ...props
}: BaseContainerProps<T>) => {
  const Component = as || 'div';
  
  return (
    <Component 
      className={clsx(
        "container-full", // Semantic base container class
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default BaseContainer;
