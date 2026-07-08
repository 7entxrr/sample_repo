"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Script from "next/script";

type PaddleCheckoutButtonProps = {
  planName: string;
  planSlug: string;
  paddlePriceId: string;
  buttonClassName: string;
  autoOpen?: boolean;
};

declare global {
  interface Window {
    Paddle?: {
      Environment: {
        set: (environment: "sandbox" | "production") => void;
      };
      Initialize: (options: {
        token: string;
        checkout?: {
          settings?: {
            displayMode?: "overlay" | "inline";
            theme?: "dark" | "light";
            locale?: string;
          };
        };
      }) => void;
      Checkout: {
        open: (options: {
          items: Array<{
            priceId: string;
            quantity: number;
          }>;
          settings?: {
            displayMode?: "overlay" | "inline";
            theme?: "dark" | "light";
            locale?: string;
            successUrl?: string;
          };
          customData?: {
            plan: string;
          };
        }) => void;
      };
    };
    __growCitablePaddleInitialized?: boolean;
    __growCitablePaddleToken?: string;
    __growCitablePaddleEnvironment?: "sandbox" | "production";
  }
}

const paddleClientToken = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN ?? "";
const paddleEnvironment =
  process.env.NEXT_PUBLIC_PADDLE_ENV === "production" ? "production" : "sandbox";

export default function PaddleCheckoutButton({
  planName,
  planSlug,
  paddlePriceId,
  buttonClassName,
  autoOpen = false,
}: PaddleCheckoutButtonProps) {
  const [isScriptReady, setIsScriptReady] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const hasAutoOpenedRef = useRef(false);

  const isConfigured = useMemo(
    () => paddleClientToken.length > 0 && paddlePriceId.length > 0,
    [paddlePriceId]
  );

  const initializePaddle = useCallback(() => {
    if (!window.Paddle || !isConfigured) {
      return false;
    }

    const shouldReinitialize =
      !window.__growCitablePaddleInitialized ||
      window.__growCitablePaddleToken !== paddleClientToken ||
      window.__growCitablePaddleEnvironment !== paddleEnvironment;

    if (shouldReinitialize) {
      if (paddleEnvironment === "sandbox") {
        window.Paddle.Environment.set("sandbox");
      }

      window.Paddle.Initialize({
        token: paddleClientToken,
        checkout: {
          settings: {
            displayMode: "overlay",
            theme: "dark",
            locale: "en",
          },
        },
      });

      window.__growCitablePaddleInitialized = true;
      window.__growCitablePaddleToken = paddleClientToken;
      window.__growCitablePaddleEnvironment = paddleEnvironment;
    }

    return true;
  }, [isConfigured]);

  const openCheckout = useCallback(() => {
    if (!isConfigured) {
      setErrorMessage(
        "Set NEXT_PUBLIC_PADDLE_CLIENT_TOKEN to enable secure checkout."
      );
      return;
    }

    if (!isScriptReady || !initializePaddle() || !window.Paddle) {
      setErrorMessage("Secure checkout is still loading. Please try again.");
      return;
    }

    setErrorMessage(null);
    setIsOpening(true);

    try {
      window.Paddle.Checkout.open({
        items: [
          {
            priceId: paddlePriceId,
            quantity: 1,
          },
        ],
        settings: {
          displayMode: "overlay",
          theme: "dark",
          locale: "en",
          successUrl: `${window.location.origin}/checkout?plan=${planSlug}&success=1`,
        },
        customData: {
          plan: planSlug,
        },
      });
    } catch {
      setErrorMessage("We couldn't open secure checkout. Please try again.");
    } finally {
      setIsOpening(false);
    }
  }, [initializePaddle, isConfigured, isScriptReady, paddlePriceId, planSlug]);

  useEffect(() => {
    if (!autoOpen || hasAutoOpenedRef.current || !isScriptReady || !isConfigured) {
      return;
    }

    hasAutoOpenedRef.current = true;
    openCheckout();
  }, [autoOpen, isConfigured, isScriptReady, openCheckout]);

  return (
    <>
      <Script
        id="paddle-js"
        src="https://cdn.paddle.com/paddle/v2/paddle.js"
        strategy="afterInteractive"
        onLoad={() => {
          setIsScriptReady(true);
          setErrorMessage(null);
        }}
        onError={() => {
          setErrorMessage("Secure checkout failed to load. Please refresh and try again.");
        }}
      />
      <button
        type="button"
        onClick={openCheckout}
        className={buttonClassName}
        disabled={isOpening}
      >
        {isOpening ? "Opening Secure Checkout..." : "Proceed to Secure Checkout"}
      </button>
      <p className="mt-3 text-xs text-zinc-500">
        {planName} opens in Paddle Checkout with no login or account creation required.
      </p>
      {errorMessage && (
        <p className="mt-3 text-sm text-red-400">{errorMessage}</p>
      )}
    </>
  );
}
