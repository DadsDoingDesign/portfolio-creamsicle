import clsx from 'clsx';
import React from 'react';

export interface BaseContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const BaseContainer: React.FC<BaseContainerProps> = ({ 
  children, 
  className,
  ...props
}) => (
  <div 
    className={clsx(
      "container-full", // Semantic base container class
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export default BaseContainer;
