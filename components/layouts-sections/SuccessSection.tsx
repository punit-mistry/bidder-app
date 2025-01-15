import React, { use } from 'react'
import { useRef } from 'react';
import {Card} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';
const SuccessSection = () => {
    const successSectionRef = useRef<HTMLDivElement>(null);
    // useGSAP(()=>{
    //     const sparkleContainer = successSectionRef.current;
    //     gsap.from(sparkleContainer, {
    //         opacity: 0,
    //         stagger: 0.5,
    //         ease: 'power3.inOut',
    //     });
    // },[])
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 text-[#fff]" ref={successSectionRef}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-black">Success Stories</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hear from Our Satisfied Users</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our customers have had great experiences with Bidder. Read their testimonials to learn more.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="p-6 bg-muted">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold">John Doe</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <StarIcon className="h-4 w-4" />
                        <span>5.0</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Bidder made the process of selling my diamonds so easy
                      and stress-free. I got a great price and
                      the
                      transaction was secure.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-muted">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold">Sarah Anderson</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <StarIcon className="h-4 w-4" />
                        <span>4.8</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      I was hesitant to sell my diamonds online, but Bidder
                      made me feel safe and secure throughout
                      the entire\n process. Highly recommend!
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
  )
}

export default SuccessSection
function StarIcon(props:any) {
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
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  }