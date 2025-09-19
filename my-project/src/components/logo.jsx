const LogosSection = () => {
  const logos = [
    "https://cdn.worldvectorlogo.com/logos/html-1.svg",         // HTML
    "https://cdn.worldvectorlogo.com/logos/css-3.svg",          // CSS
    "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",   // JavaScript
    "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg", // Tailwind
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // React
    "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg",  // Bootstrap
    "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", // Figma
    "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"   // GitHub
  ];

  return (
    <section className="bg-transparent overflow-hidden h-[100px] w-[90%] mx-auto flex items-center">
      <div className="relative w-full overflow-hidden">
        {/* Moving track */}
        <div className="flex animate-marquee">
          <div className="flex gap-16 px-8">
            {logos.map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt="tech-logo"
                className="h-16 w-auto object-contain"
              />
            ))}
          </div>
          <div className="flex gap-16 px-8">
            {logos.map((logo, idx) => (
              <img
                key={idx + "dup"}
                src={logo}
                alt="tech-logo"
                className="h-16 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
