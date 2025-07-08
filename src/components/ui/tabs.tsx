import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../../lib/utils";
import type { ComponentPropsWithoutRef, ElementRef } from "react"; // Add 'type' here
import { forwardRef } from "react"; // Keep regular import for runtime values

// 1. The main tabs container
export const Tabs = TabsPrimitive.Root;

// 2. The list of tabs at the top
type TabsListProps = ComponentPropsWithoutRef<typeof TabsPrimitive.List>;

export const TabsList = forwardRef<
  ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "flex items-center gap-1 rounded-lg bg-gray-100 p-1",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

// 3. Each individual tab button
type TabsTriggerProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>;

export const TabsTrigger = forwardRef<
  ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "px-3 py-1 rounded-md text-sm font-medium transition-colors",
      "hover:bg-gray-200",
      "data-[state=active]:bg-white data-[state=active]:shadow",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

// 4. The content shown when a tab is selected
type TabsContentProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Content>;

export const TabsContent = forwardRef<
  ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("mt-2 focus:outline-none", className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;