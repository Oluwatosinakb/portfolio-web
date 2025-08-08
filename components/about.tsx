export default function About() {
  return (
    <section id="about" className="pt-10 lg:pt-14 pb-16 lg:pb-24 px-6 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="mb-8">
        <h2 className="text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
          About Me
        </h2>
        <div className="w-14 h-0.5 bg-gray-400 dark:bg-gray-500" />
      </div>

      {/* Full-width Intro Paragraph */}
      <div className="mb-16">
       <p className="text-base md:text-lg lg:text-xl font-medium text-black dark:text-white leading-relaxed">
          I'm a frontend developer with 3 years of experience, dedicated to building web applications that not only meet client needs but also deliver exceptional user experiences.
       </p>

      </div>

      {/* 2-column Grid */}
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
        {/* Left Column */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-sky-600 dark:text-sky-400">
            I design professional and beautiful websites
          </h3>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            With years of experience in frontend development, I have honed the skills to understand client requirements and deliver solutions aligned with the latest trends. I've collaborated with businesses across various industries, making me a reliable partner for your project.
          </p>

          <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
            I've spent most of these years working in areas like responsive web applications, landing pages, interactive components, and app UI/UX, to my current role focusing on creating seamless user experiences for web platforms. Having contributed to numerous live projects, I can offer valuable suggestions and innovative ideas to move forward with. With me, you're not limited to a single approach; I provide a range of options that we can refine together to achieve the best results.
          </p>
        </div>
      </div>
    </section>
  );
}
