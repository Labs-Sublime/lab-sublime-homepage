'use client';

import { useState } from 'react';
import { Alert } from '../alert';

export function Contact() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            setStatus('pending');
            setError(null);
            const formData = new FormData(event.target);
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            if (res.status === 200) {
                setStatus('ok');
                event.target.reset();
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
            }
        } catch (e) {
            setStatus('error');
            setError(`${e}`);
        }
    };

    return (
        <section id="contact" className="scroll-mt-24">
            <h2 className="mb-8">Get in Touch</h2>
            <div className="w-full md:max-w-lg">
                <form name="contact" onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                    <input type="hidden" name="form-name" value="contact" />
                    <input name="name" type="text" placeholder="Name" required className="input" />
                    <input name="email" type="email" placeholder="Email" required className="input" />
                    <textarea
                        name="message"
                        placeholder="Message"
                        required
                        rows={5}
                        className="input resize-y"
                    />
                    <button className="btn" type="submit" disabled={status === 'pending'}>
                        {status === 'pending' ? 'Sending...' : 'Send Message'}
                    </button>
                    {status === 'ok' && <Alert type="success">Message sent! We'll be in touch.</Alert>}
                    {status === 'error' && <Alert type="error">{error}</Alert>}
                </form>
                <p className="mt-6 text-sm text-neutral-400">
                    Or email directly at{' '}
                    <a href="mailto:contact@labsublime.com" className="text-primary">
                        contact@labsublime.com
                    </a>
                </p>
            </div>
        </section>
    );
}
