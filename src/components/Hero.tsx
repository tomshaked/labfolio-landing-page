
import React, { useEffect, useRef } from 'react';
import Button from './Button';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <div className="relative min-h-screen clip-hero bg-gradient-to-b from-background via-background to-secondary/40 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 opacity-30">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
        >
          <source
            src="https://storage.googleapis.com/arca-lab/background-tech.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90"></div>

      {/* Content */}
      <div className="relative flex items-center justify-center min-h-screen px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center pt-20">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight md:leading-tight tracking-tight mb-6">
              <span className="text-foreground/90">Advancing</span>{' '}
              <span className="text-primary">Robotic Systems</span>{' '}
              <span className="text-foreground/90">Through AI</span>
            </h1>
            <p className="text-foreground/70 text-lg md:text-xl max-w-3xl mx-auto mb-8 text-balance">
              We develop pioneering autonomous systems at the intersection of cutting-edge AI and robotics research.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button size="lg">Explore Research</Button>
              <Button variant="outline" size="lg">Join Our Team</Button>
            </div>
          </div>

          {/* Floating Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: 'AI Controls',
                description: 'Advanced AI algorithms for robotic control systems',
                delay: 0.4
              },
              {
                title: 'Autonomous Navigation',
                description: 'Self-navigating systems with real-time adaptability',
                delay: 0.6
              }, 
              {
                title: 'Human-Robot Interaction',
                description: 'Intuitive interfaces for seamless cooperation',
                delay: 0.8
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="glass-panel p-6 rounded-lg animate-fade-in animate-float"
                style={{ animationDelay: `${feature.delay}s` }}
              >
                <h3 className="font-display font-semibold text-primary text-xl mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
