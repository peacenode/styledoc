"use client";

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

interface ComponentPreviewProps {
  title: string;
  code: string;
  children: React.ReactNode;
}

export function ComponentPreview({ title, code, children }: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

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
        <div className="relative bg-muted/50 p-4 rounded-lg">
          <Button
            onClick={copyToClipboard}
            size="sm"
            className="absolute right-4 top-4"
            variant="outline"
          >
            {copied ? "Copied" : "Copy"}
          </Button>
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