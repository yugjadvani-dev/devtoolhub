"use client";
import React from 'react';
import { Checkbox } from './ui/checkbox';
import Link from 'next/link';

interface CheckboxWithTextProps {
    id: string;
    label: string;
    link?: boolean;
    linkURL?: string | undefined;
    description: string;
    checked: boolean;
    onChange: (id: string, value: boolean) => void;
}

const CheckboxWithText: React.FC<CheckboxWithTextProps> = ({ id, label, link, linkURL, description, checked, onChange }) => {
    return (
        <div className="items-top flex space-x-2">
            <Checkbox id={id} checked={checked} onCheckedChange={(value: any) => onChange(id, value)} />
            <div className="grid gap-1.5 leading-none">
                <label
                    htmlFor={id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    {label}
                </label>
                {link ?
                    <Link href={linkURL || ''} className="text-sm text-primary underline underline-offset-4" dangerouslySetInnerHTML={{ __html: description }}></Link> :
                    <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: description }}></p>
                }
            </div>
        </div>
    );
};

export default CheckboxWithText;
