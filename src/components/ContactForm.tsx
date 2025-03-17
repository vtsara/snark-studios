
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast('Message sent!', {
      description: 'Thank you for reaching out. I\'ll get back to you soon.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <div className="mb-6">
        <Label htmlFor="name" className="font-courier mb-2 block text-black">Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border-2 border-black font-courier p-4 w-full"
          required
        />
      </div>
      
      <div className="mb-6">
        <Label htmlFor="email" className="font-courier mb-2 block text-black">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="border-2 border-black font-courier p-4 w-full"
          required
        />
      </div>
      
      <div className="mb-6">
        <Label htmlFor="message" className="font-courier mb-2 block text-black">Message</Label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="border-2 border-black font-courier p-4 w-full min-h-[150px] resize-none"
          required
        />
      </div>
      
      <button 
        type="submit" 
        className="bg-[#3dace2] text-white px-10 py-5 font-bebas text-2xl relative overflow-hidden"
      >
        SEND MESSAGE
      </button>
    </form>
  );
};

export default ContactForm;
