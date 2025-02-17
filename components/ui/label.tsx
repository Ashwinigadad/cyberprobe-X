import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label: React.FC<LabelProps> = ({ className, children, ...props }) => {
  return (
    <label className={`text-gray-700 font-medium ${className}`} {...props}>
      {children}
    </label>
  );
};

export { Label };
