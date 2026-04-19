import React from "react";

export default function Privacy() {
  const sections = [
    {
      title: "1. Information We Collect",
      text: "We may collect your name, email address, login credentials through OAuth providers, usage analytics, and project-related data created on WebGenix.AI.",
    },
    {
      title: "2. How We Use Your Information",
      text: "We use your information to create accounts, provide our services, improve AI performance, personalize your experience, and offer customer support.",
    },
    {
      title: "3. Authentication & Login",
      text: "If you sign in using Google or other providers, we may receive limited profile information such as your name, email, and profile image.",
    },
    {
      title: "4. Cookies & Tracking",
      text: "We use cookies and similar technologies for authentication, remembering preferences, analytics, and improving platform performance.",
    },
    {
      title: "5. Data Sharing",
      text: "We do not sell your personal information. We may share limited data with trusted third-party providers that help operate our platform securely.",
    },
    {
      title: "6. Data Security",
      text: "We implement industry-standard safeguards including encryption, secure servers, and access controls to protect your information.",
    },
    {
      title: "7. Your Rights",
      text: "You may request access, correction, export, or deletion of your personal data, subject to applicable laws.",
    },
    {
      title: "8. Data Retention",
      text: "We retain information only as long as necessary to provide services, comply with legal obligations, and resolve disputes.",
    },
    {
      title: "9. Contact",
      text: "For privacy-related questions or requests, contact us at privacy@webgenix.ai",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-zinc-400 uppercase tracking-[0.3em] text-sm mb-4">
            WebGenix.AI
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Privacy{" "}
            <span className="bg-linear-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <p className="text-zinc-400 mt-4 text-sm md:text-base">
            Last Updated: April 2026
          </p>
        </div>

        {/* Sections */}
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