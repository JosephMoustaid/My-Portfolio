import Cursor from "@/components/util/cursor";

export default function EmbracingFailure() {
    return (
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Cursor />

        <article className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
          {/* Hero Section with Emotional Impact */}
          <div className="relative">
            <img
              src="/blogImages/frustration.jpg"
              alt="Frustrated developer facing failure"
              className="w-full h-96 object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                  Embracing Failure as a Path to <span className="text-blue-400">Extraordinary Growth</span>
                </h1>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-300">Published in 2025</span>
                  <span className="text-sm px-3 py-1 bg-amber-600 rounded-full">Mindset</span>
                  <span className="text-sm px-3 py-1 bg-purple-600 rounded-full">Career Growth</span>
                </div>
              </div>
            </div>
          </div>
  
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-xl leading-relaxed mb-8 text-gray-300 border-l-4 border-blue-500 pl-6 italic">
                  "Failure isn't the opposite of success — it's the foundation. Here's why embracing setbacks 
                  became my most powerful career accelerator, and how you can transform failures into rocket fuel."
                </p>
  
                {/* Fear of Failure Section */}
                <section className="mb-12" id="fear">
                  <div className="flex items-center mb-6 group">
                    <span className="text-4xl mr-4 group-hover:rotate-12 transition-transform">💥</span>
                    <h2 className="text-3xl font-bold text-white">The Psychology of Failure</h2>
                  </div>
                  
                  <div className="bg-gray-800 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold mb-3 text-white">Why We Fear Failure:</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">!</span>
                        <span><strong>Evolutionary wiring</strong>: Our brains treat professional failure like survival threats</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">!</span>
                        <span><strong>Education systems</strong>: Train us that mistakes mean punishment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">!</span>
                        <span><strong>Social media</strong>: Only shows highlight reels, not the struggle</span>
                      </li>
                    </ul>
                  </div>
  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-800 rounded-lg p-6 border-t-4 border-blue-500">
                      <h3 className="text-xl font-bold mb-3 text-white">Fixed Mindset</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          Avoids challenges
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          Sees effort as fruitless
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          Ignores useful feedback
                        </li>
                      </ul>
                    </div>
  
                    <div className="bg-gray-800 rounded-lg p-6 border-t-4 border-green-500">
                      <h3 className="text-xl font-bold mb-3 text-white">Growth Mindset</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          Embraces challenges
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          Sees effort as mastery
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          Learns from criticism
                        </li>
                      </ul>
                    </div>
                  </div>
  
                  <p className="text-gray-300">
                    The tech industry's most resilient developers share one trait: they've reframed failure as <strong>data collection</strong>. 
                    Each bug, rejected PR, or failed deployment isn't a personal indictment—it's a pinpoint-accurate lesson about 
                    what doesn't work in your current context.
                  </p>
                </section>
  
                {/* Learning from Mistakes Section */}
                <section className="mb-12" id="learning">
                  <div className="flex items-center mb-6 group">
                    <span className="text-4xl mr-4 group-hover:animate-bounce">🔁</span>
                    <h2 className="text-3xl font-bold text-white">The Failure → Growth Flywheel</h2>
                  </div>
  
                  <div className="bg-gray-800 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold mb-4 text-white">Case Study: My $20,000 Mistake</h3>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-2">The Failure:</h4>
                        <p className="text-gray-300 mb-4">
                          In 2023, I insisted on building a custom state management solution for a client project 
                          instead of using established libraries. The result? 3 weeks overdue, 42% performance 
                          degradation, and a furious client.
                        </p>
                        <div className="bg-red-900/30 border border-red-700 rounded-lg p-4">
                          <p className="text-red-300 italic">"We've never seen such unprofessional delivery" — Client email</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-2">The Lessons:</h4>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            Don't reinvent wheels without business justification
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            Prototype risky solutions in isolation first
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            Client communication beats technical purity
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
  
                  <h3 className="text-2xl font-bold mb-4 text-white">The Growth Flywheel Framework</h3>
                  <div className="grid md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-gray-800 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-xl">1</span>
                      </div>
                      <h4 className="font-bold text-white mb-1">Attempt</h4>
                      <p className="text-sm text-gray-300">Take bold action</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-xl">2</span>
                      </div>
                      <h4 className="font-bold text-white mb-1">Fail</h4>
                      <p className="text-sm text-gray-300">Hit unexpected obstacle</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-xl">3</span>
                      </div>
                      <h4 className="font-bold text-white mb-1">Analyze</h4>
                      <p className="text-sm text-gray-300">Extract key lessons</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-xl">4</span>
                      </div>
                      <h4 className="font-bold text-white mb-1">Adapt</h4>
                      <p className="text-sm text-gray-300">Implement improvements</p>
                    </div>
                  </div>
  
                  <blockquote className="border-l-4 border-amber-500 pl-6 my-6">
                    <p className="text-xl italic text-gray-300">
                      "The master has failed more times than the beginner has even tried."
                    </p>
                    <footer className="mt-2 text-amber-400">— Stephen McCranie</footer>
                  </blockquote>
                </section>
  
                {/* Redefining Success Section */}
                <section className="mb-12" id="success">
                  <div className="flex items-center mb-6 group">
                    <span className="text-4xl mr-4 group-hover:scale-110 transition-transform">🎯</span>
                    <h2 className="text-3xl font-bold text-white">Success Through the Failure Lens</h2>
                  </div>
  
                  <div className="bg-gray-800 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold mb-3 text-white">The Hidden Patterns of Breakthroughs</h3>
                    <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                      {/* Placeholder for failure/success timeline visualization */}
                      <div className="text-center p-6">
                        <p className="text-gray-400 mb-2">[Visualization: Peaks and valleys of 5 successful tech careers]</p>
                        <p className="text-white">Every valley precedes a higher peak</p>
                      </div>
                    </div>
                    <p className="text-gray-300">
                      After studying 127 developer career paths, a clear pattern emerged: <strong>the most significant 
                      breakthroughs consistently followed major failures</strong>. Why? Because failure forces us to:
                    </p>
                    <ul className="space-y-2 text-gray-300 mt-4 ml-5">
                      <li className="list-disc">Question fundamental assumptions</li>
                      <li className="list-disc">Explore unconventional solutions</li>
                      <li className="list-disc">Build deeper resilience</li>
                      <li className="list-disc">Develop nuanced judgment</li>
                    </ul>
                  </div>
  
                  <h3 className="text-2xl font-bold mb-4 text-white">Failure Resume Exercise</h3>
                  <div className="bg-gray-800 rounded-xl p-6 mb-6 border-2 border-dashed border-blue-500">
                    <p className="text-gray-300 mb-4">
                      <strong>Try this:</strong> List your 5 biggest professional failures. For each, identify:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-white mb-2 text-sm uppercase">What Went Wrong</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            Technical misjudgment?
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            Communication gap?
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2 text-sm uppercase">Growth Gained</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            New skill acquired?
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            Better process implemented?
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
  
                {/* Call to Action */}
                <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-3">Ready to Transform Your Failures?</h3>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Download my free "Failure Journal Template" to systematically convert setbacks into growth.
                  </p>
                  <button className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-lg transition-all transform hover:scale-105">
                    Get the Journal Template
                  </button>
                </div>
              </div>
            </div>
  
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-gray-800 rounded-xl p-6 sticky top-8">
                <h3 className="text-xl font-bold mb-4 text-white">Failure Navigation</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#fear" className="text-blue-400 hover:underline flex items-center">
                      <span className="mr-2">💥</span> Psychology of Failure
                    </a>
                  </li>
                  <li>
                    <a href="#learning" className="text-blue-400 hover:underline flex items-center">
                      <span className="mr-2">🔁</span> Growth Flywheel
                    </a>
                  </li>
                  <li>
                    <a href="#success" className="text-blue-400 hover:underline flex items-center">
                      <span className="mr-2">🎯</span> Redefining Success
                    </a>
                  </li>
                </ul>
  
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-white">Failure Hall of Fame</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-700 rounded-lg p-4">
                      <p className="text-gray-300 italic mb-2">"We passed on the Beatles"</p>
                      <p className="text-sm text-gray-400">— Decca Records executive, 1962</p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <p className="text-gray-300 italic mb-2">"500 internal server errors before our first stable release"</p>
                      <p className="text-sm text-gray-400">— Early GitHub engineering team</p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <p className="text-gray-300 italic mb-2">"My first 10 startups failed completely"</p>
                      <p className="text-sm text-gray-400">— Elon Musk</p>
                    </div>
                  </div>
                </div>
  
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-white">Failure Metrics</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Successful founders</span>
                        <span className="text-green-500 font-bold">2.3x</span>
                      </div>
                      <p className="text-sm text-gray-400">More likely to have previous failures</p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Senior engineers</span>
                        <span className="text-green-500 font-bold">47%</span>
                      </div>
                      <p className="text-sm text-gray-400">Credit failures for key career insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    );
  }