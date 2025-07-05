import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Send } from "lucide-react";

// Import Social Media Icons
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Cube = () => (
  <div className="perspective-1000 mx-auto pt-16 mb-6">
    <div
      className="cube animate-cube-in rotate-cube"
      style={{ animationDuration: "14s" }}
    >
      <div className="cube-face front">OP</div>
      <div className="cube-face back">Success</div>
      <div className="cube-face left">Learn</div>
      <div className="cube-face right">Prepare</div>
      <div className="cube-face top">Study</div>
      <div className="cube-face bottom">Excel</div>
    </div>
  </div>
);

const LandingPage = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (taglineRef.current) {
      taglineRef.current.classList.add("animate-tagline-match-title");
    }

    const style = document.createElement("style");
    style.innerHTML = `
      /* Styles remain unchanged from original */
      .animated-title span {
        opacity: 0;
        display: inline-block;
        animation: fadeInLetter 1s forwards;
      }
      .animated-title span:nth-child(n) {
        animation-delay: calc(0.12s * var(--i));
      }
      @keyframes fadeInLetter {
        0% { opacity: 0; transform: translateY(-10px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-tagline-match-title {
        opacity: 0;
        transform: translateY(10px);
        animation: taglineFadeIn 4.8s ease-out forwards;
        animation-delay: 0.2s;
      }
      @keyframes taglineFadeIn {
        0% { opacity: 0; transform: translateY(10px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .pulse-button {
        animation: popInOut 1.8s infinite ease-in-out;
      }
      @keyframes popInOut {
        0% { transform: scale(1); }
        50% { transform: scale(1.15); }
        100% { transform: scale(1); }
      }
      .explore-button-animate {
        opacity: 0;
        animation: slideUpIn 1.5s ease-out forwards, popInOut 1.8s infinite ease-in-out;
        animation-delay: 3s, 4.5s;
        transition: all 0.3s ease-in-out;
      }
      .explore-button-animate:hover {
        filter: brightness(1.5);
        transform: scale(1.08);
        background-color: rgba(255, 255, 255, 0.2);
        color: #ffffff;
      }
      @keyframes slideUpIn {
        0% { opacity: 0; transform: translateY(100%); }
        100% { opacity: 1; transform: translateY(0); }
      }
      canvas.neural-canvas {
        position: absolute;
        inset: 0;
        z-index: 0;
        background: linear-gradient(to bottom, #000000, #8e2de2);
        opacity: 0.7;
      }
      .op-logo-animated {
        opacity: 0;
        animation: spiralReveal 4s ease-in-out forwards;
      }
      @keyframes spiralReveal {
        0% {
          opacity: 0;
          transform: scale(0.4) rotate(0deg);
          clip-path: circle(0% at 50% 50%);
        }
        50% {
          opacity: 0.5;
          transform: scale(1.05) rotate(540deg);
          clip-path: circle(60% at 50% 50%);
        }
        100% {
          opacity: 1;
          transform: scale(1) rotate(720deg);
          clip-path: circle(150% at 50% 50%);
        }
      }
      .fade-in-image {
        opacity: 0;
        animation: fadeInImg 4s ease-in-out forwards;
      }
      @keyframes fadeInImg {
        0% { opacity: 0; transform: scale(0.8); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes cubeIn {
        0% { transform: translateY(-500px) rotateX(720deg) rotateY(720deg) scale(0.3); opacity: 0; }
        60% { transform: translateY(20px) rotateX(20deg) rotateY(20deg) scale(1.05); opacity: 1; }
        100% { transform: translateY(0) rotateX(0deg) rotateY(0deg) scale(1); }
      }
      .animate-cube-in {
        animation: cubeIn 1.2s ease-out forwards;
      }
      .rotate-cube {
        animation: rotateCube 14s linear infinite;
        transform-style: preserve-3d;
      }
      @keyframes rotateCube {
        0% { transform: rotateX(0deg) rotateY(0deg); }
        100% { transform: rotateX(360deg) rotateY(360deg); }
      }
      .cube-face {
        background-color: rgba(128, 0, 255, 0.3);
        color: white;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .op-logo-animated:hover {
        transform: scale(1.2);
        transition: transform 0.3s ease-in-out;
      }
    `;
    document.head.appendChild(style);

    // Neural Network Canvas Logic (unchanged)
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const NODE_RADIUS = 1.5;
    const nodes = Array.from({ length: 175 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: 0,
      vy: 0,
      radius: NODE_RADIUS,
      originalX: 0,
      originalY: 0,
    }));

    nodes.forEach((n) => {
      n.originalX = n.x;
      n.originalY = n.y;
    });

    let mouse = { x: -9999, y: -9999 };
    let lastMoveTime = Date.now();
    let mouseIsMoving = false;

    const MOUSE_RADIUS = 100;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      lastMoveTime = Date.now();
      mouseIsMoving = true;
    };

    const checkIdle = () => {
      if (Date.now() - lastMoveTime > 1500) {
        mouseIsMoving = false;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });

    const draw = () => {
      checkIdle();
      ctx.clearRect(0, 0, width, height);

      const CONNECTION_THRESHOLD = 100;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_THRESHOLD) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${
              1 - dist / CONNECTION_THRESHOLD
            })`;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "white";
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      const updateNodes = () => {
        for (const node of nodes) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (mouseIsMoving && dist < MOUSE_RADIUS) {
            const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
            const angle = Math.atan2(dy, dx);
            node.vx += Math.cos(angle) * force * 0.6;
            node.vy += Math.sin(angle) * force * 0.6;
          } else {
            node.vx += (node.originalX - node.x) * 0.005;
            node.vy += (node.originalY - node.y) * 0.005;
          }
          node.x += node.vx;
          node.y += node.vy;
          node.vx *= 0.9;
          node.vy *= 0.9;
        }
      };

      updateNodes();
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.head.removeChild(style);
    };
  }, []);

  const renderAnimatedTitle = (text: string) => (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
          .animated-title {
            font-family: 'Bebas Neue', cursive;
            font-weight: 400;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #FFFFFF; 
            text-shadow:
              1px 1px rgba(255, 215, 0, 0.8),
              2px 2px rgba(0, 0, 0, 0.5),
              4px 4px rgba(0, 0, 0, 0.3);
            font-size: 5rem !important;
          }
        `}
      </style>
      <h1
        ref={titleRef}
        className="animated-title text-[#FFD700] text-6xl md:text-7xl font-bold mb-2"
      >
        {text.split("").map((char, idx) => (
          <span key={idx} style={{ ["--i" as any]: idx + 1 }}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </>
  );

  return (
    <div
      className="bg-black min-h-screen overflow-hidden relative text-white"
      style={{
        backgroundImage: "linear-gradient(to bottom, #000000, #8e2de2)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Neural Canvas */}
      <canvas ref={canvasRef} className="neural-canvas" />

      {/* Header with Logo */}
      <header className="absolute top-6 left-6 z-20">
        <a href="/">
          <img
            src="src/icons/OP Circle.png"
            alt="Odisha Preps Logo"
            className="w-12 h-12 object-contain cursor-pointer"
          />
        </a>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen px-4 z-10 relative">
        <Cube />
        <div className="relative flex items-center justify-center w-[350px] h-[350px] mb-8 pt-14 mx-auto">
          <img
            src="src/icons/10 GLOW BY NINJA 3.0.png"
            alt="Glow"
            className="absolute fade-in-image w-[350px] h-[350px] object-contain z-0"
          />
          <img
            src="src/icons/OP Circle.png"
            alt="OP Logo"
            className="op-logo-animated relative w-[195px] h-[195px] object-contain z-10"
          />
        </div>
        <div className="mt-[-60px] text-center mx-auto max-w-xl">
          {/* Title */}
          {renderAnimatedTitle("Odisha Preps")}

          {/* Tagline with center alignment */}
          <p
            ref={taglineRef}
            className="ml-4 text-xl md:text-2xl text-purple-300 mb-8 text-center inline-block w-full"
          >
            Learn. Prepare. Succeed with Odisha Preps.
          </p>

          {/* Button with center alignment */}
          <Button
            className="ml-36 explore-button-animate group text-lg py-6 px-8 transition-all duration-300 border border-white bg-gradient-to-r from-purple-600 via-purple-800 to-black text-white pulse-button mx-auto"
            onClick={() => {
              window.location.href = "https://odishapreps.akamai.net.in/";
            }}
          >
            Explore
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <footer className="bg-black text-gray-400 py-8 px-6 border-t border-purple-800">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Odisha Preps</h3>
            <p className="mb-2">
              Empowering students through quality education.
            </p>
            <p>Ⓒ 2025 Odisha Preps - All rights reserved.</p>
          </div>

          {/* Navigation */}
          <div className="ml-12">
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-purple-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-purple-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-purple-300">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>📞 +91 63726-11728</p>
            <p>✉️ Mail to updated soon. </p>
            <p>📍 Bhubaneswar, Odisha, India</p>
            <p>🕒 Mon-Sat: 10AM - 7PM</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/odishapreps"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300"
              >
                <Instagram className="w-6 h-6" />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@odishapreps"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300"
              >
                <Youtube className="w-6 h-6" />
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/odishapreps"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300"
              >
                <Send className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
