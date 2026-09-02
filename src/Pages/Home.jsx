import React, { useState, useEffect, useCallback, memo } from "react"
import { Helmet } from "react-helmet-async"
import { Download, ExternalLink, Sparkles } from "lucide-react"
import ProfileCard from "../components/ProfileCard"
import cvUrl from "../assets/Faza Syaquille Suny- CV.pdf"
import AOS from 'aos'
import 'aos/dist/aos.css'

const StatusBadge = memo(() => (
  <div className="inline-block animate-float lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--ink-soft)] to-[var(--ink)] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative px-3 sm:px-4 py-2 rounded-full bg-[var(--surface)] backdrop-blur-xl border border-white/10">
        <span className="bg-gradient-to-r from-[var(--ink-soft)] to-[var(--ink)] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
          <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-gray-300" />
          Ready to Innovate
        </span>
      </div>
    </div>
  </div>
));

const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[var(--ink-soft)] to-[var(--ink)] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[var(--ink)] via-[var(--ink-soft)] to-[var(--muted)] bg-clip-text text-transparent">
          Hi! I'm
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-[var(--ink-soft)] to-[var(--ink)] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[var(--ink-soft)] to-[var(--ink)] bg-clip-text text-transparent">
          Faza
        </span>
      </span>
    </h1>
  </div>
));

const TechStack = memo(({ tech }) => (
  <div className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
    {tech}
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon, download = false }) => (
  <a href={href} {...(download ? { download: true } : {})}>
    <button className="group relative w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--muted)] to-[var(--muted)] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-11 bg-[var(--page)] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[var(--muted)]/20 to-[var(--muted)]/20"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-[var(--ink-soft)] to-[var(--ink)] bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          <Icon className={`w-4 h-4 text-gray-200 ${text === 'Contact' ? 'group-hover:translate-x-1' : 'group-hover:rotate-45'} transform transition-all duration-300 z-10`} />
        </span>
      </div>
    </button>
  </a>
));

const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = ["Cloud Engineering", "Machine Learning", "Web Development"];
const TECH_STACK = ["React", "JavaScript", "Node.js", "Tailwind"];

const Home = () => {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true,
        offset: 10,
      });
    };

    initAOS();
    window.addEventListener('resize', initAOS);
    return () => window.removeEventListener('resize', initAOS);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(prev => prev + WORDS[wordIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  return (
    <>
      <Helmet>
        <title>Faza Syaquille Suny | Cloud Engineering, Machine Learning & Web Development</title>
        <meta name="description" content="Faza Syaquille Suny — Electrical Engineering graduate building practical systems across cloud infrastructure, machine learning, and web development." />
     <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fazaporto.netlify.app" />
        <meta property="og:title" content="Faza Syaquille Suny | Cloud Engineering, Machine Learning & Web Development" />
     <meta property="og:description" content="Faza Syaquille Suny — Electrical Engineering graduate focused on Cloud Engineering, Machine Learning, and Web Development." />
        <meta property="og:url" content="https://fazaporto.netlify.app" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Faza Syaquille Suny",
            "jobTitle": "Cloud Engineering | Machine Learning | Web Development",
            "url": "https://fazaporto.netlify.app",
            "sameAs": [
              "https://linkedin.com/in/fazasuny"
            ]
          }
        `}</script>
      </Helmet>

      <div className="min-h-screen bg-[var(--page)] overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%]" id="Home">
        <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <div className="container mx-auto min-h-screen">
            <div className="flex flex-col lg:flex-row items-center justify-center h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20">
              {/* Left Column */}
              <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0"
                data-aos="fade-right"
                data-aos-delay="200">
                <div className="space-y-4 sm:space-y-6">
                  <StatusBadge />
                  <MainTitle />

                  {/* Typing Effect */}
                  <div className="h-8 flex items-center" data-aos="fade-up" data-aos-delay="800">
                    <span className="text-xl md:text-2xl bg-gradient-to-r from-[var(--ink-soft)] to-[var(--muted)] bg-clip-text text-transparent font-light">
                      {text}
                    </span>
                    <span className="w-[3px] h-6 bg-gradient-to-t from-[var(--ink-soft)] to-[var(--ink)] ml-1 animate-blink"></span>
                  </div>

                  {/* Description */}
                  <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light"
                    data-aos="fade-up"
                    data-aos-delay="1000">
                    Electrical Engineering graduate building practical systems across cloud infrastructure, machine learning, and web development.
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 justify-start" data-aos="fade-up" data-aos-delay="1200">
                    {TECH_STACK.map((tech, index) => (
                      <TechStack key={index} tech={tech} />
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-row gap-3 w-full justify-start" data-aos="fade-up" data-aos-delay="1400">
                    <CTAButton href="#Portofolio" text="Projects" icon={ExternalLink} />
                    <CTAButton href={cvUrl} text="Download CV" icon={Download} download />
                  </div>
                </div>
              </div>

              {/* Right Column - Profile Card */}
              <div className="w-full lg:w-1/2 lg:h-[600px] xl:h-[700px] flex items-center justify-center order-2 lg:order-2 mt-5 sm:mt-0 py-8 lg:py-0"
                data-aos="fade-left"
                data-aos-delay="600">
                <ProfileCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Home);