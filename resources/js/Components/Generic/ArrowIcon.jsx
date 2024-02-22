import React from 'react'
const directionConfig = {
  right: 'rotate-0',
  left: 'rotate-180',
  up: 'rotate-270',
  down: 'rotate-90',
};

const ArrowIcon = ({direction = 'right'}) => {
  return (
    <div className={`${directionConfig[direction]} aspect-square w-8`}>
        <svg id="RightArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><g id="Right-2" data-name="Right"><polygon points="17.5 5.999 16.793 6.706 22.086 11.999 1 11.999 1 12.999 22.086 12.999 16.792 18.294 17.499 19.001 24 12.499 17.5 5.999" style={{fill: "#232326"}}/></g></svg>
    </div>
  )
}

export default ArrowIcon