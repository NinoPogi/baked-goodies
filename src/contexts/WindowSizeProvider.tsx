import { ReactNode, createContext, useEffect, useState } from "react";

interface WindowSizeProviderInterface {
  windowSize: {
    width: number;
    height: number;
  };
}

interface Props {
  children: ReactNode;
}

const defaultState: WindowSizeProviderInterface = {
  windowSize: {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  },
};

export const WindowSizeContext =
  createContext<WindowSizeProviderInterface>(defaultState);

export default function CustomerProvider({ children }: Props) {
  const [windowSize, setWindowSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight / 1.3,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <WindowSizeContext.Provider
      value={{
        windowSize,
      }}
    >
      {children}
    </WindowSizeContext.Provider>
  );
}
