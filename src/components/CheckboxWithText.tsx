"use client";
import React from 'react';
import { Checkbox } from './ui/checkbox';

// interface CheckboxWithTextProps {
//     id: string;
//     label: string;
//     description: string;
//     checked: boolean;
//     onChange: (id: string, value: boolean) => void;
// }

interface CheckboxWithTextProps {
    id: string;
    label: string;
    description: JSX.Element | string;
    checked: boolean; // Expecting a boolean for the checked state
    onCheckedChange: (checked: boolean) => void; // Match the expected type for onCheckedChange
}

const CheckboxWithText: React.FC<CheckboxWithTextProps> = ({ id, label, description, checked, onCheckedChange }) => {
    return (
        <div className="items-top flex space-x-2">
            <Checkbox 
            id={id} 
            // checked={checked}
            checked={checked}
            onCheckedChange={onCheckedChange}
              />
            <div className="grid gap-1.5 leading-none">
                <label
                    htmlFor={id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    {label}
                </label>
                <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
        </div>
    );
};

export default CheckboxWithText;
