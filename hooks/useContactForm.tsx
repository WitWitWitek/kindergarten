import type { FormContent } from "@/components/ContactForm/ContactForm"
import { useState } from "react"

export const useContactForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    
    const sendContactForm = async (data: FormContent) => {
        setIsLoading(true)
        setIsSuccess(false)
        setIsError(false)
        try {
            const result = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 
                    "Content-Type": "application/json"
                },
            })
            console.log(await result.json());
            setIsSuccess(true)
            setIsLoading(false)
        } catch (err) {
            setIsSuccess(false)
            setIsLoading(false)
            setIsError(true)
        }
    }

    return {
        sendContactForm,
        isLoading,
        isSuccess,
        isError
    }
}
