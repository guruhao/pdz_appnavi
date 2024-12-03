export const getGridClasses = (itemCount: number): string => {
  // Base classes for all screen sizes
  const baseClasses = 'grid gap-4 md:gap-6 lg:gap-8 w-full';
  
  // Fixed responsive grid classes
  return `${baseClasses} grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`;
};