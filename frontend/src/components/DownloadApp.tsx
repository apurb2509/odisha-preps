
import React from 'react';
import { Apple, Monitor, DownloadCloud } from 'lucide-react';

const DownloadButton = ({ children, icon }: { children: React.ReactNode, icon: React.ReactNode }) => {
  return (
    <button className="flex items-center justify-center bg-black text-white rounded-md py-3 px-4 mb-3 w-full border border-neon-purple/50 transition-all duration-300 hover:shadow-neon-glow hover:scale-105">
      <span className="mr-3">{icon}</span>
      <span>{children}</span>
    </button>
  );
};

const DownloadApp = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center bg-dark-deeper rounded-lg border border-neon-purple/30 p-6 shadow-neon-glow">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="/lovable-uploads/3515fd61-4d26-4261-b1f7-daaf30604bb1.png" 
              alt="Download App" 
              className="mx-auto md:mx-0 max-w-full h-auto"
            />
          </div>
          
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-3xl font-bold mb-4 text-white text-glow">Download App</h3>
            
            <div className="space-y-3">
              <DownloadButton icon={<DownloadCloud className="h-6 w-6 text-neon-purple" />}>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </DownloadButton>
              
              <DownloadButton icon={<Apple className="h-6 w-6 text-neon-purple" />}>
                <div className="text-left">
                  <div className="text-xs">DOWNLOAD ON THE</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </DownloadButton>
              
              <DownloadButton icon={<Monitor className="h-6 w-6 text-neon-purple" />}>
                <div className="text-left">
                  <div className="text-xs">DOWNLOAD FOR</div>
                  <div className="text-lg font-semibold">Windows</div>
                </div>
              </DownloadButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
