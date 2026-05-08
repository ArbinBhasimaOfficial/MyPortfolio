import { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/ContactExperience";
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
        await emailjs.sendForm(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        )
        setFormData({name:'', email:'', message: ''})
    } catch (error) {
        console.log('email js error: ', error)
    } finally {
        setLoading(false)
    }
  };

  return (
    <section id="contact" className="w-full section-padding">

        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader title="Get In Touch"
            sub="Let's Work Together"/>

            <div className="grid-12-cols mt-16">
                <div className="xl:col-span-5">
                    <div className="flex-center card-border rounded-xl p-16">
                        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8" ref={formRef}>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="px-5 py-5 bg-blue-100 rounded-md text-white placeholder:text-blue-50 text-lg"
                            />

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="px-5 py-5 bg-blue-100 rounded-md text-white placeholder:text-blue-50 text-lg"
                            />

                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="px-5 py-5 bg-blue-100 rounded-md text-white placeholder:text-blue-50 resize-none text-lg"
                            />
                            <button type="submit" disabled={loading} className="group flex justify-center">
                                <div className="px-7 py-3 rounded-lg bg-cyan-400 text-black text-lg font-semibold group-hover:bg-black-50 transition-colors duration-300">
                                    <span className="group-hover:text-white transition-colors duration-300">{loading ? 'Sending ... ' : 'Send Message'}</span>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="xl:col-span-7 min-h-96">
                    <div className="w-full h-full bg-black hover:cursor-grab rounded-3xl overflow-hidden">
                        <ContactExperience />

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact