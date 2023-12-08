import React from 'react';

const PreviousNextLinks = ({ data, currentDataItemId, jumpTo }) => {
  const currentDataLocation = data.findIndex(
    item => item.node.id === currentDataItemId,
  );
  const maxNumberDataItems = data.length;

  return (
    <div>
      {currentDataLocation !== 0 && (
        <div
          onClick={() => jumpTo(data[currentDataLocation - 1].node.linkTitle)}
        >
          Previous
        </div>
      )}
      {currentDataItemId !== maxNumberDataItems && (
        <div
          onClick={() => jumpTo(data[currentDataLocation + 1].node.linkTitle)}
        >
          Next
        </div>
      )}
    </div>
  );
};

export default PreviousNextLinks;
