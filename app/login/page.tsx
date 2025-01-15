'use client'
import React from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Component() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted",formData);
    };
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center bg-primary p-6 text-primary-foreground lg:p-12">
        <div className="mx-auto max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold tracking-tight">Welcome to Diamond Bidding</h1>
            <p className="text-lg text-primary-foreground/80">
              Discover the world&apos;s most exquisite diamonds and bid with confidence.
            </p>
          </div>
          <div className="grid gap-4">
            <Button variant="secondary" className="w-full">
              <GithubIcon className="mr-2 h-4 w-4" />
              Sign in with Github
            </Button>
            <Button variant="secondary" className="w-full">
              <ChromeIcon className="mr-2 h-4 w-4" />
              Sign in with Google
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-background p-6 lg:p-12">
        <div className="mx-auto max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold tracking-tight">Sign In</h1>
            <p className="text-lg text-muted-foreground">Enter your email and password to access your account.</p>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="text-sm font-medium text-primary hover:underline" prefetch={false}>
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
            </div>
            <Button type="submit" className="w-full">
              Login In
            </Button>
          </form>
          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?
            <Link href="#" className="font-medium text-primary hover:underline" prefetch={false}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

function ChromeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function GithubIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}