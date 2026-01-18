import {  Send } from "lucide-react";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";
import { socialLinks } from "./data";
import { useState } from "react";

type ProjectsProps = {
  ref: React.RefObject<HTMLDivElement | null>;
};

const Contact = ({ ref }: ProjectsProps) => {
   const [result, setResult] = useState("Send Message");
   const [formData,setFormData] = useState({name:"",email:"",message:""});

  const handleSubmit = async () => {

  const form = new FormData();
  form.append("name", formData.name);
  form.append("email", formData.email);
  form.append("message", formData.message);
  form.append("access_key", "376862a0-c2e7-4b42-bfa4-68c8871611fa");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: form
  });

  const data = await response.json();
  setResult(data.success ? "Success!" : "Error");
  setTimeout(()=>{ 
  setFormData({name:"",email:"",message:""})
  setResult("Send Message")
  },3000)
  

};


 const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
   console.log(formData)
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,      
      [name]: value     
    }));
  };

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      ref={ref}
      className="w-full min-h-screen py-8"
    >
      <div className=" mx-auto max-w-6xl px-4 sm:px-6 flex flex-col items-center">
        <p className="flex uppercase tracking-[0.2em] font-semibold">
          Get in touch
        </p>

        <h2 className="mb-12 mt-2 text-4xl md:text-5xl font-bold">Contact</h2>

        <div className=" grid gap-12 lg:grid-cols-2 items-start">
          {/* form */}
          <div className=" w-full max-w-md flex card-glass p-8 flex-col gap-3">
            <div className="flex flex-col gap-3">
              <div>Name</div>
              <input
                className="outline-none rounded-xl  card-glass py-2 px-4 "
                name="name"
                value={formData.name}
                onChange={(e)=>handleChange(e)}
                placeholder="Your Name"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div>Email</div>
              <input
                className="outline-none rounded-xl card-glass py-2 px-4 "
                placeholder="your@email.com"
                name="email"
                value={formData.email}
                onChange={(e)=>handleChange(e)}
                type="text"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div>Message</div>
              <textarea
                className="outline-none rounded-xl card-glass py-2 px-4 h-40"
                placeholder="Description "
                 name="message"
                value={formData.message}
                onChange={(e)=>handleChange(e)}
              ></textarea>
            </div>
            <div className="w-full flex justify-center ">
              <Button
                onClick={handleSubmit}
                title={result}
                icon={Send}
                variant={"primary"}
              />
            </div>
          </div>
          {/* Links */}
          <div className="flex flex-col gap-8 p-8 justify-center">
            <div className="text-2xl text-white/80 font-semibold font-mono">
              Let's Connect
            </div>
            <div>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((lk, index) => {
                return (
                  <a
                    key={index}
                    href={lk.link}
                    target="_blank"
                    className="flex items-center gap-3 px-6 py-4 card-glass hover:scale-105 transition"
                  >
                    {lk.icon}
                    {lk.title}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
