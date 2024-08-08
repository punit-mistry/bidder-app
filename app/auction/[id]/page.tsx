'use client'
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Component() {
    const initialMinutes = 83; // 1 hour and 23 minutes
    const totalSeconds = initialMinutes * 60; // Convert to total seconds
    const [timeLeft, setTimeLeft] = useState(totalSeconds);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const intervalId = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const formatTime = (seconds:number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours}h ${minutes}m ${secs}s`;
    };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                prefetch={false}
              >
                <DiamondIcon className="h-5 w-5 transition-all group-hover:scale-110" />
                <span className="sr-only">Diamond Auctions</span>
              </Link>
              <Link href="#" className="flex items-center gap-4 px-2.5 text-foreground" prefetch={false}>
                <GemIcon className="h-5 w-5" />
                Browse Diamonds
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <CalendarIcon className="h-5 w-5" />
                Auction Schedule
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <UserIcon className="h-5 w-5" />
                Account Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex-1 md:grow-0">
          <Input
            type="search"
            placeholder="Search diamonds..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
               <Image
                src='/placeholder.jpg'
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
                style={{ aspectRatio: "36/36", objectFit: "cover" }}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Bids</DropdownMenuItem>
            <DropdownMenuItem>Favorites</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Current Diamond Auction</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                <div>
                  <div className="text-sm text-muted-foreground">Carat</div>
                  <div className="text-2xl font-bold">2.5</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Clarity</div>
                  <div className="text-2xl font-bold">VS1</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Cut</div>
                  <div className="text-2xl font-bold">Excellent</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                <div>
                  <div className="text-sm text-muted-foreground">Color</div>
                  <div className="text-2xl font-bold">D</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Polish</div>
                  <div className="text-2xl font-bold">Excellent</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Symmetry</div>
                  <div className="text-2xl font-bold">Excellent</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                <div>
                  <div className="text-sm text-muted-foreground">Current Bid</div>
                  <div className="text-2xl font-bold">$75,000</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Time Left</div>
                  <div className="text-2xl font-bold"> {timeLeft > 0 ? formatTime(timeLeft) : "Time's up!"}</div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button size="lg">Bid $80,000</Button>
                  <Button size="lg" variant="outline">
                    Bid $85,000
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Image
                  src='/placeholder.jpg'
                  alt="Image"
                  width={500}
                  height={100}
                />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Auction History</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Bid Amount</TableHead>
                    <TableHead>Bidder</TableHead>
                    <TableHead>Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>$70,000</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>10:23 AM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>$72,000</TableCell>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>10:25 AM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>$75,000</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>10:27 AM</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>My Bids</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Diamond</TableHead>
                    <TableHead>Bid Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2.5 Carat, VS1, Excellent</TableCell>
                    <TableCell>$75,000</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Winning</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1.8 Carat, SI1, Very Good</TableCell>
                    <TableCell>$52,000</TableCell>
                    <TableCell>
                      <Badge variant="outline">Outbid</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3.0 Carat, VVS2, Excellent</TableCell>
                    <TableCell>$90,000</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Winning</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Bid History</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Diamond</TableHead>
                    <TableHead>Bid Amount</TableHead>
                    <TableHead>Outcome</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>1.5 Carat, SI2, Good</TableCell>
                    <TableCell>$42,000</TableCell>
                    <TableCell>
                      <Badge variant="outline">Outbid</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2.2 Carat, VS1, Excellent</TableCell>
                    <TableCell>$68,000</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Won</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2.8 Carat, VVS1, Ideal</TableCell>
                    <TableCell>$85,000</TableCell>
                    <TableCell>
                      <Badge variant="outline">Outbid</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function CalendarIcon(props:any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function DiamondIcon(props:any) {
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


function GemIcon(props:any) {
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
      <path d="M6 3h12l4 6-10 13L2 9Z" />
      <path d="M11 3 8 9l4 13 4-13-3-6" />
      <path d="M2 9h20" />
    </svg>
  )
}


function MenuIcon(props:any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function UserIcon(props:any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}