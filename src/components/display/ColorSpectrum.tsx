import React from 'react';
import { Badge } from "@/components/ui/badge";

const ColorSpectrum = () => {
  return (
    <div className="w-full space-y-12 px-2 sm:px-0">
      {/* Color Shade Spectrum */}
      <div>
        <div className="flex justify-center mb-6">
          <Badge variant="outline" className="text-base px-4 py-1">Color Shades</Badge>
        </div>
        <div className="w-full flex items-center gap-2 mb-2">
          <div className="w-20" />
          <div className="flex flex-1">
            <div className="flex-1"><div className="text-[10px] text-muted-foreground text-center">50</div></div>
            <div className="flex-1"><div className="text-[10px] text-muted-foreground text-center">100</div></div>
            <div className="flex-1"><div className="text-[10px] text-muted-foreground text-center">200</div></div>
            <div className="flex-1"><div className="text-[10px] text-muted-foreground text-center">300</div></div>
            <div className="flex-1"><div className="text-[10px] text-muted-foreground text-center">400</div></div>
            <div className="flex-1"><div className="text-[10px] text-muted-foreground text-center">500</div></div>
            <div className="flex-1"><div className="text-[10px] text-muted-foreground text-center">600</div></div>
            <div className="flex-1"><div className="text-[10px] text-muted-foreground text-center">700</div></div>
            <div className="flex-1"><div className="text-[10px] text-muted-foreground text-center">800</div></div>
            <div className="flex-1"><div className="text-[10px] text-muted-foreground text-center">900</div></div>
            <div className="flex-1"><div className="text-[10px] text-muted-foreground text-center">950</div></div>
          </div>
        </div>
        
        {/* Neutral Row */}
        <div className="w-full flex items-center gap-2">
          <div className="w-20">
            <h3 className="text-sm font-medium text-foreground capitalize">neutral</h3>
          </div>
          <div className="flex-1 flex">
            <div className="flex-1 h-12 bg-neutral-50"></div>
            <div className="flex-1 h-12 bg-neutral-100"></div>
            <div className="flex-1 h-12 bg-neutral-200"></div>
            <div className="flex-1 h-12 bg-neutral-300"></div>
            <div className="flex-1 h-12 bg-neutral-400"></div>
            <div className="flex-1 h-12 bg-neutral-500"></div>
            <div className="flex-1 h-12 bg-neutral-600"></div>
            <div className="flex-1 h-12 bg-neutral-700"></div>
            <div className="flex-1 h-12 bg-neutral-800"></div>
            <div className="flex-1 h-12 bg-neutral-900"></div>
            <div className="flex-1 h-12 bg-neutral-950"></div>
          </div>
        </div>

        {/* Green Row */}
        <div className="w-full flex items-center gap-2">
          <div className="w-20">
            <h3 className="text-sm font-medium text-foreground capitalize">green</h3>
          </div>
          <div className="flex-1 flex">
            <div className="flex-1 h-12 bg-green-50"></div>
            <div className="flex-1 h-12 bg-green-100"></div>
            <div className="flex-1 h-12 bg-green-200"></div>
            <div className="flex-1 h-12 bg-green-300"></div>
            <div className="flex-1 h-12 bg-green-400"></div>
            <div className="flex-1 h-12 bg-green-500"></div>
            <div className="flex-1 h-12 bg-green-600"></div>
            <div className="flex-1 h-12 bg-green-700"></div>
            <div className="flex-1 h-12 bg-green-800"></div>
            <div className="flex-1 h-12 bg-green-900"></div>
            <div className="flex-1 h-12 bg-green-950"></div>
          </div>
        </div>

        {/* Amber Row */}
        <div className="w-full flex items-center gap-2">
          <div className="w-20">
            <h3 className="text-sm font-medium text-foreground capitalize">amber</h3>
          </div>
          <div className="flex-1 flex">
            <div className="flex-1 h-12 bg-amber-50"></div>
            <div className="flex-1 h-12 bg-amber-100"></div>
            <div className="flex-1 h-12 bg-amber-200"></div>
            <div className="flex-1 h-12 bg-amber-300"></div>
            <div className="flex-1 h-12 bg-amber-400"></div>
            <div className="flex-1 h-12 bg-amber-500"></div>
            <div className="flex-1 h-12 bg-amber-600"></div>
            <div className="flex-1 h-12 bg-amber-700"></div>
            <div className="flex-1 h-12 bg-amber-800"></div>
            <div className="flex-1 h-12 bg-amber-900"></div>
            <div className="flex-1 h-12 bg-amber-950"></div>
          </div>
        </div>

        {/* Dodger Row */}
        <div className="w-full flex items-center gap-2">
          <div className="w-20">
            <h3 className="text-sm font-medium text-foreground capitalize">dodger</h3>
          </div>
          <div className="flex-1 flex">
            <div className="flex-1 h-12 bg-dodger-50"></div>
            <div className="flex-1 h-12 bg-dodger-100"></div>
            <div className="flex-1 h-12 bg-dodger-200"></div>
            <div className="flex-1 h-12 bg-dodger-300"></div>
            <div className="flex-1 h-12 bg-dodger-400"></div>
            <div className="flex-1 h-12 bg-dodger-500"></div>
            <div className="flex-1 h-12 bg-dodger-600"></div>
            <div className="flex-1 h-12 bg-dodger-700"></div>
            <div className="flex-1 h-12 bg-dodger-800"></div>
            <div className="flex-1 h-12 bg-dodger-900"></div>
            <div className="flex-1 h-12 bg-dodger-950"></div>
          </div>
        </div>

        {/* Hydrant Row */}
        <div className="w-full flex items-center gap-2">
          <div className="w-20">
            <h3 className="text-sm font-medium text-foreground capitalize">hydrant</h3>
          </div>
          <div className="flex-1 flex">
            <div className="flex-1 h-12 bg-hydrant-50"></div>
            <div className="flex-1 h-12 bg-hydrant-100"></div>
            <div className="flex-1 h-12 bg-hydrant-200"></div>
            <div className="flex-1 h-12 bg-hydrant-300"></div>
            <div className="flex-1 h-12 bg-hydrant-400"></div>
            <div className="flex-1 h-12 bg-hydrant-500"></div>
            <div className="flex-1 h-12 bg-hydrant-600"></div>
            <div className="flex-1 h-12 bg-hydrant-700"></div>
            <div className="flex-1 h-12 bg-hydrant-800"></div>
            <div className="flex-1 h-12 bg-hydrant-900"></div>
            <div className="flex-1 h-12 bg-hydrant-950"></div>
          </div>
        </div>
      </div>

      {/* Opacity Variations (Radix-like approach) */}
      <div>
        <div className="flex justify-center mb-6">
          <Badge variant="outline" className="text-base px-4 py-1">Opacity Variations</Badge>
        </div>
        <div className="w-full flex items-center gap-2 mb-2">
          <div className="w-20" />
          <div className="flex flex-1">
            <div className="flex-1"><div className="text-[10px] text-muted-foreground text-center">10%</div></div>
            <div className="flex-1"><div className="text-[10px] text-muted-foreground text-center">20%</div></div>
            <div className="flex-1"><div className="text-[10px] text-muted-foreground text-center">30%</div></div>
            <div className="flex-1"><div className="text-[10px] text-muted-foreground text-center">40%</div></div>
            <div className="flex-1"><div className="text-[10px] text-muted-foreground text-center">50%</div></div>
            <div className="flex-1"><div className="text-[10px] text-muted-foreground text-center">60%</div></div>
            <div className="flex-1"><div className="text-[10px] text-muted-foreground text-center">70%</div></div>
            <div className="flex-1"><div className="text-[10px] text-muted-foreground text-center">80%</div></div>
            <div className="flex-1"><div className="text-[10px] text-muted-foreground text-center">90%</div></div>
            <div className="flex-1"><div className="text-[10px] text-muted-foreground text-center">100%</div></div>
          </div>
        </div>
        
        {/* Neutral Opacity Row */}
        <div className="w-full flex items-center gap-2">
          <div className="w-20">
            <h3 className="text-sm font-medium text-foreground capitalize">neutral</h3>
          </div>
          <div className="flex-1 flex">
            <div className="flex-1 h-12 bg-black/10 dark:bg-white/10"></div>
            <div className="flex-1 h-12 bg-black/20 dark:bg-white/20"></div>
            <div className="flex-1 h-12 bg-black/30 dark:bg-white/30"></div>
            <div className="flex-1 h-12 bg-black/40 dark:bg-white/40"></div>
            <div className="flex-1 h-12 bg-black/50 dark:bg-white/50"></div>
            <div className="flex-1 h-12 bg-black/60 dark:bg-white/60"></div>
            <div className="flex-1 h-12 bg-black/70 dark:bg-white/70"></div>
            <div className="flex-1 h-12 bg-black/80 dark:bg-white/80"></div>
            <div className="flex-1 h-12 bg-black/90 dark:bg-white/90"></div>
            <div className="flex-1 h-12 bg-black dark:bg-white"></div>
          </div>
        </div>

        {/* Green Opacity Row */}
        <div className="w-full flex items-center gap-2">
          <div className="w-20">
            <h3 className="text-sm font-medium text-foreground capitalize">green</h3>
          </div>
          <div className="flex-1 flex">
            <div className="flex-1 h-12 bg-green-500/10"></div>
            <div className="flex-1 h-12 bg-green-500/20"></div>
            <div className="flex-1 h-12 bg-green-500/30"></div>
            <div className="flex-1 h-12 bg-green-500/40"></div>
            <div className="flex-1 h-12 bg-green-500/50"></div>
            <div className="flex-1 h-12 bg-green-500/60"></div>
            <div className="flex-1 h-12 bg-green-500/70"></div>
            <div className="flex-1 h-12 bg-green-500/80"></div>
            <div className="flex-1 h-12 bg-green-500/90"></div>
            <div className="flex-1 h-12 bg-green-500"></div>
          </div>
        </div>

        {/* Amber Opacity Row */}
        <div className="w-full flex items-center gap-2">
          <div className="w-20">
            <h3 className="text-sm font-medium text-foreground capitalize">amber</h3>
          </div>
          <div className="flex-1 flex">
            <div className="flex-1 h-12 bg-amber-500/10"></div>
            <div className="flex-1 h-12 bg-amber-500/20"></div>
            <div className="flex-1 h-12 bg-amber-500/30"></div>
            <div className="flex-1 h-12 bg-amber-500/40"></div>
            <div className="flex-1 h-12 bg-amber-500/50"></div>
            <div className="flex-1 h-12 bg-amber-500/60"></div>
            <div className="flex-1 h-12 bg-amber-500/70"></div>
            <div className="flex-1 h-12 bg-amber-500/80"></div>
            <div className="flex-1 h-12 bg-amber-500/90"></div>
            <div className="flex-1 h-12 bg-amber-500"></div>
          </div>
        </div>

        {/* Dodger Opacity Row */}
        <div className="w-full flex items-center gap-2">
          <div className="w-20">
            <h3 className="text-sm font-medium text-foreground capitalize">dodger</h3>
          </div>
          <div className="flex-1 flex">
            <div className="flex-1 h-12 bg-dodger-500" style={{ opacity: 0.1 }}></div>
            <div className="flex-1 h-12 bg-dodger-500" style={{ opacity: 0.2 }}></div>
            <div className="flex-1 h-12 bg-dodger-500" style={{ opacity: 0.3 }}></div>
            <div className="flex-1 h-12 bg-dodger-500" style={{ opacity: 0.4 }}></div>
            <div className="flex-1 h-12 bg-dodger-500" style={{ opacity: 0.5 }}></div>
            <div className="flex-1 h-12 bg-dodger-500" style={{ opacity: 0.6 }}></div>
            <div className="flex-1 h-12 bg-dodger-500" style={{ opacity: 0.7 }}></div>
            <div className="flex-1 h-12 bg-dodger-500" style={{ opacity: 0.8 }}></div>
            <div className="flex-1 h-12 bg-dodger-500" style={{ opacity: 0.9 }}></div>
            <div className="flex-1 h-12 bg-dodger-500" style={{ opacity: 1 }}></div>
          </div>
        </div>

        {/* Hydrant Opacity Row */}
        <div className="w-full flex items-center gap-2">
          <div className="w-20">
            <h3 className="text-sm font-medium text-foreground capitalize">hydrant</h3>
          </div>
          <div className="flex-1 flex">
            <div className="flex-1 h-12 bg-hydrant-500" style={{ opacity: 0.1 }}></div>
            <div className="flex-1 h-12 bg-hydrant-500" style={{ opacity: 0.2 }}></div>
            <div className="flex-1 h-12 bg-hydrant-500" style={{ opacity: 0.3 }}></div>
            <div className="flex-1 h-12 bg-hydrant-500" style={{ opacity: 0.4 }}></div>
            <div className="flex-1 h-12 bg-hydrant-500" style={{ opacity: 0.5 }}></div>
            <div className="flex-1 h-12 bg-hydrant-500" style={{ opacity: 0.6 }}></div>
            <div className="flex-1 h-12 bg-hydrant-500" style={{ opacity: 0.7 }}></div>
            <div className="flex-1 h-12 bg-hydrant-500" style={{ opacity: 0.8 }}></div>
            <div className="flex-1 h-12 bg-hydrant-500" style={{ opacity: 0.9 }}></div>
            <div className="flex-1 h-12 bg-hydrant-500" style={{ opacity: 1 }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorSpectrum; 