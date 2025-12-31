import React from "react";
import {
  technologiesframeworks,
  Test,
  database,
  versioncontrolsystem,
  language,
  devops,
} from "../constants";
import { Reveal } from "../utils";

/* =======================
   Reusable Big Skill Card
======================= */
const SkillCard = ({ title, sections }) => {
  return (
    <div className="flex flex-col h-full min-h-[600px] md:min-h-[650px] lg:min-h-[700px] rounded-xl bg-white/10 backdrop-blur-md p-10 md:p-12 border border-white/10 hover:border-main1 transition duration-300">
      
      {/* Card Title */}
<h3 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold text-white mb-10">
  {title}
</h3>


      <div className="flex-1 space-y-12">
        {sections.map((section) => (
          <div key={section.title}>
            
            {/* Section Title */}
            <p className="text-center text-base md:text-lg lg:text-xl text-main1/80 mb-6">
              {section.title}
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-8">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-lg bg-white/5">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain"
                      loading="lazy"
                    />
                  </div>

                  <p className="text-sm md:text-base lg:text-lg mt-2 text-white/80">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


/* =======================
   Skills Section
======================= */
const Skills = () => {
  return (
<section
  id="Skills"
  className="scroll-mt-20 max-w-7xl mx-auto mt-12 mb-2 px-4 sm:px-6 md:px-8"
>

      <Reveal>
        <p className="text-2xl md:text-5xl xl:text-6xl text-white font-extrabold mb-16">
          Skills<span className="text-main1">.</span>
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 items-stretch">
        <Reveal>
          <SkillCard
            title="Development Stack"
            sections={[
              { title: "Languages", items: language },
              {
                title: "Technologies & Frameworks",
                items: technologiesframeworks,
              },
            ]}
          />
        </Reveal>

        <Reveal>
          <SkillCard
            title="Infrastructure & Tools"
          sections={[
            { title: "Databases", items: database },
            { title: "DevOps", items: devops },
            { title: "Testing", items: Test },
            { title: "Version Control & PM", items: versioncontrolsystem },
          ]}
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
