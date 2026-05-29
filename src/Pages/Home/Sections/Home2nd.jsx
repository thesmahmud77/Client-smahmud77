import React, { useEffect, useState } from "react";

const singleProject = async () => {
  try {
    const res = await fetch("http://localhost:8080/technology");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Home2nd = () => {
  const [techData, setTechData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    singleProject().then((data) => {
      setTechData(data || []);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <section class="w-full bg-[#0B0B0F] text-white py-20 px-6 md:px-12 flex justify-center">
        <div class="max-w-7xl w-full flex flex-col gap-12">
          {/* Header Section */}
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-900 pb-8">
            <div class="flex flex-col gap-3">
              <div class="flex items-center gap-2 text-xs font-bold tracking-widest text-[#F97316] uppercase">
                <span class="w-6 h-[1px] bg-[#F97316]"></span>
                My Toolkit
              </div>
              <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">
                Technologies I Work With
              </h2>
            </div>
            <p class="text-gray-500 text-sm max-w-xs md:text-right leading-relaxed font-medium">
              A curated set of tools and frameworks I use to ship fast, scalable
              products.
            </p>
          </div>

          {/* Grid Layout */}
          <div>
            {loading ? (
              <div class="flex justify-center items-center py-20">
                <div class="w-6 h-6 border-2 border-[#F97316] border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {techData.map((tech, index) => (
                  <div
                    key={index}
                    class="group bg-[#121217] border border-[#1F1F29] rounded-2xl p-5 flex flex-col items-start gap-4 transition-all duration-300 hover:border-[#F97316]/30 hover:-translate-y-1 shadow-2xl cursor-pointer"
                  >
                    {/* Icon Box */}
                    <div class="w-10 h-10 bg-[#1A1A24] border border-[#2E2E3B] group-hover:border-[#F97316]/30 rounded-xl flex items-center justify-center text-[#F97316] text-sm transition-colors overflow-hidden">
                      {tech.icon && tech.icon.startsWith("http") ? (
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          class="w-5 h-5 object-contain filter brightness-90 group-hover:brightness-100 transition-all"
                        />
                      ) : (
                        <span class="text-base">{tech.icon || "💻"}</span>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div class="flex flex-col gap-1 w-full">
                      <h3 class="text-base font-bold text-gray-200 group-hover:text-white transition-colors">
                        {tech.name}
                      </h3>

                      <div class="flex flex-col items-start gap-0.5">
                        <p class="text-xs text-gray-400 font-semibold tracking-wide">
                          {tech.role}
                        </p>
                        <p class="text-[10px] uppercase font-extrabold tracking-widest mt-0.5 text-[#F97316]">
                          {tech.category}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home2nd;
