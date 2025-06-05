"use client";

import React from 'react';
import ColorSpectrum from '@/components/display/ColorSpectrum';
import { SansTypography, SerifTypography, MonoTypography } from '@/components/display/Typography';
import SemanticRaw from '@/components/display/SemanticRaw';
import { ComponentPreview } from '@/components/display/component-preview';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SocialPreview } from "@/components/ui/socialpreview";
import { EventCard } from "@/components/ui/eventcard";
import { DsTicker } from "@/components/ui/ds-ticker";


export default function Home() {
  // Code snippets
  const buttonCode = `import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full !text-sans-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primary text-primary hover:bg-primary hover:text-background",
        secondary:
          "bg-secondary text-primary font-semibold hover:bg-secondary/80",
        ghost: "hover:bg-secondary transition-colors duration-300",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-full px-3",
        lg: "rounded-full px-12 py-4 !text-sans-base text-background",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }`;

  const badgeCode = `import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 !text-sans-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-foreground text-background",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }`;

  const tabsCode = `"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }`;

  // Social Preview code
  const socialPreviewCode = `"use client"

import * as React from "react"
import { CircleAlert } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const socialPreviewVariants = cva(
  "flex items-center gap-1.5",
  {
    variants: {
      status: {
        "unclaimed": "text-primary",
        "you": "text-primary font-medium",
        "one": "text-primary",
        "two": "text-primary",
        "many": "text-primary",
        "many-plus": "text-primary"
      }
    },
    defaultVariants: {
      status: "unclaimed"
    }
  }
)

export interface SocialPreviewProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof socialPreviewVariants> {
  count?: number
  avatars?: string[]
}

function SocialPreview({ className, status = "unclaimed", count, ...props }) {
  // Component implementation
  return (
    <div
      data-slot="social-preview"
      className={cn(socialPreviewVariants({ status, className }))}
      {...props}
    >
      {/* Component content */}
    </div>
  )
}

export { SocialPreview }`;

  // Add EventCard code snippet
  const eventCardCode = `"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/ui/eventcard";

// Basic event card with default props
export default function EventCardDemo() {
  return (
    <div className="space-y-4">
      <EventCard
        iconSrc="https://pbs.twimg.com/profile_images/1636029767936565248/xwA6mA4P.jpg"
        title="Provide 0.01 ETH Liquidity for $HONK"
        app="Uniswap v3"
        ctaText="Open"
        xp={150}
        socialPreviewProps={{
          status: "you",
          count: 4,
          avatars: [
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1494790108755-2616b612b1ef?w=32&h=32&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=face"
          ]
        }}
      />
    </div>
  )
}
`;

  const dsTickerCode = `"use client";

import { DsTicker } from "@/components/ui/ds-ticker";
import { Badge } from "@/components/ui/badge";

// Chip variant (default) - shows icon + ticker in bordered badge
<DsTicker 
  chainId="ethereum" 
  contractAddress="0x72e4f9F808C49A2a61dE9C5896298920Dc4EEEa9" 
/>

// Price change variant - shows icon + ticker + price change (no border)
<DsTicker 
  chainId="ethereum" 
  contractAddress="0x72e4f9F808C49A2a61dE9C5896298920Dc4EEEa9" 
  variant="price-change"
/>

// Custom tokens - just use Badge directly
<Badge variant="outline">CUSTOM</Badge>`;

  return (
    <main className="container mx-auto py-6 space-y-10">
      {/* Components Section */}
      <section className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Color</h2>
          <ColorSpectrum />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Typography</h2>
          <Tabs defaultValue="sans" className="w-full">
            <div className="flex justify-center">
              <TabsList className="mb-8">
                <TabsTrigger value="sans">Inter</TabsTrigger>
                <TabsTrigger value="serif">Times New Roman</TabsTrigger>
                <TabsTrigger value="mono">Geist Mono</TabsTrigger>
                <TabsTrigger value="raw">Semantic HTML</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="sans">
              <SansTypography />
            </TabsContent>
            <TabsContent value="serif">
              <SerifTypography />
            </TabsContent>
            <TabsContent value="mono">
              <MonoTypography />
            </TabsContent>
            <TabsContent value="raw">
              <SemanticRaw />
            </TabsContent>
          </Tabs>
        </section>

        <ComponentPreview
          title="Buttons"
          componentPath="button"
          code={buttonCode}
        >
          <div className="flex flex-col space-y-8 max-w-3xl mx-auto gap-12">
            {/* Variants */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <Badge variant="outline" className="text-base px-4 py-1">Button Variants</Badge>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <Badge variant="outline" className="text-base px-4 py-1">Button Sizes</Badge>
              </div>
              <div className="flex flex-wrap gap-4 justify-center items-end">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </Button>
              </div>
            </div>

            {/* With Icons */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <Badge variant="outline" className="text-base px-4 py-1">With Icons</Badge>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  Left Icon
                </Button>
                <Button>
                  Right Icon
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>

            {/* States */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <Badge variant="outline" className="text-base px-4 py-1">States</Badge>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button disabled>Disabled</Button>
                <Button disabled>
                  <svg className="mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
                  </svg>
                  Loading
                </Button>
              </div>
            </div>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Badges"
          componentPath="badge"
          code={badgeCode}
        >
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Tabs"
          componentPath="tabs"
          code={tabsCode}
        >
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <Tabs defaultValue="tab1">
                <TabsList className="w-full justify-center">
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="p-4 text-center">Tab 1 content</TabsContent>
                <TabsContent value="tab2" className="p-4 text-center">Tab 2 content</TabsContent>
                <TabsContent value="tab3" className="p-4 text-center">Tab 3 content</TabsContent>
              </Tabs>
            </div>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Social Preview"
          componentPath="socialpreview"
          code={socialPreviewCode}
        >
          <div className="flex flex-col space-y-6 w-full max-w-md mx-auto">
            <div className="flex flex-col space-y-2 items-center">
              <Badge variant="outline" className="mb-1">unclaimed</Badge>
              <SocialPreview status="unclaimed" />
            </div>

            <div className="flex flex-col space-y-2 items-center">
              <Badge variant="outline" className="mb-1">you</Badge>
              <SocialPreview
                status="you"
                avatars={["https://api.dicebear.com/7.x/avataaars/svg?seed=user1"]}
              />
            </div>

            <div className="flex flex-col space-y-2 items-center">
              <Badge variant="outline" className="mb-1">one</Badge>
              <SocialPreview
                status="one"
                avatars={["https://api.dicebear.com/7.x/avataaars/svg?seed=user2"]}
              />
            </div>

            <div className="flex flex-col space-y-2 items-center">
              <Badge variant="outline" className="mb-1">two</Badge>
              <SocialPreview
                status="two"
                avatars={[
                  "https://api.dicebear.com/7.x/avataaars/svg?seed=user3",
                  "https://api.dicebear.com/7.x/avataaars/svg?seed=user4"
                ]}
              />
            </div>

            <div className="flex flex-col space-y-2 items-center">
              <Badge variant="outline" className="mb-1">many-plus</Badge>
              <SocialPreview
                status="many-plus"
                count={5}
                avatars={[
                  "https://api.dicebear.com/7.x/avataaars/svg?seed=user5",
                  "https://api.dicebear.com/7.x/avataaars/svg?seed=user6",
                  "https://api.dicebear.com/7.x/avataaars/svg?seed=user7"
                ]}
              />
            </div>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Event Card"
          componentPath="eventcard"
          code={eventCardCode}
        >
          <div className="flex justify-center w-full">
            <div className="w-full max-w-2xl">
              <EventCard
                iconSrc="https://placehold.co/400x400/2563eb/FFFFFF.png?text=V"
                iconAlt="Vector app icon"
                title="Broadcast a trade"
                app="Vector"
                ctaText="Open"
                xp={48}
                socialPreviewProps={{
                  status: "many-plus",
                  count: 22,
                  avatars: [
                    "0x82A978B3f5962A5b0957d9ee9eEf472EE55B42F1",
                    "0x7d577a597B2742b498Cb5Cf0C26cDCD726d39E6e",
                    "0xDCEceaf3fc5C0a63d195d69b1A90011b7B19650D"
                  ]
                }}
                className="w-full"
              />
            </div>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="DS Ticker"
          code={dsTickerCode}
        >
          <div className="flex flex-col space-y-8 max-w-3xl mx-auto">
            {/* Chip variants */}
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <DsTicker
                chainId="ethereum"
                contractAddress="0x72e4f9F808C49A2a61dE9C5896298920Dc4EEEa9"
              />
              <DsTicker
                chainId="ethereum"
                contractAddress="0xE0f63A424a4439cBE457D80E4f4b51aD25b2c56C"
              />
              <DsTicker
                chainId="solana"
                contractAddress="4ikwYoNvoGEwtMbziUyYBTz1zRM6nmxspsfw9G7Bpump"
              />
            </div>

            {/* Price change variants */}
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <DsTicker
                chainId="ethereum"
                contractAddress="0x72e4f9F808C49A2a61dE9C5896298920Dc4EEEa9"
                variant="price-change"
              />
              <DsTicker
                chainId="ethereum"
                contractAddress="0xE0f63A424a4439cBE457D80E4f4b51aD25b2c56C"
                variant="price-change"
              />
              <DsTicker
                chainId="solana"
                contractAddress="4ikwYoNvoGEwtMbziUyYBTz1zRM6nmxspsfw9G7Bpump"
                variant="price-change"
              />
            </div>

            {/* Loading states */}
            <div className="flex flex-wrap gap-4 justify-center items-center">
              {/* Mock loading states to show the shimmer effect */}
              <div className="relative overflow-hidden bg-foreground/10 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent before:transform before:skew-x-12 h-6 w-16 rounded-full border" />
              <div className="flex items-center gap-1.5">
                <div className="relative overflow-hidden bg-foreground/10 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent before:transform before:skew-x-12 w-4 h-4 rounded-full" />
                <div className="relative overflow-hidden bg-foreground/10 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent before:transform before:skew-x-12 h-4 w-8 rounded" />
                <div className="relative overflow-hidden bg-foreground/10 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent before:transform before:skew-x-12 h-4 w-12 rounded" />
              </div>
            </div>
          </div>
        </ComponentPreview>
      </section >
    </main >
  );
}
