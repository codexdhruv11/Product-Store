import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Space Grotesk', 'IBM Plex Sans', sans-serif`,
    body: `'IBM Plex Sans', sans-serif`,
  },
  colors: {
    accent: {
      orange: "#FF6B00",
      purple: "#B366FF",
      aqua: "#00FFE0",
    },
  },
  styles: {
    global: {
      body: {
        bg: "#111",
        color: "#fff",
        fontFamily: "'IBM Plex Sans', sans-serif",
        letterSpacing: "0.01em",
        lineHeight: "1.6",
      },
      "h1, h2, h3": {
        fontWeight: "bold",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "0",
        fontWeight: "bold",
        textTransform: "uppercase",
        bg: "transparent",
        color: "#fff",
        letterSpacing: "0.1em",
        border: "2px solid",
        borderColor: "#fff",
        px: 8,
        py: 6,
        fontSize: "sm",
        _hover: {
          bg: "#00FFE0",
          color: "#111",
          borderColor: "#00FFE0",
          transform: "scale(1.05)",
          transition: "all 0.2s ease",
          boxShadow: "0 0 15px rgba(0, 255, 224, 0.5)",
        },
        _active: {
          bg: "#00BFA5",
        },
      },
      variants: {
        primary: {
          bg: "#FF6B00",
          borderColor: "#FF6B00",
          color: "#111",
          _hover: {
            bg: "#FF8C00",
            borderColor: "#FF8C00",
            transform: "scale(1.05)",
          },
        },
      },
    },
    Input: {
      baseStyle: {
        borderRadius: "0",
        border: "2px solid #fff",
        bg: "transparent",
        color: "#fff",
        py: 6,
        px: 4,
        _placeholder: { 
          color: "#888",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        },
        _focus: {
          borderColor: "#00FFE0",
          boxShadow: "0 0 0 2px #00FFE0",
        },
      },
    },
  },
});

export default theme;