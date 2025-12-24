import { Linkedin, Mail, Send, Twitter } from 'lucide-react';
import Button from '../components/ui/Button';
import { Github } from 'lucide-react';

type ProjectsProps = {
  ref: React.RefObject<HTMLDivElement | null>;
};

const Contact = ({ ref }: ProjectsProps) => {
  const socialLinks = [{title:"Github",link:"",icon:<Github/>},{title:"LinkedIn",link:"",icon:<Linkedin/>},{title:"Email",link:"",icon:<Mail/>},{title:"Twitter",link:"",icon:<Twitter/>}]
  return (
    <div
      ref={ref}
      className="min-h-screen py-12 mx-6 mx-auto max-w-6xl flex flex-col items-center"
    >
      <div className="flex uppercase tracking-[0.2em] font-semibold">
        Get in Touch
      </div>
      <div className="flex py-6 text-4xl md:text-5xl font-bold">Contact</div>

      <div className="flex flex-col lg:flex-row justify-center items-center">
        {/* form */}
        <div className=" min-w-96 flex card-glass p-8 flex-col gap-3">
          <div className="flex flex-col gap-3">
            <div>Name</div>
            <input
              className="outline-none rounded-xl  card-glass py-2 px-4 "
              placeholder="Your Name"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div>Email</div>
            <input
              className="outline-none rounded-xl card-glass py-2 px-4 "
              placeholder="your@email.com"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div>Message</div>
            <textarea
              className="outline-none rounded-xl card-glass py-2 px-4 h-42"
              placeholder="Description "
            ></textarea>
          </div>
          <div className='w-full flex justify-center '>
            <Button
            onClick={() => {
              console.log("submit");
            }}
            title={"Send Message"}
            icon={Send}
            variant={"primary"}
          />
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-col gap-8 p-8 justify-center">
          <div className='text-2xl text-white/80 font-semibold font-mono'>Let's Connect</div>
          <div>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</div>
          <div className='flex flex-wrap gap-3'>
            {socialLinks.map((lk,index)=>{
              return(
                <div key={index} className=' flex gap-3 px-6 py-4 card-glass'>
                    {lk.icon}
                    {lk.title}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
