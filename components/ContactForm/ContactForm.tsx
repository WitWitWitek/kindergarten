import React, { useEffect, useState } from 'react';
import useContactForm from '@/hooks/useContactForm';

export interface FormContent {
  name: string,
  email: string,
  subject: string,
  text: string,
}

type InputName = 'name' | 'email' | 'subject' | 'text';

export default function ContactForm() {
  const [formContent, setFormContent] = useState<FormContent>({
    name: '', email: '', subject: '', text: '',
  });
  const {
    sendContactForm, isLoading, isSuccess, isError,
  } = useContactForm();
  const onFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name as InputName;
    setFormContent((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  const onFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendContactForm(formContent);
  };

  useEffect(() => {
    if (isSuccess) {
      setFormContent({
        name: '', email: '', subject: '', text: '',
      });
    }
  }, [isSuccess]);

  return (
    <form onSubmit={onFormSubmission} className="contact-form">
      <label className="contact-form__label" htmlFor="name">
        Imię:
        <input
          id="name"
          name="name"
          type="text"
          maxLength={50}
          onChange={onFormChange}
          value={formContent.name}
          className="contact-form__input"
          required
        />
      </label>
      <label className="contact-form__label" htmlFor="email">
        E-mail:
        <input
          id="email"
          name="email"
          type="email"
          maxLength={50}
          onChange={onFormChange}
          value={formContent.email}
          className="contact-form__input"
          required
        />
      </label>

      <label className="contact-form__label" htmlFor="subject">
        Temat:
        <input
          id="subject"
          name="subject"
          type="text"
          maxLength={50}
          onChange={onFormChange}
          value={formContent.subject}
          className="contact-form__input"
          required
        />
      </label>

      <label className="contact-form__label" htmlFor="text">
        Opis:
        <textarea
          id="text"
          name="text"
          maxLength={500}
          onChange={onFormChange}
          value={formContent.text}
          className="contact-form__textarea"
          required
        />
      </label>

      <button
        type="submit"
        className="contact-form__button"
        disabled={isLoading}
      >
        {!isLoading ? 'Wyślij' : <p className="contact-form__spinner" />}
      </button>
      {isSuccess && !isError && (
        <div className="contact-form__success">
          <p>✓</p>
          <div>Wysłano poprawnie</div>
        </div>
      )}
      {!isSuccess && isError && (
        <div className="contact-form__error">
          <p>X</p>
          <div>Błąd wysyłania forumlarza</div>
        </div>
      )}
    </form>
  );
}
