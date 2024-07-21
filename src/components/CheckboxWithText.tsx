"use client"
import React from 'react';
import { Checkbox } from './ui/checkbox';

interface CheckboxWithTextProps {
    id: string;
    label: string;
    description: string;
    checked: boolean;
    onChange: (id: string, value: boolean) => void;
}

const CheckboxWithText: React.FC<CheckboxWithTextProps> = ({id, label, description, checked, onChange}) => {
    return (
        <div className="items-top flex space-x-2">
            <Checkbox id={id} checked={checked} onCheckedChange={(value:any) => onChange(id, value)} />
            <div className="grid gap-1.5 leading-none">
                <label
                    htmlFor={id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    {label}
                </label>
                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default CheckboxWithText
