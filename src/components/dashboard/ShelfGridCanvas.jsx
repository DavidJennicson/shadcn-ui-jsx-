import React from 'react';

const ShelfGridCanvas = () => {
  // Example data representing the shelf space
  const shelfSpace = [
    { id: 1, name: 'Item 1', color: '#4299e1' },
    { id: 2, name: 'Item 2', color: '#48bb78' },
  ];

  // Number of rows and columns
  const numRows = 12;
  const numCols = 4;

  return (
    <div className="grid grid-cols-12 gap-1">
      {[...Array(numRows * numCols)].map((_, index) => {
        const shelf = shelfSpace[index % shelfSpace.length];
        return (
          <div key={index} className={`h-6 w-6 rounded-sm ${index % 2 === 0 ? 'bg-violet-600' : 'bg-gray-500' }`}>
           
          </div>
        );
      })}
    </div>
  );
};

export default ShelfGridCanvas;
