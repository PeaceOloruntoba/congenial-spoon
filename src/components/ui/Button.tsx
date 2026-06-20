import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

type ButtonProps = (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>) & {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  as?: 'button' | 'a';
};

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  as: Component = 'button', 
  ...props 
}: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 ease-in-out flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-neutral-900 text-neutral-50 hover:bg-neutral-800 hover:shadow-lg',
    secondary: 'bg-neutral-200 text-neutral-900 hover:bg-neutral-300',
    outline: 'border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-50',
  };

  return (
    <Component 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
