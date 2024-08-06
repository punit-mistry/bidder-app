"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { useAssetImage } from '@/hooks/index'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
export default function Component() {
    const router = useRouter()
  const [diamonds, setDiamonds] = useState([
    {
      id: 1,
      image: "imageSrc",
      carat: 1.5,
      color: "D",
      clarity: "VVS1",
      cut: "Excellent",
      currentBid: 5000,
    },
    {
      id: 2,
      image: "imageSrc",
      carat: 2.0,
      color: "E",
      clarity: "VVS1",
      cut: "Ideal",
      currentBid: 7500,
    },
    {
      id: 3,
      image: "imageSrc",
      carat: 1.8,
      color: "F",
      clarity: "SI1",
      cut: "Very Good",
      currentBid: 6000,
    },
    {
      id: 4,
      image: "imageSrc",
      carat: 1.2,
      color: "G",
      clarity: "VS2",
      cut: "Excellent",
      currentBid: 4500,
    },
  ])
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    activeBids: [
      {
        id: 1,
        diamondId: 1,
        bidAmount: 5500,
      },
      {
        id: 2,
        diamondId: 3,
        bidAmount: 6200,
      },
    ],
    bidHistory: [
      {
        id: 1,
        diamondId: 2,
        bidAmount: 7000,
        status: "Won",
      },
      {
        id: 2,
        diamondId: 4,
        bidAmount: 4200,
        status: "Lost",
      },
    ],
  })
  const handlePlaceBid = (diamondId:number, bidAmount:number) => {
    router.push(`/auction/${diamondId}`)
    console.log(`Placing bid of $${bidAmount} on diamond ${diamondId}`)
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Diamond Bidding Platform</h1>
          <div className="flex items-center gap-4">
            <Avatar className="border">
              <AvatarImage src='/placeholder.jpg' alt={user.name} />
              <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5">
              <div className="font-medium">{user.name}</div>
              <div className="text-sm text-primary-foreground/80">{user.email}</div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-muted/40 py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {diamonds.map((diamond) => (
            <Card key={diamond.id} className="overflow-hidden">
             
              <Image
                src='/placeholder.jpg'
                alt={`Diamond ${diamond.id}`}
                width={400}
                height={400}
                className="w-full aspect-square object-cover"
              />
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">
                      {diamond.carat} carat, {diamond.color}, {diamond.clarity}, <br/>{diamond.cut}
                    </div>
                    <div className="text-muted-foreground text-sm">Current Bid</div>
                    <div className="text-2xl font-bold">${diamond.currentBid.toLocaleString()}</div>
                  </div>
                  <Button onClick={()=>handlePlaceBid(diamond.id, diamond.currentBid + 500)}>Place Bid</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <div className="bg-background border-t">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Active Bids</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Diamond</TableHead>
                  <TableHead>Bid Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {user.activeBids.map((bid) => (
                  <TableRow key={bid.id}>
                    <TableCell>
                      <Link href="#" className="font-medium" prefetch={false}>
                        Diamond {bid.diamondId}
                      </Link>
                    </TableCell>
                    <TableCell>${bid.bidAmount.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Active</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Bid History</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Diamond</TableHead>
                  <TableHead>Bid Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {user.bidHistory.map((bid) => (
                  <TableRow key={bid.id}>
                    <TableCell>
                      <Link href="#" className="font-medium" prefetch={false}>
                        Diamond {bid.diamondId}
                      </Link>
                    </TableCell>
                    <TableCell>${bid.bidAmount.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant={bid.status === "Won" ? "secondary" : "outline"}>{bid.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}