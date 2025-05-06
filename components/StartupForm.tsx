"use client"

import { Input } from '@/components/ui/input';
import React, { useActionState, useState } from 'react'
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import MDEditor from '@uiw/react-md-editor';
import { Send } from 'lucide-react';
import { formSchema } from '@/lib/validation';

const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({}); // 3:55:00
    const [pitch, setPitch] = useState("");

    const handleFormSubmit = async (prevState: any, formData: FormData) => {
        try {
            const formValues = {
                title: formData.get("title") as string,
                description: formData.get("description") as string,
                category: formData.get("category") as string,
                link: formData.get("link") as string,
                pitch,
            }

            await formSchema.parseAsync(formValues);

            // const result = await createIdea(prevState, formData, pitch);

            // console.log(result); 4:11:00
        } catch (error) {

        } finally {

        }
    }

    const [state, formAction, isPending] = useActionState(handleFormSubmit,
        {
            error: "",
            status: "INITIAL"
        }
    );

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
                textareaProps={{
                    placeholder: "Briefly describe your idea and what problem it solves"
                }}
                previewOptions={{
                    disallowedElements: ["style"],
                }}/>

            {errors.link && <p className='startup-form_error'>{errors.link}</p>}
        </div>

        <Button type="submit" className="startup-form_btn" disabled={isPending}>
            {isPending ? 'Submitting...' : 'Submit your pitch'}
            <Send className="size-6 ml-2" />
        </Button>
    </form>
  )
}

export default StartupForm