import React, { ChangeEvent, FormEvent, useState } from 'react';

type ChatInputProps = {
  onSubmit: (value: string) => void;
};

export const ChatInput = ({ onSubmit }: ChatInputProps) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setValue(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} />
    </form>
  );
};
