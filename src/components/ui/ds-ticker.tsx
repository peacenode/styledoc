"use client";

import { Badge } from "@/components/ui/badge";
import { useDexScreener } from "@/hooks/useDexScreener";
import { cn } from "@/lib/utils";

interface DsTickerProps {
  chainId: string;
  contractAddress: string;
  className?: string;
  variant?: "chip" | "price-change";
}

export const DsTicker = ({ 
  chainId, 
  contractAddress,
  className,
  variant = "chip"
}: DsTickerProps) => {
  const { tokens, loading, error } = useDexScreener(chainId, [contractAddress]);

  // Loading state
  if (loading) {
    const shimmerClass = "relative overflow-hidden bg-foreground/10 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transform before:skew-x-12";
    
    return (
      <div className={className}>
        {variant === "chip" ? (
          <div className={cn("h-6 w-16 rounded-full border", shimmerClass)} />
        ) : (
          <div className="flex items-center gap-1.5">
            <div className={cn("w-4 h-4 rounded-full", shimmerClass)} />
            <div className={cn("h-4 w-8 rounded", shimmerClass)} />
            <div className={cn("h-4 w-12 rounded", shimmerClass)} />
          </div>
        )}
      </div>
    );
  }

  // If no data, return null (or keep loading)
  if (error || tokens.length === 0) {
    return null;
  }

  // Success state - show token data
  const token = tokens[0];

  if (variant === "price-change") {
    const isPositive = token.priceChange24h ? token.priceChange24h > 0 : false;
    const isNegative = token.priceChange24h ? token.priceChange24h < 0 : false;
    
    return (
      <div className={cn("flex items-center gap-1.5", className)}>
        {token.imageUrl && (
          <img 
            src={token.imageUrl} 
            alt={token.name} 
            className="w-4 h-4 rounded-full object-cover"
          />
        )}
        <span className="text-sans-sm font-medium text-foreground uppercase">
          {token.symbol}
        </span>
        <span className={cn(
          "text-sans-sm font-medium",
          {
            "text-green-500": isPositive,
            "text-hydrant-500": isNegative,
            "text-muted-foreground": !isPositive && !isNegative || token.priceChange24h === undefined
          }
        )}>
          {token.priceChange24h !== undefined ? (
            `${isPositive ? "+" : ""}${token.priceChange24h.toFixed(2)}%`
          ) : (
            "--"
          )}
        </span>
      </div>
    );
  }

  // Chip variant (default)
  if (token.imageUrl) {
    return (
      <Badge variant="outline" className={cn("flex items-center gap-1.5 pl-1.5", className)}>
        <img 
          src={token.imageUrl} 
          alt={token.name} 
          className="w-4 h-4 rounded-full object-cover"
        />
        <span className="uppercase">{token.symbol}</span>
      </Badge>
    );
  }

  return <Badge variant="outline" className={className}>{token.symbol}</Badge>;
};