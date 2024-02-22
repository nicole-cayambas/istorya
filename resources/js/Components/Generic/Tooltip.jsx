import React from "react";

const Tooltip = ({ tooltip, children, ...otherProps }) => {
    return (
        <div className="has-tooltip">
            <div
                role="tooltip"
                className="
                    tooltip
                    relative
                    opacity-0
                    text-sm font-medium text-white 
                    transition-opacity duration-300
                    rounded-lg shadow-sm
                    bg-gray-900 
                    dark:bg-gray-700
                    px-3 py-2 
                "
                {...otherProps}
            >
                {tooltip}
            </div>
            {children}
        </div>
    );
};

export default Tooltip;
