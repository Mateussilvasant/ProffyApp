import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import './index.css';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string
    name: string
}

export const TextArea: React.FC<TextAreaProps> = ({ label, name, ...rest }) => {
    return (
        <div className='textarea-block'>
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    );
}