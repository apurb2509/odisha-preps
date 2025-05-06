import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cube = () => (
  <div className="perspective-1000 mx-auto pt-16 mb-6">
    <div className="cube animate-rotate-cube" style={{ animationDuration: "4.5s" }}>
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
      taglineRef.current.classList.add("animate-fade-in-delayed");
    }

    const style = document.createElement("style");
    style.innerHTML = `
      .animated-title span {
        opacity: 0;
        display: inline-block;
        animation: fadeInLetter 0.7s forwards;
      }
      .animated-title span:nth-child(n) {
        animation-delay: calc(0.1s * var(--i));
      }
      @keyframes fadeInLetter {
        0% { opacity: 0; transform: translateY(-10px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in-delayed {
        opacity: 0;
        animation: fadeIn 4.5s forwards;
      }
      @keyframes fadeIn {
        to { opacity: 1; }
      }
      .pulse-button {
        animation: pulse 4.5s infinite;
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); box-shadow: 0 0 10px rgba(255, 0, 255, 0.3); }
        50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(255, 0, 255, 0.6); }
      }
      canvas.neural-canvas {
        position: absolute;
        inset: 0;
        z-index: 0;
        background: black;
        opacity: 0.3;
      }

      .op-logo-animated {
        opacity: 0;
        transform: scale(0.85);
        filter: blur(8px);
        animation: revealLogo 4.5s ease-in-out forwards, glowPulse 4.5s ease-in-out forwards;
      }

      @keyframes revealLogo {
        0% {
          opacity: 0;
          transform: scale(0.85);
          filter: blur(8px);
          clip-path: circle(0% at 50% 100%);
        }
        50% {
          clip-path: circle(80% at 50% 50%);
          transform: scale(1.05);
          filter: blur(4px);
        }
        100% {
          opacity: 1;
          transform: scale(1);
          filter: blur(0);
          clip-path: circle(150% at 50% 50%);
        }
      }

      @keyframes glowPulse {
        0% { box-shadow: 0 0 0px rgba(255, 255, 255, 0.2); }
        50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.5); }
        100% { box-shadow: 0 0 0px rgba(255, 255, 255, 0.2); }
      }

      .fade-in-image {
        opacity: 0;
        animation: fadeInImg 2s ease-in-out forwards;
      }
      @keyframes fadeInImg {
        0% { opacity: 0; transform: scale(0.8); }
        100% { opacity: 1; transform: scale(1); }
      }
    `;
    document.head.appendChild(style);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const NODE_RADIUS = 1.5;

    const nodes = Array.from({ length: 300 }).map(() => ({
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

      const CONNECTION_THRESHOLD = 150;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_THRESHOLD) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,255,255,${1 - dist / CONNECTION_THRESHOLD})`;
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

      updateNodes();
      requestAnimationFrame(draw);
    };

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

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.head.removeChild(style);
    };
  }, []);

  const renderAnimatedTitle = (text: string) => (
    <h1
      ref={titleRef}
      className="animated-title text-6xl md:text-7xl font-bold mb-2 text-white"
    >
      {text.split("").map((char, idx) => (
        <span key={idx} style={{ ["--i" as any]: idx + 1 }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );

  return (
    <div className="bg-black min-h-screen overflow-hidden relative">
      <canvas ref={canvasRef} className="neural-canvas" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10 z-0" />
      <div className="flex flex-col items-center justify-center h-screen px-4 z-10 relative">
        <Cube />

        <div className="relative flex items-center justify-center w-[350px] h-[350px] mb-8 pt-14">
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

        {renderAnimatedTitle("Odisha Preps")}

        <p
          ref={taglineRef}
          className="text-xl md:text-2xl text-light-gray mb-8"
        >
          Learn. Prepare. Succeed with Odisha Preps.
        </p>

        <div className="pb-12">
          <Button
            className="pulse-button neon-button group text-lg py-6 px-8 transition-all duration-300 shadow-neon-glow hover:scale-105 bg-gradient-to-r from-purple-600/50 to-pink-600/50"
            onClick={() => navigate("/main")}
          >
            Explore
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
