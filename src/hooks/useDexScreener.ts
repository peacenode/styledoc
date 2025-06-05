"use client";

import { useState, useEffect } from 'react';

interface TokenInfo {
  address: string;
  name: string;
  symbol: string;
}

interface PairInfo {
  imageUrl?: string;
  websites?: Array<{ url: string }>;
  socials?: Array<{ platform: string; handle: string }>;
}

interface TokenPair {
  chainId: string;
  dexId: string;
  url: string;
  pairAddress: string;
  labels?: string[];
  baseToken: TokenInfo;
  quoteToken: TokenInfo;
  priceNative: string;
  priceUsd: string;
  priceChange?: {
    m5?: number;
    h1?: number;
    h6?: number;
    h24?: number;
  };
  info?: PairInfo;
  // ... other fields as needed
}

interface TokenData {
  symbol: string;
  name: string;
  imageUrl?: string;
  address: string;
  priceChange24h?: number;
}

interface UseDexScreenerResult {
  tokens: TokenData[];
  loading: boolean;
  error: string | null;
}

export const useDexScreener = (
  chainId: string,
  tokenAddresses: string[]
): UseDexScreenerResult => {
  const [tokens, setTokens] = useState<TokenData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!chainId || tokenAddresses.length === 0) {
      setTokens([]);
      return;
    }

    const fetchTokens = async () => {
      setLoading(true);
      setError(null);

      try {
        // Join up to 30 addresses (API limit)
        const addressesParam = tokenAddresses.slice(0, 30).join(',');
        const response = await fetch(
          `https://api.dexscreener.com/tokens/v1/${chainId}/${addressesParam}`
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data: TokenPair[] = await response.json();
        
        // Extract unique tokens from the pairs
        const tokenMap = new Map<string, TokenData>();
        
        data.forEach(pair => {
          // Add base token
          if (pair.baseToken && tokenAddresses.includes(pair.baseToken.address)) {
            tokenMap.set(pair.baseToken.address, {
              symbol: pair.baseToken.symbol,
              name: pair.baseToken.name,
              imageUrl: pair.info?.imageUrl,
              address: pair.baseToken.address,
              priceChange24h: pair.priceChange?.h24
            });
          }
          
          // Add quote token
          if (pair.quoteToken && tokenAddresses.includes(pair.quoteToken.address)) {
            tokenMap.set(pair.quoteToken.address, {
              symbol: pair.quoteToken.symbol,
              name: pair.quoteToken.name,
              imageUrl: pair.info?.imageUrl,
              address: pair.quoteToken.address,
              priceChange24h: pair.priceChange?.h24
            });
          }
        });

        setTokens(Array.from(tokenMap.values()));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch tokens');
        setTokens([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTokens();
  }, [chainId, tokenAddresses.join(',')]);

  return { tokens, loading, error };
}; 