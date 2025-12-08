import React from "react";
import useWindowStore from "#store/window.js";

const WindowControl = ({ target }) => {
  const { closeWindow, focusWindow } = useWindowStore();

  const handleMinimize = () => {
    console.log("WindowControl: minimize", target);
    closeWindow(target);
  };

  const handleMaximize = () => {
    console.log("WindowControl: maximize", target);
    focusWindow(target);
  };

  return (
    <div id="window-controls" role="group" aria-label="Window controls">
      <button
        onClick={handleMinimize}
        className="minimize"
        aria-label="Minimize window"
        title="Minimize"
      />
      <button
        onClick={handleMaximize}
        className="maximize"
        aria-label="Maximize window"
        title="Maximize"
      />
      <button
        onClick={() => {
          console.log("WindowControl: close", target);
          closeWindow(target);
        }}
        className="close"
        aria-label="Close window"
        title="Close"
      />
    </div>
  );
};

export default WindowControl;