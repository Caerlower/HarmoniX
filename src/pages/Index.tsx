import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import MusicVisualizer from '../components/MusicVisualizer';
import FeatureCard from '../components/FeatureCard';
import StepCard from '../components/StepCard';
import TestimonialCard from '../components/TestimonialCard';
import TeamCard from '../components/TeamCard';
import { ArrowRight, Music, FileAudio, Share2, TrendingUp, Mail, MessageCircle, Twitter } from 'lucide-react';

const Index = () => {
  // Add animation on scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.fade-in-section');
    hiddenElements.forEach(el => observer.observe(el));

    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-background text-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-harmonix-purple/30 to-harmonix-teal/30 opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 gradient-text">
              HarmoniX
            </h1>
            <h2 className="text-2xl md:text-4xl font-display font-medium mb-6">
              Create. Mint. Own. <br />
              <span className="gradient-text">The Future of Music is Onchain.</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              AI-powered music creation & tokenization on Zora
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button className="btn-primary">
                Start Minting
                <ArrowRight size={16} />
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
            
            <div className="mt-8">
              <MusicVisualizer />
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section id="how-it-works" className="py-20 relative bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 fade-in-section opacity-0">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 gradient-text">
              How It Works
            </h2>
            <p className="text-xl text-gray-300">
              From idea to ownership in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 relative">
            <div className="hidden md:block absolute h-1 bg-gradient-to-r from-harmonix-purple to-harmonix-teal top-1/4 left-[25%] right-[25%] z-0"></div>
            
            <div className="fade-in-section opacity-0 relative">
              <StepCard 
                number="1"
                title="Generate Music with AI"
                description="Create unique tracks using our AI music generation tools. Mix genres, set moods, and craft your perfect sound."
                icon={Music}
              />
            </div>
            
            <div className="fade-in-section opacity-0 relative" style={{ animationDelay: '200ms' }}>
              <StepCard 
                number="2"
                title="Tokenize on Blockchain"
                description="Convert your masterpiece into an NFT using Zora protocol and Coin SDK for permanent on-chain ownership."
                icon={FileAudio}
              />
            </div>
            
            <div className="fade-in-section opacity-0 relative" style={{ animationDelay: '400ms' }}>
              <StepCard 
                number="3"
                title="Trade or Share"
                description="List your music NFTs on marketplaces, share with fans, and collect royalties with every transaction."
                icon={Share2}
              />
            </div>
          </div>
          
          <div className="text-center fade-in-section opacity-0">
            <button className="btn-secondary">
              Learn More
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 fade-in-section opacity-0">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 gradient-text">
              Platform Features
            </h2>
            <p className="text-xl text-gray-300">
              The essential tools for creating, tokenizing, and trading music
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="fade-in-section opacity-0">
              <FeatureCard 
                title="AI Music Generation"
                description="Create unique tracks using Riffusion AI technology, with customizable genre, mood, and instrumentation options."
                icon={Music}
              />
            </div>
            
            <div className="fade-in-section opacity-0" style={{ animationDelay: '200ms' }}>
              <FeatureCard 
                title="Zora Tokenization"
                description="Seamlessly mint your music as NFTs using Zora's Coin SDK, with customizable royalty settings and metadata."
                icon={FileAudio}
              />
            </div>
            
            <div className="fade-in-section opacity-0" style={{ animationDelay: '400ms' }}>
              <FeatureCard 
                title="SocialFi Interactions"
                description="Connect with fans, share exclusive content, and build your community directly through the platform."
                icon={Share2}
              />
            </div>
            
            <div className="fade-in-section opacity-0" style={{ animationDelay: '600ms' }}>
              <FeatureCard 
                title="Trading Analytics"
                description="Track performance of your music NFTs with real-time data on sales, streams, and engagement across marketplaces."
                icon={TrendingUp}
              />
            </div>
            
            <div className="fade-in-section opacity-0" style={{ animationDelay: '800ms' }}>
              <FeatureCard 
                title="Royalty Management"
                description="Set up automatic royalty distribution to collaborators and track earnings in real time with transparent reporting."
                icon={TrendingUp}
              />
            </div>
            
            <div className="fade-in-section opacity-0" style={{ animationDelay: '1000ms' }}>
              <FeatureCard 
                title="Music Discovery"
                description="Discover trending tracks, connect with artists, and find rare audio NFTs through our curated marketplace."
                icon={Music}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Live Demo Section */}
      <section className="py-20 relative bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-12 fade-in-section opacity-0">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-display font-bold mb-4 gradient-text">
                    Mint Your First Track
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Experience how easy it is to create and mint music directly on the blockchain. No coding required.
                  </p>
                  <button className="btn-primary">
                    Connect Wallet to Mint
                  </button>
                </div>
                
                <div className="w-full md:w-1/2">
                  <div className="bg-black/50 rounded-xl p-6 border border-white/10">
                    <div className="mb-4">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-harmonix-purple to-harmonix-teal flex items-center justify-center">
                          <Music size={24} className="text-white" />
                        </div>
                        <div className="ml-4">
                          <h4 className="font-display font-bold">Genesis Wave</h4>
                          <p className="text-sm text-gray-400">HarmoniX Demo Track</p>
                        </div>
                      </div>
                      
                      <div className="h-2 bg-gray-700 rounded-full mb-2">
                        <div className="h-2 rounded-full bg-gradient-to-r from-harmonix-purple to-harmonix-teal w-2/3 animate-pulse-soft"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>1:24</span>
                        <span>2:10</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-6">
                      <div>
                        <p className="text-xs text-gray-400">Price</p>
                        <p className="text-lg font-bold">0.05 ETH</p>
                      </div>
                      <button className="btn-secondary text-sm py-2">
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Use Cases */}
      <section id="use-cases" className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 fade-in-section opacity-0">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 gradient-text">
              Who Benefits?
            </h2>
            <p className="text-xl text-gray-300">
              HarmoniX is built for everyone in the music ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-8 text-center fade-in-section opacity-0">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-harmonix-purple to-harmonix-teal flex items-center justify-center">
                <Music size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">For Artists</h3>
              <ul className="text-left space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-harmonix-purple mr-2"></div>
                  <span className="text-gray-300">Monetize instantly</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-harmonix-teal mr-2"></div>
                  <span className="text-gray-300">Retain full ownership</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-harmonix-pink mr-2"></div>
                  <span className="text-gray-300">Set your own royalties</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-harmonix-orange mr-2"></div>
                  <span className="text-gray-300">Connect directly with fans</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card rounded-xl p-8 text-center fade-in-section opacity-0" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-harmonix-purple to-harmonix-teal flex items-center justify-center">
                <FileAudio size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">For Fans</h3>
              <ul className="text-left space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-harmonix-purple mr-2"></div>
                  <span className="text-gray-300">Own a piece of music history</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-harmonix-teal mr-2"></div>
                  <span className="text-gray-300">Access exclusive drops</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-harmonix-pink mr-2"></div>
                  <span className="text-gray-300">Support artists directly</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-harmonix-orange mr-2"></div>
                  <span className="text-gray-300">Join artist communities</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card rounded-xl p-8 text-center fade-in-section opacity-0" style={{ animationDelay: '400ms' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-harmonix-purple to-harmonix-teal flex items-center justify-center">
                <TrendingUp size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">For Collectors</h3>
              <ul className="text-left space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-harmonix-purple mr-2"></div>
                  <span className="text-gray-300">Discover rare audio NFTs</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-harmonix-teal mr-2"></div>
                  <span className="text-gray-300">Track investment performance</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-harmonix-pink mr-2"></div>
                  <span className="text-gray-300">Trade on multiple marketplaces</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-harmonix-orange mr-2"></div>
                  <span className="text-gray-300">Build a valuable collection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 relative bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 fade-in-section opacity-0">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 gradient-text">
              What They Say
            </h2>
            <p className="text-xl text-gray-300">
              Early adopters sharing their experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="fade-in-section opacity-0">
              <TestimonialCard 
                quote="HarmoniX helped me create and mint my first music NFT in under an hour. The AI generation tools are incredible."
                name="Alex Rivera"
                role="Electronic Music Producer"
                avatarUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              />
            </div>
            
            <div className="fade-in-section opacity-0" style={{ animationDelay: '200ms' }}>
              <TestimonialCard 
                quote="As a collector, I love the transparency and ease of finding new music NFTs. The platform makes discovery simple."
                name="Sarah Chen"
                role="Music NFT Collector"
                avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              />
            </div>
            
            <div className="fade-in-section opacity-0" style={{ animationDelay: '400ms' }}>
              <TestimonialCard 
                quote="The royalty management is game-changing. I can finally track and receive payments directly as my music trades."
                name="Marcus Johnson"
                role="Independent Musician"
                avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Team & Partners */}
      <section id="team" className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 fade-in-section opacity-0">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 gradient-text">
              Our Team
            </h2>
            <p className="text-xl text-gray-300">
              The innovators behind HarmoniX
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="fade-in-section opacity-0">
              <TeamCard 
                name="ANON"
                role="CEO & Co-Founder"
                bio="Former music exec turned Web3 entrepreneur with a passion for empowering independent artists."
                imageUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                twitterHandle=""
              />
            </div>
            
            <div className="fade-in-section opacity-0" style={{ animationDelay: '200ms' }}>
              <TeamCard 
                name="ANON"
                role="CTO & Co-Founder"
                bio="AI researcher and blockchain developer with experience building decentralized applications for creative industries."
                imageUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                twitterHandle=""
              />
            </div>
            
            <div className="fade-in-section opacity-0" style={{ animationDelay: '400ms' }}>
              <TeamCard 
                name="ANON"
                role="Head of Product"
                bio="Product leader specializing in Web3 music platforms with a background in UX design and audio engineering."
                imageUrl="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                twitterHandle=""
              />
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center mb-10 fade-in-section opacity-0">
            <h3 className="text-2xl font-display font-bold mb-8 gradient-text">
              Our Partners
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="w-32 h-10 glass-card rounded-lg flex items-center justify-center px-4">
                <span className="text-white font-bold">Zora</span>
              </div>
              <div className="w-32 h-10 glass-card rounded-lg flex items-center justify-center px-4">
                <span className="text-white font-bold">CoinSDK</span>
              </div>
              <div className="w-32 h-10 glass-card rounded-lg flex items-center justify-center px-4">
                <span className="text-white font-bold">Base</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 relative bg-secondary">
        <div className="absolute inset-0 gradient-bg opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in-section opacity-0">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 gradient-text">
              Join the Onchain Music Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Be among the first to create, own, and trade music on the blockchain
            </p>
            
            <div className="glass-card rounded-xl p-8 mb-10">
              <form className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow bg-black/30 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-harmonix-purple"
                  />
                  <button type="submit" className="btn-primary">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            
            <div className="flex justify-center space-x-6 fade-in-section opacity-0">
              <a href="#" className="bg-white/10 hover:bg-white/20 transition p-3 rounded-full">
                <MessageCircle size={24} className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition p-3 rounded-full">
                <Twitter size={24} className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition p-3 rounded-full">
                <Mail size={24} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-8 w-8 bg-gradient-to-br from-harmonix-purple to-harmonix-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-white font-display font-bold text-xl">HarmoniX</span>
            </div>
            
            <div className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition">Home</a>
              <a href="#how-it-works" className="text-gray-400 hover:text-white transition">How It Works</a>
              <a href="#features" className="text-gray-400 hover:text-white transition">Features</a>
              <a href="#team" className="text-gray-400 hover:text-white transition">Team</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Docs</a>
            </div>
            
            <div className="text-gray-400 text-sm">
              &copy; 2025 HarmoniX. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
