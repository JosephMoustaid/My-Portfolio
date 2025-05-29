import Cursor from "@/components/util/cursor";



export default function WhyMinimalismMatters() {
  return (
    <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Cursor />
      <article className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
        {/* Zen-inspired Hero Section */}
        <div className="relative">
          <img
            src="/blogImages/minimalism.jpg"
            alt="Minimalist setup with clean space"
            className="w-full h-96 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                Why <span className="text-amber-400">Minimalism</span> Matters in Our <br />Digital Age
              </h1>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-300">Published on April 25, 2025</span>
                <span className="text-sm px-3 py-1 bg-green-600 rounded-full">Lifestyle</span>
                <span className="text-sm px-3 py-1 bg-blue-600 rounded-full">Productivity</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl leading-relaxed mb-8 text-gray-300 border-l-4 border-amber-400 pl-6 italic">
                "In an era of infinite options, the radical act of choosing less becomes our most powerful tool for clarity, purpose, and unexpected joy."
              </p>

              {/* The Case for Less Section */}
              <section className="mb-12" id="case">
                <div className="flex items-center mb-6 group">
                  <span className="text-4xl mr-4 group-hover:-rotate-12 transition-transform">🧘</span>
                  <h2 className="text-3xl font-bold text-white">The Paradox of Choice</h2>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 mb-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-white">Digital Clutter Audit</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          Average person has <strong>83 apps</strong> installed
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          Receives <strong>121 non-essential emails</strong> weekly
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          Wastes <strong>2.1 hours/day</strong> managing digital chaos
                        </li>
                      </ul>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-white">Physical Space Reality</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <strong>40%</strong> of home items never used
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <strong>27 hours/year</strong> spent searching for lost items
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">
                  Minimalism isn't deprivation—it's <strong>strategic subtraction</strong>. By removing the non-essential, we don't just create space—we create <span className="text-amber-400">magnification</span> for what remains. The single notebook on a clean desk. The three perfect apps in your dock. The carefully curated bookshelf.
                </p>

                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
                  <h3 className="text-xl font-bold mb-3 text-white">Minimalism Spectrum</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">Digital</span>
                        <span className="text-gray-400">Extreme → Balanced → Cluttered</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '40%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">Physical</span>
                        <span className="text-gray-400">Extreme → Balanced → Cluttered</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{width: '35%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">Mental</span>
                        <span className="text-gray-400">Extreme → Balanced → Cluttered</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '45%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Clarity Through Simplicity Section */}
              <section className="mb-12" id="clarity">
                <div className="flex items-center mb-6 group">
                  <span className="text-4xl mr-4 group-hover:scale-110 transition-transform">🧠</span>
                  <h2 className="text-3xl font-bold text-white">The Neuroscience of Less</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-blue-500">
                    <h3 className="text-xl font-bold mb-3 text-white">Attention</h3>
                    <p className="text-gray-300">
                      Every object in view competes for neural resources. Clean spaces reduce cognitive load by up to <strong>38%</strong>.
                    </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-green-500">
                    <h3 className="text-xl font-bold mb-3 text-white">Creativity</h3>
                    <p className="text-gray-300">
                      Stanford researchers found minimalist environments increase innovative thinking by <strong>27%</strong>.
                    </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-purple-500">
                    <h3 className="text-xl font-bold mb-3 text-white">Decision Fatigue</h3>
                    <p className="text-gray-300">
                      Reducing daily choices from 50 to 30 preserves willpower equivalent to <strong>3 hours</strong> of mental work.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-3 text-white">Case Study: The 100-Day Digital Minimalism Challenge</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-2">Before:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          7 messaging apps
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          4.2 hours screen time
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          19 browser tabs open
                        </li>
                      </ul>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-2">After 100 Days:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          2 core messaging apps
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          1.8 hours screen time
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          Max 5 browser tabs
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-gray-700 rounded-lg">
                    <p className="text-amber-400 italic">
                      "The biggest surprise? I didn't miss anything. I gained 11 hours per week and finally read War and Peace."
                    </p>
                  </div>
                </div>
              </section>

              {/* Living with Purpose Section */}
              <section className="mb-12" id="purpose">
                <div className="flex items-center mb-6 group">
                  <span className="text-4xl mr-4 group-hover:rotate-12 transition-transform">🎯</span>
                  <h2 className="text-3xl font-bold text-white">Intentional Living Framework</h2>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4 text-white">The 5-Step Minimalism Filter</h3>
                  <div className="space-y-4">
                    {[
                      {step: 1, title: "Define Core Values", 
                       content: "List your 3-5 fundamental life priorities (e.g., creativity, family, health)"},
                      {step: 2, title: "Inventory Audit", 
                       content: "Catalog your digital/physical possessions (apps, clothes, tools)"},
                      {step: 3, title: "The 90-Day Test", 
                       content: "For each item: Have I used this in 90 days? Will I in the next 90?"},
                      {step: 4, title: "The Value Alignment", 
                       content: "Does this actively support my core values? (Not just 'might be useful')"},
                      {step: 5, title: "The Container Concept", 
                       content: "Assign fixed space for categories (e.g., 1 drawer for socks, 1 folder for apps)"}
                    ].map((item) => (
                      <div key={item.step} className="flex">
                        <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-bold text-white">{item.title}</h4>
                          <p className="text-gray-300">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <blockquote className="border-l-4 border-green-500 pl-6 my-6">
                  <p className="text-xl italic text-gray-300">
                    "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away."
                  </p>
                  <footer className="mt-2 text-green-400">— Antoine de Saint-Exupéry</footer>
                </blockquote>
              </section>

              {/* Daily Life Section */}
              <section className="mb-12" id="daily">
                <div className="flex items-center mb-6 group">
                  <span className="text-4xl mr-4 group-hover:animate-pulse">🌿</span>
                  <h2 className="text-3xl font-bold text-white">Minimalism Micro-Habits</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <h3 className="text-xl font-bold mb-3 text-white">Digital Minimalism</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
                        <span><strong>App Zero</strong>: Return your home screen to empty (only dock essentials)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
                        <span><strong>Single-Tab Rule</strong>: Never have more tabs open than browser window width allows</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
                        <span><strong>Notification Fasting</strong>: 4-hour blocks with all notifications disabled</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <h3 className="text-xl font-bold mb-3 text-white">Physical Minimalism</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
                        <span><strong>One-In-Two-Out</strong>: For every new item, remove two existing ones</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
                        <span><strong>Flat Surface Zero</strong>: Keep all tables/desks completely clear</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
                        <span><strong>The 20-20 Rule</strong>: If you can replace it for under $20 in 20 minutes, don't store it</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">30-Day Minimalism Challenge</h3>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center p-6">
                      <p className="text-gray-400 mb-2">[Visualization: 30-day calendar with daily micro-challenges]</p>
                      <p className="text-white">Day 1: Unsubscribe from 10 emails<br />Day 2: Delete 5 unused apps<br />...<br />Day 30: Digital sabbath</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-amber-900 to-amber-700 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Ready to Declutter Your Life?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Get our free "Minimalist Starter Kit" with templates, checklists, and the 30-day challenge calendar.
                </p>
                <button className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-lg transition-all transform hover:scale-105">
                  Download the Starter Kit
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-gray-800 rounded-xl p-6 sticky top-8">
              <h3 className="text-xl font-bold mb-4 text-white">Minimalism Path</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#case" className="text-blue-400 hover:underline flex items-center">
                    <span className="mr-2">🧘</span> Paradox of Choice
                  </a>
                </li>
                <li>
                  <a href="#clarity" className="text-blue-400 hover:underline flex items-center">
                    <span className="mr-2">🧠</span> Neuroscience of Less
                  </a>
                </li>
                <li>
                  <a href="#purpose" className="text-blue-400 hover:underline flex items-center">
                    <span className="mr-2">🎯</span> Intentional Living
                  </a>
                </li>
                <li>
                  <a href="#daily" className="text-blue-400 hover:underline flex items-center">
                    <span className="mr-2">🌿</span> Micro-Habits
                  </a>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-white">Minimalism Benchmarks</h3>
                <div className="space-y-4">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Digital Workspace</span>
                      <span className="text-green-500 font-bold">≤15</span>
                    </div>
                    <p className="text-sm text-gray-400">Ideal number of desktop files/icons</p>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Phone Apps</span>
                      <span className="text-green-500 font-bold">≤24</span>
                    </div>
                    <p className="text-sm text-gray-400">Optimal installed apps (1 home screen)</p>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Wardrobe</span>
                      <span className="text-green-500 font-bold">37%</span>
                    </div>
                    <p className="text-sm text-gray-400">Average reduction after minimalism</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-white">Essential Reads</h3>
                <div className="space-y-4">
                  <a href="#" className="group block">
                    <h4 className="text-blue-400 group-hover:underline">Digital Minimalism</h4>
                    <p className="text-sm text-gray-400">Cal Newport</p>
                  </a>
                  <a href="#" className="group block">
                    <h4 className="text-blue-400 group-hover:underline">The Life-Changing Magic of Tidying Up</h4>
                    <p className="text-sm text-gray-400">Marie Kondo</p>
                  </a>
                  <a href="#" className="group block">
                    <h4 className="text-blue-400 group-hover:underline">Essentialism</h4>
                    <p className="text-sm text-gray-400">Greg McKeown</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}