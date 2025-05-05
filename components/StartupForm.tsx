"use client"

import { Input } from '@/components/ui/input';
import React, { useState } from 'react'
import { Textarea } from '@/components/ui/textarea';
import MDEditor from '@uiw/react-md-editor';

const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({}); // 3:55:00
    const [pitch, setPitch] = useState("**Hello world!!!**");

  return (
    <form action={() => {}} className='startup-form'>
        <div>
            <label htmlFor="title" className='startup-form_label'>Title</label>
            <Input id="title" name="title" className="startup-form_input" required placeholder="Startup Title"/>
            {errors.title && <p className='startup-form_error'>{errors.title}</p>}
        </div>

        <div>
            <label htmlFor="description" className='startup-form_label'>Description</label>
            <Textarea id="description" name="description" className="startup-form_textarea" required placeholder="Startup Description"/>
            {errors.description && <p className='startup-form_error'>{errors.description}</p>}
        </div>

        <div>
            <label htmlFor="category" className='startup-form_label'>Category</label>
            <Input id="category" name="category" className="startup-form_input" required placeholder="Startup Category (Tech, Health, Education)"/>
            {errors.category && <p className='startup-form_error'>{errors.category}</p>}
        </div>

        <div>
            <label htmlFor="link" className='startup-form_label'>Image URL</label>
            <Input id="link" name="link" className="startup-form_input" required placeholder="Startup Image URL"/>
            {errors.link && <p className='startup-form_error'>{errors.link}</p>}
        </div>

        <div data-color-mode="light">
            <label htmlFor="pitch" className='startup-form_label'>Pitch</label>
            
            <MDEditor value='pitch' onChange={(value) => setPitch(value as string)} id="pitch" preview="edit" height={300} style={{borderRadius: 20, overflow: "hidden"}}
                textareaProps={
                    {placeholder: "Briefly describe your idea and what problem it solves"}
                }
                previewOptions={{disabledElements: ["style"],}}/>

            {errors.link && <p className='startup-form_error'>{errors.link}</p>}
        </div>
    </form>
  )
}

export default StartupForm