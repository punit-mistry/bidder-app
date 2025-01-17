import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
const cardData = [
  {
    avatarImage: "/placeholder-user.jpg",
    avatarFallback: "JD",
    name: "John Doe",
    rating: 5.0,
    feedback:
      "Bidder made the process of selling my diamonds so easy and stress-free. I got a great price and the transaction was secure.",
  },
  {
    avatarImage: "/placeholder-user.jpg",
    avatarFallback: "SA",
    name: "Sarah Anderson",
    rating: 4.8,
    feedback:
      "I was hesitant to sell my diamonds online, but Bidder made me feel safe and secure throughout the entire process. Highly recommend!",
  },
    {
      avatarImage: "/placeholder-user.jpg",
      avatarFallback: "JD",
      name: "John Doe",
      rating: 5.0,
      feedback:
        "Bidder made the process of selling my diamonds so easy and stress-free. I got a great price and the transaction was secure.",
    },
    {
      avatarImage: "/placeholder-user.jpg",
      avatarFallback: "SA",
      name: "Sarah Anderson",
      rating: 4.8,
      feedback:
        "I was hesitant to sell my diamonds online, but Bidder made me feel safe and secure throughout the entire process. Highly recommend!",
    },
    

];

export default function FeedbackCards() {
    const containerRef = useRef(null);
  const { scrollYProgress } = useScroll(
    {
        target: containerRef,
        offset: ['0 1', '1.33 1' ],
    }
  );
  const scrollCard = useTransform(scrollYProgress, [0, 0.5], [0, 100]); // Adjust [0, 100] to fine-tune scrolling

  useEffect(() => {
    const unsubscribe = scrollCard.onChange((value) => {
      if (containerRef.current) {
        containerRef.current.scrollLeft = value; // Sync horizontal scroll with transformed value
      }
    });
console.log(scrollCard)
    return () => unsubscribe(); // Cleanup on unmount
  }, [scrollCard]);

  return (
    <div
      ref={containerRef}
      className="mx-auto max-w-8xl flex overflow-x-auto items-center gap-6 py-12 lg:gap-12 bg-red-500 h-screen"
      style={{ scrollBehavior: "smooth" }} // Smooth scrolling effect
    >
      {cardData.map((card, index) => (
        <motion.div key={index} className="p-6 bg-muted min-w-[400px]">
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarImage src={card.avatarImage} />
              <AvatarFallback>{card.avatarFallback}</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold">{card.name}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <StarIcon className="h-4 w-4" />
                  <span>{card.rating}</span>
                </div>
              </div>
              <p className="text-muted-foreground">{card.feedback}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

  function StarIcon(props: any) {
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
    );
  }