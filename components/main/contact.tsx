'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    try {
      await emailjs.send(
        'service_zayc11f',
        'template_oy1fymj',
        formData,
        '1oS4zcv-TOhP2Vwoz'
      );

      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.section
    id='contact'
      ref={sectionRef}
      className={`py-20 px-6 max-w-6xl mx-auto transition-opacity duration-1000 ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-semibold text-center mb-3 text-white/95 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        id="contact"
      >
        Get in Touch
      </motion.h2>
      
      <motion.p
        className="text-base text-white/60 font-normal text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Let's discuss whatever you have in mind
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <Image
            src="/caffee.webp"
            width={2000}
            height={1000}
            alt="Contact"
            draggable={false}
            className="rounded-2xl hover:scale-[1.02] transition-transform duration-500 macos-card overflow-hidden"
          />
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-5 macos-card p-8"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {['name', 'email'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-white/90 font-medium mb-2 capitalize text-sm">
                {field}
              </label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                name={field}
                required
                value={formData[field as 'name' | 'email']}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-white/10 rounded-lg bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all backdrop-blur-sm"
                placeholder={`Enter your ${field}`}
              />
            </div>
          ))}

          <div>
            <label htmlFor="message" className="block text-white/90 font-medium mb-2 text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-white/10 rounded-lg bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all resize-none backdrop-blur-sm"
              placeholder="Write your message here..."
            />
          </div>

        <button
          type="submit"
          disabled={isSending}
          className="w-full py-3 rounded-xl button-primary text-white/95 text-base font-medium active:scale-[0.98] disabled:opacity-60 transition-all"
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>


          {error && <p className="text-red-400/90 text-sm font-medium">{error}</p>}
          {isSent && <p className="text-green-400/90 text-sm font-medium">Message sent successfully!</p>}
        </motion.form>
      </div>

      <div className="mt-16 text-center space-y-2 text-sm text-white/60">
        <p>
          You can also reach me at{' '}
          <a href="mailto:moustaidbusiness@gmail.com" className="text-white/90 hover:text-white underline transition-colors">
            moustaidbusiness@gmail.com
          </a>
        </p>
        <p>
          Or connect with me on{' '}
          <a
            href="https://www.linkedin.com/in/youssef-moustaid-71013a240"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-white underline transition-colors"
          >
            LinkedIn
          </a>
        
        </p>
      </div>
    </motion.section>
  );
};

export default Contact;
