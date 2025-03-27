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


export default function Home() {
  // Code snippets
  const buttonCode = `import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
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

import * as React from "react"
import { SocialPreview } from "@/components/ui/socialpreview"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon URL or image source */
  iconSrc?: string
  /** Alt text for the icon */
  iconAlt?: string
  /** Icon background color (optional) */
  iconBgColor?: string
  /** Main title of the event */
  title: string
  /** App or source name */
  app: string
  /** Primary call-to-action button text */
  ctaText: string
  /** Primary call-to-action button onClick function */
  onCtaClick?: () => void
  /** XP reward amount (without the + symbol) */
  xp?: number
  /** Props to pass to the SocialPreview component */
  socialPreviewProps?: React.ComponentProps<typeof SocialPreview>
}

export function EventCard({
  className,
  iconSrc,
  iconAlt,
  iconBgColor,
  title,
  app,
  ctaText = "Open",
  onCtaClick,
  xp,
  socialPreviewProps,
  ...props
}: EventCardProps) {
  return (
    <div 
      className={cn(
        "flex flex-col rounded-lg border p-6 shadow-sm",
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          {/* Icon/Image section */}
          {iconSrc && (
            <div className="flex-shrink-0 h-16 w-16 overflow-hidden rounded">
              <img src={iconSrc} alt={iconAlt} className="w-full h-full object-cover" />
            </div>
          )}
          
          {/* Content section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted-foreground">{app}</p>
            
            {/* Social preview */}
            {socialPreviewProps && (
              <div className="mt-4">
                <SocialPreview {...socialPreviewProps} />
              </div>
            )}
          </div>
        </div>
        
        {/* Action section */}
        <div className="flex flex-col items-end gap-2">
          <Button onClick={onCtaClick}>
            {ctaText}
          </Button>
          
          {xp !== undefined && (
            <span className="text-muted-foreground text-sm">+{xp}XP</span>
          )}
        </div>
      </div>
    </div>
  )
}`;

  return (
    <div className="flex min-h-screen flex-col items-center p-8 bg-background">
      <main className="w-full max-w-6xl space-y-16">
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

        <ComponentPreview title="Buttons" code={buttonCode}>
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </ComponentPreview>

        <ComponentPreview title="Badges" code={badgeCode}>
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </ComponentPreview>

        <ComponentPreview title="Tabs" code={tabsCode}>
          <div className="flex justify-center">
            <div className="w-auto">
              <Tabs defaultValue="tab1">
                <TabsList>
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
        
        <ComponentPreview title="Social Preview" code={socialPreviewCode}>
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

        <ComponentPreview title="Event Card" code={eventCardCode}>
          <div className="w-full max-w-2xl mx-auto">
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
            />
          </div>
        </ComponentPreview>

      </main>
    </div>
  );
}
