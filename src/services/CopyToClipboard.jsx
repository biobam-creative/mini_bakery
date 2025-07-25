import React, { useState } from "react";
import { IoIosCopy } from "react-icons/io";
import Tooltip from "../components/ui/Tooltip";

const CopyToClipboard = ({ text, color }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 5000); // Reset copied state after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Tooltip helpText={copied ? "Copied" : "Copy"}>
      <span style={{ cursor: "pointer" }} onClick={handleCopy}>
        <IoIosCopy size={13} color={color} />
      </span>
    </Tooltip>
  );
};

export default CopyToClipboard;
