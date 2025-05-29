import Cursor from "@/components/util/cursor";

export default function TechAndHumanity() {
  return (
    <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Cursor />
      <article className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
        {/* Futuristic Hero Section */}
        <div className="relative">
          <img
            src="/blogImages/solarpunk.jpg"
            alt="Solarpunk future blending nature and advanced technology with green cities and clean energy"
            className="w-full h-96 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                The <span className="text-green-400">Intersection</span> of <br />Technology and Humanity
              </h1>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-300">Published on April 25, 2025</span>
                <span className="text-sm px-3 py-1 bg-blue-600 rounded-full">Technology</span>
                <span className="text-sm px-3 py-1 bg-purple-600 rounded-full">Ethics</span>
                <span className="text-sm px-3 py-1 bg-teal-600 rounded-full">Future</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl leading-relaxed mb-8 text-gray-300 border-l-4 border-green-400 pl-6 italic">
                "Technology isn't neutral — it reflects the values of those who build it. As architects of the digital age, we're coding tomorrow's humanity today."
              </p>

              {/* Engineering with Ethics Section */}
              <section className="mb-12" id="ethics">
                <div className="flex items-center mb-6 group">
                  <span className="text-4xl mr-4 group-hover:rotate-45 transition-transform">⚙️</span>
                  <h2 className="text-3xl font-bold text-white">Engineering with Ethics</h2>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 mb-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-white">The Responsibility Matrix</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <strong>83%</strong> of AI ethics researchers report pressure to compromise standards
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          Average app collects data from <strong>6.8</strong> third-party trackers
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          Only <strong>12%</strong> of tech teams include ethicists
                        </li>
                      </ul>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-white">Ethical Checklist</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          Who benefits from this tool?
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          Who might be harmed?
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          Are we optimizing for the right outcomes?
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-blue-500 pl-6 my-6">
                  <p className="text-xl italic text-gray-300">
                    "We shape our tools, and thereafter our tools shape us."
                  </p>
                  <footer className="mt-2 text-blue-400">— Marshall McLuhan</footer>
                </blockquote>
              </section>

              {/* Inclusion Section */}
              <section className="mb-12" id="inclusion">
                <div className="flex items-center mb-6 group">
                  <span className="text-4xl mr-4 group-hover:scale-110 transition-transform">🧩</span>
                  <h2 className="text-3xl font-bold text-white">Inclusion by Design</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-purple-500">
                    <h3 className="text-xl font-bold mb-3 text-white">Accessibility</h3>
                    <p className="text-gray-300">
                      <strong>1 in 4</strong> adults live with disabilities. Semantic HTML and proper contrast aren't optional.
                    </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-green-500">
                    <h3 className="text-xl font-bold mb-3 text-white">Global Reach</h3>
                    <p className="text-gray-300">
                      <strong>3 billion</strong> still use 2G networks. Offline-first design bridges the digital divide.
                    </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-amber-500">
                    <h3 className="text-xl font-bold mb-3 text-white">Cultural Sensitivity</h3>
                    <p className="text-gray-300">
                      Localization goes beyond translation — it's about <strong>context</strong> and <strong>values</strong>.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-3 text-white">Case Study: The $300M Button</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-2">Before:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          Forced account creation
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          Complex password rules
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          75% checkout abandonment
                        </li>
                      </ul>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-2">After Inclusive Redesign:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          Guest checkout option
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          Social login alternatives
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          $300M annual revenue increase
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-gray-700 rounded-lg">
                    <p className="text-green-400 italic">
                      "Inclusion isn't charity — it's smart design that serves everyone better."
                    </p>
                  </div>
                </div>
              </section>

              {/* Solarpunk Future Section */}
              <section className="mb-12" id="solarpunk">
                <div className="flex items-center mb-6 group">
                  <span className="text-4xl mr-4 group-hover:animate-pulse">🌱</span>
                  <h2 className="text-3xl font-bold text-white">Designing Solarpunk Systems</h2>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4 text-white">The Solarpunk Manifesto</h3>
                  <div className="space-y-4">
                    {[
                      {icon: "☀️", title: "Renewable First", 
                       content: "Servers powered by clean energy, devices designed for repair"},
                      {icon: "🌿", title: "Biophilic Design", 
                       content: "Interfaces that promote calm, not addiction"},
                      {icon: "🔄", title: "Circular Economy", 
                       content: "Zero e-waste through modular, upgradable hardware"},
                      {icon: "🏙️", title: "Urban Integration", 
                       content: "Tech that enhances green spaces, not replaces them"}
                    ].map((item) => (
                      <div key={item.title} className="flex">
                        <div className="text-2xl mr-4 flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-white">{item.title}</h4>
                          <p className="text-gray-300">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <h3 className="text-xl font-bold mb-3 text-white">Current Reality</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Tech accounts for <strong>4%</strong> global emissions
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        E-waste growing <strong>3x</strong> faster than population
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <h3 className="text-xl font-bold mb-3 text-white">Solarpunk Future</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <strong>100%</strong> renewable data centers by 2035
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <strong>90%</strong> device repairability standard
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* AI Guardrails Section */}
              <section className="mb-12" id="ai">
                <div className="flex items-center mb-6 group">
                  <span className="text-4xl mr-4 group-hover:-rotate-12 transition-transform">🛡️</span>
                  <h2 className="text-3xl font-bold text-white">Guardrails for AI</h2>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-3 text-white">The AI Responsibility Framework</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-2">Development Phase</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">1.</span>
                          Bias auditing for training data
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">2.</span>
                          Clear documentation of limitations
                        </li>
                      </ul>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-2">Deployment Phase</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">3.</span>
                          Human oversight requirements
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">4.</span>
                          Opt-out mechanisms
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
                  <h3 className="text-xl font-bold mb-3 text-white">AI Transparency Spectrum</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">Data Sources</span>
                        <span className="text-gray-400">Opaque → Transparent</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '25%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">Decision Logic</span>
                        <span className="text-gray-400">Opaque → Transparent</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '15%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">Content Marking</span>
                        <span className="text-gray-400">Opaque → Transparent</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{width: '40%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-green-900 to-green-700 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Ready to Build More Ethical Tech?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Get our free "Ethical Developer Toolkit" with checklists, frameworks, and impact assessment templates.
                </p>
                <button className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-lg transition-all transform hover:scale-105">
                  Download the Toolkit
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-gray-800 rounded-xl p-6 sticky top-8">
              <h3 className="text-xl font-bold mb-4 text-white">Tech Humanity Path</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#ethics" className="text-blue-400 hover:underline flex items-center">
                    <span className="mr-2">⚙️</span> Engineering Ethics
                  </a>
                </li>
                <li>
                  <a href="#inclusion" className="text-blue-400 hover:underline flex items-center">
                    <span className="mr-2">🧩</span> Inclusion by Design
                  </a>
                </li>
                <li>
                  <a href="#solarpunk" className="text-blue-400 hover:underline flex items-center">
                    <span className="mr-2">🌱</span> Solarpunk Future
                  </a>
                </li>
                <li>
                  <a href="#ai" className="text-blue-400 hover:underline flex items-center">
                    <span className="mr-2">🛡️</span> AI Guardrails
                  </a>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-white">Tech Humanity Benchmarks</h3>
                <div className="space-y-4">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Ethical Tech Teams</span>
                      <span className="text-green-500 font-bold">+42%</span>
                    </div>
                    <p className="text-sm text-gray-400">Growth in ethics-focused roles since 2020</p>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Green Hosting</span>
                      <span className="text-green-500 font-bold">68%</span>
                    </div>
                    <p className="text-sm text-gray-400">Of major providers now carbon-neutral</p>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Accessible Sites</span>
                      <span className="text-red-500 font-bold">3%</span>
                    </div>
                    <p className="text-sm text-gray-400">Meet all WCAG 2.1 AA standards</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-white">Essential Reads</h3>
                <div className="space-y-4">
                  <a href="#" className="group block">
                    <h4 className="text-blue-400 group-hover:underline">Designing for the Digital Age</h4>
                    <p className="text-sm text-gray-400">Kim Goodwin</p>
                  </a>
                  <a href="#" className="group block">
                    <h4 className="text-blue-400 group-hover:underline">Technically Wrong</h4>
                    <p className="text-sm text-gray-400">Sara Wachter-Boettcher</p>
                  </a>
                  <a href="#" className="group block">
                    <h4 className="text-blue-400 group-hover:underline">The Age of Surveillance Capitalism</h4>
                    <p className="text-sm text-gray-400">Shoshana Zuboff</p>
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-white">Ethical Tech Organizations</h3>
                <div className="space-y-3">
                  <a href="#" className="text-blue-400 hover:underline block">Ethical OS</a>
                  <a href="#" className="text-blue-400 hover:underline block">AI Now Institute</a>
                  <a href="#" className="text-blue-400 hover:underline block">Center for Humane Technology</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}