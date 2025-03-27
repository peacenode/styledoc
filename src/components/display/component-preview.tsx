"use client";

import React, { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Copy, Check } from "lucide-react";

interface ComponentPreviewProps {
  title: string;
  componentPath?: string; // Path to the component file
  code?: string; // Fallback static code
  children: React.ReactNode;
}

export function ComponentPreview({ 
  title, 
  componentPath, 
  code: staticCode, 
  children 
}: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [code, setCode] = useState(staticCode || "");
  
  useEffect(() => {
    async function loadComponentCode() {
      if (componentPath) {
        try {
          // Use Next.js public folder or API route to serve component files
          const response = await fetch(`/api/component-code?path=${encodeURIComponent(componentPath)}`);
          if (response.ok) {
            const data = await response.json();
            setCode(data.code);
          } else {
            console.error("Failed to load component code");
          }
        } catch (error) {
          console.error("Error loading component code:", error);
        }
      }
    }
    
    if (componentPath) {
      loadComponentCode();
    }
  }, [componentPath]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section>
      <div className="relative mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{title}</h2>
        <div className="absolute right-0 bottom-3 flex items-start gap-2">
          <span className="text-sm text-muted-foreground">
            {showCode ? "Code" : "Preview"}
          </span>
          <Switch
            checked={showCode}
            onCheckedChange={setShowCode}
            aria-label="Toggle code view"
          />
        </div>
      </div>

      {showCode ? (
        <div className="relative bg-muted bg-opacity-50 p-4 rounded-lg">
          <span
            onClick={copyToClipboard}
            className="absolute right-12 top-4 h-8 w-8 flex items-center justify-center cursor-pointer text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label={copied ? "Copied" : "Copy code"}
            role="button"
            tabIndex={0}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </span>
          <pre className="mt-4 max-h-[400px] overflow-auto rounded-lg p-4 text-sm">
            <code className="text-muted-foreground">{code}</code>
          </pre>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center p-6">
          {children}
        </div>
      )}
    </section>
  );
} 