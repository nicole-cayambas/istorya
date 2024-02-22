import React from "react";
import Tooltip from "./Tooltip";

const IconButton = ({ icon, action, tooltip = "asd" }) => {
    return (
        <Tooltip tooltip={tooltip}>
            <a
                href={typeof action === "string" ? action : undefined}
                onClick={typeof action === "function" ? action : () => {}}
                className="cursor-pointer"
            >
                <div>{icon}</div>
            </a>
        </Tooltip>
    );
};

export default IconButton;
