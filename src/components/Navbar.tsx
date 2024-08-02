"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
         const [active, setActive] = useState<string | null>(null);
            return (
              <div
                className={cn("fixed top-5 inset-x-0 hidden sm:block sm:max-w-sm md:max-w-xl mx-auto z-50", className)}
              >
                <Menu setActive={setActive}>
                    <Link href="#">
                    <MenuItem setActive={setActive} active={active} item="Home">
                        
                    </MenuItem>
                    </Link>

                  <MenuItem setActive={setActive} active={active} item="Our courses">
                    <div className="flex flex-col space-y-4 text-sm">
                      <HoveredLink href="/courses">All Courses</HoveredLink>
                      <HoveredLink href="/interface-design">Basic Music Theory</HoveredLink>
                      <HoveredLink href="/seo">Advance Composition</HoveredLink>
                      <HoveredLink href="/branding">Songwriting</HoveredLink>
                      <HoveredLink href="/branding">Music Production</HoveredLink>
                    </div>
                  </MenuItem>

                    <Link href={'/contactus'}>
                    <MenuItem setActive={setActive} active={active} item="Contact us">
                    
                    </MenuItem>
                    </Link>
                </Menu>
              </div>
            );
          }
          
