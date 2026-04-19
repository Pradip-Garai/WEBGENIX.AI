import React from "react";

export default function Terms() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      text: "By accessing or using WebGenix.AI, you agree to be bound by these Terms of Service. If you do not agree, please do not use our platform.",
    },
    {
      title: "2. Services",
      text: "WebGenix.AI provides AI-powered tools to generate, customize, and deploy websites and digital experiences.",
    },
    {
      title: "3. User Responsibilities",
      text: "You agree not to misuse the platform, upload harmful or unlawful content, attempt unauthorized access, or disrupt our services.",
    },
    {
      title: "4. Accounts",
      text: "You are responsible for maintaining the confidentiality of your login credentials and all activities under your account.",
    },
    {
      title: "5. Ownership",
      text: "You retain ownership of content you create. WebGenix.AI retains ownership of its software, branding, AI systems, and platform technology.",
    },
    {
      title: "6. Payments & Billing",
      text: "Paid subscriptions may renew automatically unless canceled before the next billing cycle.",
    },
    {
      title: "7. Termination",
      text: "We may suspend or terminate access to accounts that violate these terms or threaten platform security.",
    },
    {
      title: "8. Disclaimer",
      text: "Services are provided 'as is' without warranties of uninterrupted availability, accuracy, or fitness for a particular purpose.",
    },
    {
      title: "9. Contact",
      text: "For any questions regarding these Terms, contact us at support@webgenix.ai",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-zinc-400 uppercase tracking-[0.3em] text-sm mb-4">
            WebGenix.AI
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Terms of{" "}
            <span className="bg-linear-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
              Service
            </span>
          </h1>

          <p className="text-zinc-400 mt-4 text-sm md:text-base">
            Last Updated: April 2026
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((item, index) => (
            <div
              key={index}
              className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950/60"
            >
              <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
              <p className="text-zinc-400 leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
