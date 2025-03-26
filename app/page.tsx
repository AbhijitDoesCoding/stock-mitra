import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { ArrowRight, BarChart3, Brain, Check, Package2 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="gradient-bg">
        <div className="container flex h-16 items-center justify-between py-4">
          <Logo />
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="secondary" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="gradient-bg py-20 text-white">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Smart Inventory Management
                </h1>
                <p className="mt-6 text-xl text-white/80">
                  AI-powered inventory predictions to optimize stock levels, reduce costs, and never miss a sale.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href="/register">
                    <Button size="lg" variant="secondary">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm">Real-time tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm">Low stock alerts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm">AI predictions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm">Supplier integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm">Data visualization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm">Cost reduction</span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-white/10 p-4 shadow-xl">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Dashboard preview"
                  className="rounded-lg"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Stock Mitra uses advanced AI algorithms to analyze your inventory data and provide actionable insights.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Package2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Track Inventory</h3>
                <p className="mt-2 text-muted-foreground">
                  Monitor your stock levels in real-time with our intuitive dashboard and get alerts when items run low.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold">AI Analysis</h3>
                <p className="mt-2 text-muted-foreground">
                  Our AI analyzes sales patterns, seasonality, and lead times to predict future inventory needs.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Optimize Stock</h3>
                <p className="mt-2 text-muted-foreground">
                  Get recommendations on optimal stock levels, reorder points, and when to place new orders.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold">Ready to optimize your inventory?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Join thousands of businesses that have transformed their inventory management with Stock Mitra.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link href="/register">
                  <Button size="lg">Get Started</Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" size="lg">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/30 py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Package2 className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold">Stock Mitra</span>
            </div>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Stock Mitra. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

