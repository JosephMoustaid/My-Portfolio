import Cursor from "@/components/util/cursor";

export default function MyExperienceWithSpring() {
  return (
    <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Cursor />
      <article className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
        {/* Hero Section */}
        <div className="relative">
          <img
            src="/blogImages/Spring.webp"
            alt="Spring Framework architecture diagram with microservices"
            className="w-full h-96 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                My Journey Through the <span className="text-green-400">Spring Ecosystem</span>
              </h1>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-gray-300">Published on April 25, 2025</span>
                <span className="text-sm px-3 py-1 bg-blue-600 rounded-full">Java</span>
                <span className="text-sm px-3 py-1 bg-purple-600 rounded-full">Backend</span>
                <span className="text-sm px-3 py-1 bg-amber-600 rounded-full">Microservices</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl leading-relaxed mb-8 text-gray-300 border-l-4 border-blue-400 pl-6 italic">
                "Spring didn't just teach me Java frameworks—it reshaped how I think about scalable, maintainable systems."
              </p>

              {/* Spring Boot Section */}
              <section className="mb-12" id="boot">
                <div className="flex items-center mb-6 group">
                  <span className="text-4xl mr-4 group-hover:rotate-12 transition-transform">🌱</span>
                  <h2 className="text-3xl font-bold text-white">Starting with Spring Boot</h2>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 mb-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-white">Core Strengths</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <strong>Auto-configuration</strong> that adapts to your dependencies
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          Embedded servers (<strong>Tomcat</strong>, Netty, Jetty)
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <strong>Starter POMs</strong> for painless dependency management
                        </li>
                      </ul>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-white">First Project Stats</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">→</span>
                          <strong>3 days</strong> to production-ready REST API
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">→</span>
                          <strong>80%</strong> less XML than traditional Spring
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">→</span>
                          <strong>12</strong> auto-configured beans used
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-green-500">
                    <h3 className="text-xl font-bold mb-3 text-white">What I Built</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>User auth system with JWT</li>
                      <li>CRUD API with Hibernate validation</li>
                      <li>PDF generation endpoint</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-blue-500">
                    <h3 className="text-xl font-bold mb-3 text-white">Key Takeaways</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>Convention over configuration = faster dev</li>
                      <li>Test slices (@WebMvcTest) are game-changers</li>
                      <li>Spring DevTools enable rapid iteration</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Security Section */}
              <section className="mb-12" id="security">
                <div className="flex items-center mb-6 group">
                  <span className="text-4xl mr-4 group-hover:animate-pulse">🔐</span>
                  <h2 className="text-3xl font-bold text-white">Spring Security Deep Dive</h2>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-3 text-white">Authentication Flow</h3>
                  <div className="space-y-4">
                    {[
                      {icon: "1️⃣", title: "Request Intercepted", 
                       content: "AuthenticationFilter checks for credentials"},
                      {icon: "2️⃣", title: "Provider Manager", 
                       content: "Delegates to configured AuthProviders"},
                      {icon: "3️⃣", title: "UserDetailsService", 
                       content: "Loads user from database (or other source)"},
                      {icon: "4️⃣", title: "Security Context", 
                       content: "Stores authenticated principal"}
                    ].map((item) => (
                      <div key={item.title} className="flex items-start">
                        <span className="text-2xl mr-3 mt-1">{item.icon}</span>
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
                    <h3 className="text-xl font-bold mb-3 text-white">JWT Implementation</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <code>JJWT</code> library for token handling
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Custom <code>OncePerRequestFilter</code> for validation
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Refresh token rotation strategy
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <h3 className="text-xl font-bold mb-3 text-white">Common Pitfalls</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        CSRF protection with JWT
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Proper exception handling
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Role vs. permission granularity
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Spring Cloud Section */}
              <section className="mb-12" id="cloud">
                <div className="flex items-center mb-6 group">
                  <span className="text-4xl mr-4 group-hover:scale-110 transition-transform">☁</span>
                  <h2 className="text-3xl font-bold text-white">Spring Cloud Architecture</h2>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4 text-white">Microservices Toolbox</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      {icon: "🔍", name: "Eureka", desc: "Service discovery"},
                      {icon: "⚙️", name: "Config", desc: "Centralized config"},
                      {icon: "🔄", name: "Feign", desc: "Declarative REST clients"},
                      {icon: "🛡️", name: "Gateway", desc: "API routing"},
                      {icon: "💥", name: "Resilience4j", desc: "Circuit breaking"},
                      {icon: "📊", name: "Sleuth", desc: "Distributed tracing"}
                    ].map((tool) => (
                      <div key={tool.name} className="bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">{tool.icon}</div>
                        <h4 className="font-bold">{tool.name}</h4>
                        <p className="text-sm text-gray-400">{tool.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <blockquote className="border-l-4 border-purple-500 pl-6 my-6">
                  <p className="text-xl italic text-gray-300">
                    "Spring Cloud turns the complexity of distributed systems into manageable abstractions."
                  </p>
                </blockquote>

                <div className="bg-gray-800 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold mb-3 text-white">Service Communication</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-2">RestTemplate</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          Traditional synchronous calls
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          Manual load balancing
                        </li>
                      </ul>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-2">WebClient</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          Reactive non-blocking IO
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          Better for high concurrency
                        </li>
                      </ul>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-2">Feign</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          Declarative interface
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          Integrates with Ribbon
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Lessons Learned */}
              <section className="mb-12" id="lessons">
                <div className="flex items-center mb-6 group">
                  <span className="text-4xl mr-4 group-hover:rotate-45 transition-transform">💡</span>
                  <h2 className="text-3xl font-bold text-white">Key Lessons</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-800 rounded-lg p-6 border-t-4 border-green-500">
                    <h3 className="text-xl font-bold mb-3 text-white">Do's</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        Use <code>@SpringBootTest</code> sparingly
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        Leverage Spring Profiles
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        Monitor with Actuator endpoints
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6 border-t-4 border-red-500">
                    <h3 className="text-xl font-bold mb-3 text-white">Don'ts</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        Overuse <code>@Autowired</code>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        Ignore connection pooling
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        Skip proper exception handling
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Next Steps */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Where I'm Heading Next</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Exploring reactive programming with WebFlux and optimizing with Spring Native + GraalVM.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <span className="px-4 py-2 bg-white/10 rounded-full">Project Reactor</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full">RSocket</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full">GraalVM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-gray-800 rounded-xl p-6 sticky top-8">
              <h3 className="text-xl font-bold mb-4 text-white">Spring Journey</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#boot" className="text-blue-400 hover:underline flex items-center">
                    <span className="mr-2">🌱</span> Spring Boot Basics
                  </a>
                </li>
                <li>
                  <a href="#security" className="text-blue-400 hover:underline flex items-center">
                    <span className="mr-2">🔐</span> Security Deep Dive
                  </a>
                </li>
                <li>
                  <a href="#cloud" className="text-blue-400 hover:underline flex items-center">
                    <span className="mr-2">☁️</span> Spring Cloud
                  </a>
                </li>
                <li>
                  <a href="#lessons" className="text-blue-400 hover:underline flex items-center">
                    <span className="mr-2">💡</span> Key Lessons
                  </a>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-white">Spring Stats</h3>
                <div className="space-y-4">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Boot Startup Time</span>
                      <span className="text-green-500 font-bold">1.8s</span>
                    </div>
                    <p className="text-sm text-gray-400">Avg for simple REST service</p>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">JPA Queries Optimized</span>
                      <span className="text-green-500 font-bold">-70%</span>
                    </div>
                    <p className="text-sm text-gray-400">After N+1 fixes</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-white">Essential Resources</h3>
                <div className="space-y-4">
                  <a href="#" className="group block">
                    <h4 className="text-blue-400 group-hover:underline">Spring Initializr</h4>
                    <p className="text-sm text-gray-400">Project bootstrap tool</p>
                  </a>
                  <a href="#" className="group block">
                    <h4 className="text-blue-400 group-hover:underline">Baeldung Guides</h4>
                    <p className="text-sm text-gray-400">In-depth tutorials</p>
                  </a>
                  <a href="#" className="group block">
                    <h4 className="text-blue-400 group-hover:underline">Spring One</h4>
                    <p className="text-sm text-gray-400">Conference videos</p>
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-white">Recommended Books</h3>
                <div className="space-y-3">
                  <a href="#" className="text-blue-400 hover:underline block">"Spring in Action" - Craig Walls</a>
                  <a href="#" className="text-blue-400 hover:underline block">"Spring Boot Up & Running" - Mark Heckler</a>
                  <a href="#" className="text-blue-400 hover:underline block">"Cloud Native Java" - O'Reilly</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}