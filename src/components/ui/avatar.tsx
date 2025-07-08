import { User } from "lucide-react";
import React from "react";

type AvatarProps = {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Avatar({
  src,
  alt,
  fallback,
  size = "md",
  className = "",
  ...rest
}: AvatarProps) {
  const sizeClasses: Record<"sm" | "md" | "lg", string> = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
  };

  const avatarSizeClass = sizeClasses[size];

  return (
    <div
      className={`relative flex shrink-0 overflow-hidden rounded-full bg-gray-200 ${avatarSizeClass} ${className}`}
      {...rest}
    >
      {src ? (
        <img
          src={src}
          alt={alt || "Avatar"}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-gray-600">
          {typeof fallback === "string" ? fallback : fallback || <User className="h-4/5 w-4/5" />}
        </div>
      )}
    </div>
  );
}
