import type { Metadata } from "next"
import Link from "next/link"
import { UserAuthForm } from "@/components/user-auth-form"
import { Logo } from "@/components/logo"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Login - Stock Mitra",
  description: "Login to your Stock Mitra account",
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex flex-1 flex-col gradient-bg p-10">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="mt-auto">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Welcome back to your inventory management solution
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Log in to access your AI-powered inventory dashboard and make smarter restocking decisions.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <Check className="h-4 w-4 text-white" />
              </div>
              <p className="text-white">Real-time inventory tracking</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <Check className="h-4 w-4 text-white" />
              </div>
              <p className="text-white">AI-powered restocking predictions</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <Check className="h-4 w-4 text-white" />
              </div>
              <p className="text-white">Reduce excess stock and save costs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Login to your account</h1>
            <p className="text-sm text-muted-foreground">Enter your email and password to access your dashboard</p>
          </div>
          <UserAuthForm type="login" />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline underline-offset-4 hover:text-primary">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

