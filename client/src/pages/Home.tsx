/**
 * Design Philosophy: Cyber-Tech
 * Primary: Electric Blue oklch(0.65 0.25 240)
 * Accent: Neon Green oklch(0.75 0.2 180)
 * Background: Deep Navy oklch(0.12 0.02 240)
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  Boxes, 
  Workflow, 
  Code2, 
  Database, 
  CheckCircle2, 
  ArrowRight,
  Github,
  Terminal,
  Cpu,
  Network,
  Lock,
  Gauge
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold">Nexus AI</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#quickstart" className="text-muted-foreground hover:text-foreground transition-colors">Quick Start</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <Button variant="default" className="glow-border">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://private-us-east-1.manuscdn.com/sessionFile/yJ4xAHmF2JGsFOXKub0DCZ/sandbox/OjEa6WTPAM6eMPyN6PsXZ7-img-1_1771236313000_na1fn_bmV4dXMtaGVyby1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveUo0eEFIbUYySkdzRk9YS3ViMERDWi9zYW5kYm94L09qRWE2V1RQQU02ZU1QeU42UHNYWjctaW1nLTFfMTc3MTIzNjMxMzAwMF9uYTFmbl9ibVY0ZFhNdGFHVnlieTFpWncucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=vJGWpKlBaGSZz1OSjN5ql-y59UA8YMCxM5DXk~RVqwKMpnzTHZ8q-MGtxTHKafAJ6puvAIaUXAd9z-9MUc6YjiUojBe0CsG6AslxSqtK7U5UtQB2oe5-UWSvdzGDtwBnYSXobKV05mbt-cRPlmLE4LHEQ6uYnm7mSzXhjCIl8WAtRLE4kD9BErFnc4KetiBAa5dzPp6ZA5OwmGqKNcLNzgoQeR2o1D-lRmdL5hpF1Vv3mCmkCX2LLAEfZQZWeOMiW1oEojAGH3e5tGSOASe9TsD0XCbfkvvpFnyA8VTA4jAuPOHpVYiBh0sJMMv9QxZAa~LCuMT4gYF7Pbl3yVPftg__" 
            alt="Neural network background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-primary/20 text-primary border-primary/50 hover:bg-primary/30">
                Production-Ready
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Build AI Agents<br />
                <span className="text-primary animate-glow">Without Limits</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Deploy production-ready autonomous agents with unlimited LLM access, advanced tool capabilities, and enterprise-grade infrastructure. From prototype to production in minutes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="glow-border group">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-border/50">
                  <Github className="mr-2 w-4 h-4" />
                  View on GitHub
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm">10+ LLM Providers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm">$0-5/month</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm">100% Uptime</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="code-block glow-border space-y-3">
                <div className="flex items-center gap-2 pb-3 border-b border-border/30">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/70"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-accent/70"></div>
                  </div>
                  <span className="text-xs text-muted-foreground ml-auto">deploy.sh</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-accent">$</span>
                    <span className="text-foreground">npx create-nexus-agent my-agent</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent">$</span>
                    <span className="text-foreground">cd my-agent && npm start</span>
                  </div>
                  <div className="text-muted-foreground mt-4">
                    <span className="text-accent">✓</span> Agent initialized successfully
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-accent">✓</span> Connected to 10 LLM providers
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-accent">✓</span> Ready to accept requests
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg p-4 glow-border">
                <div className="text-3xl font-bold text-primary">5 min</div>
                <div className="text-xs text-muted-foreground">Deploy time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-card/30 diagonal-cut-top">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-accent/20 text-accent border-accent/50">Core Features</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Everything You Need for <span className="text-primary">Production AI</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built-in infrastructure, tools, and integrations to deploy autonomous agents at scale
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Unlimited LLM Access",
                description: "Connect to 10+ providers including GPT-4, Claude, Gemini, and open-source models",
                benefits: ["No rate limits", "Automatic fallback", "Cost optimization"]
              },
              {
                icon: Workflow,
                title: "Advanced Tool System",
                description: "Built-in tools for web browsing, code execution, file operations, and custom integrations",
                benefits: ["50+ pre-built tools", "Custom tool API", "Parallel execution"]
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Production-grade security with sandboxed execution and encrypted data storage",
                benefits: ["SOC 2 compliant", "Data encryption", "Audit logging"]
              },
              {
                icon: Database,
                title: "Persistent Memory",
                description: "Long-term memory system with vector databases and semantic search",
                benefits: ["Unlimited storage", "Fast retrieval", "Context management"]
              },
              {
                icon: Network,
                title: "Multi-Agent Orchestration",
                description: "Coordinate multiple agents with shared state and message passing",
                benefits: ["Agent collaboration", "Task delegation", "State synchronization"]
              },
              {
                icon: Gauge,
                title: "Real-time Monitoring",
                description: "Comprehensive dashboards for agent performance, costs, and errors",
                benefits: ["Live metrics", "Cost tracking", "Error alerts"]
              }
            ].map((feature, i) => (
              <Card key={i} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:glow-border group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center mb-4 group-hover:animate-glow">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {feature.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section id="quickstart" className="py-20 diagonal-cut-bottom">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/20 text-primary border-primary/50">Get Started</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Deploy in <span className="text-accent">Three Ways</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the deployment method that fits your workflow
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                badge: "Fastest",
                title: "GitHub Template",
                steps: ["Click 'Use this template'", "Clone your repository", "Run npm install && npm start"],
                code: "git clone your-repo\nnpm install\nnpm start"
              },
              {
                badge: "Easiest",
                title: "Quick Start Script",
                steps: ["Run the one-line installer", "Answer configuration prompts", "Agent starts automatically"],
                code: "npx create-nexus-agent\n# Follow the prompts\n# Done!"
              },
              {
                badge: "Flexible",
                title: "Manual Setup",
                steps: ["Install dependencies", "Configure environment", "Deploy to your infrastructure"],
                code: "npm install nexus-ai\nnexus init\nnexus deploy"
              }
            ].map((method, i) => (
              <Card key={i} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all">
                <CardHeader>
                  <Badge className="bg-accent/20 text-accent border-accent/50 w-fit mb-2">{method.badge}</Badge>
                  <CardTitle className="text-2xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="space-y-2">
                    {method.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <span className="text-primary font-bold">{j + 1}.</span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="code-block text-xs">
                    <pre className="whitespace-pre-wrap">{method.code}</pre>
                  </div>
                  <Button className="w-full group">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-primary/20 to-accent/10 border-primary/50 glow-border">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Build the Future?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of developers deploying production AI agents with Nexus. <strong className="text-foreground">$0-5/month</strong> · <strong className="text-foreground">100% uptime</strong> · <strong className="text-foreground">Unlimited scale</strong>
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button size="lg" className="glow-border group">
                  <Terminal className="mr-2 w-5 h-5" />
                  Start Building Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-border/50">
                  <Github className="mr-2 w-5 h-5" />
                  View Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 bg-card/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl font-bold">Nexus AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Production-ready AI agent platform for developers
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Quick Start</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Examples</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API Reference</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Discussions</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Issues</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contributing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">License</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>© 2026 Nexus AI. Open source under MIT License.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
