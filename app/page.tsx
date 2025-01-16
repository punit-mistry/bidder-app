'use client'
import Link from "next/link"
import Image from "next/image"
import { useRef, useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"
import SuccessSection from "@/components/layouts-sections/SuccessSection"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wallRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const BiddingExperience = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const section = BiddingExperience.current;
      if (section) {
        const { top } = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        console.log(windowHeight,top)
        if (top < windowHeight * 0.8) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 500 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div ref={containerRef} style={{ position: 'relative', minHeight: '100dvh', overflow: 'hidden' }}>
      <div 
        ref={wallRef} 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#020202',
          zIndex: 10
        }}
      />
      <div ref={contentRef} className="flex flex-col min-h-[100dvh]" style={{ position: 'relative', zIndex: 20 }}>
        <header className="px-4 lg:px-6 h-14 flex items-center text-[#fff]">
          <Link href="#" className="flex items-center justify-center" prefetch={false}>
            <DiamondIcon className="h-6 w-6" />
            <span className="sr-only">Bidder</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6 " ref={navLinksRef}>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Features
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 h-[100dvh] text-[#fff]">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Unlock the Value of Your Diamonds
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Bidder is the premier platform for buying and selling diamonds. Upload your diamonds and let the
                      bidding begin.
                    </p>
                  </div>
                  <Link
                    href="/bids"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Start Bidding
                  </Link>
                </div>
                <Image
                  src="/placeholder.jpg"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                />
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <motion.div 
              className="container px-4 md:px-6" 
              ref={BiddingExperience} 
              initial={{ opacity: 0, y: 50 }} 
              animate={controls} 
              transition={{ duration: 0.5, ease: "easeOut" }}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Streamline Your Bidding Experience</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Bidder offers a seamless and secure platform for buying and selling diamonds. From easy diamond
                    uploads to real-time bidding, we&apos;ve got you covered.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <Image
                  src="/gem.jpg"
                  width="550"
                  height="310"
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Easy Diamond Upload</h3>
                        <p className="text-muted-foreground">
                          Quickly and securely upload your diamonds to our platform.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Real-Time Bidding</h3>
                        <p className="text-muted-foreground">
                          Experience the thrill of real-time bidding and get the best price for your diamonds.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Secure Transactions</h3>
                        <p className="text-muted-foreground">
                          Rest assured that your transactions are secure and protected.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </section>
          <SuccessSection />
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Unlock the Value of Your Diamonds?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start your bidding journey with Bidder today. Upload your diamonds and let the bids roll in.
                </p>
              </div>
              <Link
                href="/bids"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Start Bidding
              </Link>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">&copy; 2024 Bidder. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  )
}

function DiamondIcon(props: any) {
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
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
    </svg>
  )
}
