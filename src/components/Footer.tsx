
import React from 'react';
import { FileText, Video, Book, Send, Youtube, Facebook, Instagram } from 'lucide-react';

interface ResourceBoxProps {
  title: string;
  icon: React.ReactNode;
}

const ResourceBox = ({ title, icon }: ResourceBoxProps) => {
  return (
    <div className="flex flex-col items-center p-4 border border-neon-purple/30 rounded-lg bg-transparent backdrop-blur-md hover:shadow-neon-glow hover:-translate-y-1 transition-all duration-300">
      <div className="mb-2 text-neon-purple">{icon}</div>
      <h3 className="font-medium text-white">{title}</h3>
    </div>
  );
};

const Footer = () => {
  const resources = [
    { title: "Daily Practice", icon: <Book className="h-6 w-6" /> },
    { title: "PDFs", icon: <FileText className="h-6 w-6" /> },
    { title: "Video Lessons", icon: <Video className="h-6 w-6" /> },
    { title: "E-books", icon: <Book className="h-6 w-6" /> },
    { title: "Telegram Channel", icon: <Send className="h-6 w-6" /> },
    { title: "Live Classes", icon: <Video className="h-6 w-6" /> },
  ];

  const socialLinks = [
    { name: "Youtube", icon: <Youtube className="h-5 w-5" />, url: "#" },
    { name: "Telegram", icon: <Send className="h-5 w-5" />, url: "#" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, url: "#" },
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, url: "#" },
  ];

  return (
    <footer className="pt-16 pb-8 px-4 border-t border-neon-purple/20 bg-transparent backdrop-blur-md">
      <div className="container mx-auto">
        <div className="mb-14">
          <h3 className="text-2xl font-bold mb-6 text-center text-glow">Free Resources</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {resources.map((resource, index) => (
              <ResourceBox key={index} title={resource.title} icon={resource.icon} />
            ))}
          </div>
        </div>

        <div className="text-center mb-14">
          <p className="mb-4 text-light-gray">Follow us for updates and live sessions</p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url}
                className="w-10 h-10 rounded-full border border-neon-purple/30 flex items-center justify-center text-neon-purple hover:bg-neon-purple/10 hover:shadow-neon-glow transition-all duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-light-gray">© 2025 Odisha Preps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
