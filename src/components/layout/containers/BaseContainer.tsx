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
      "relative w-full", // Base styles
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export default BaseContainer;
