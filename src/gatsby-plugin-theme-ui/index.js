export default {
  colors: {
    text: "hsl(10, 20%, 20%)",
    background: "hsl(10, 10%, 98%)",
    primary: "hsl(10, 80%, 50%)",
    secondary: "hsl(10, 60%, 50%)",
    highlight: "hsl(10, 40%, 90%)",
    purple: "hsl(250, 60%, 30%)",
    muted: "hsl(10, 20%, 94%)",
    gray: "hsl(10, 20%, 50%)",
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  sizes: {
    container: 768,
    largeContainer: {
      maxWidth: 1024,
      paddingRight: 32,
      paddingLeft: 32,
    },
    fullWidthContainer: {
      width: "100vh",
      position: "relative",
      left: "50%",
      right: "50%",
      marginLeft: "-50vw",
      marginRight: "-50vw",
    },
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  cards: {
     primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
      width: '100%',
      margin: '0 auto',
      height: 'auto'
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
  buttons: {
    secondary: {
      fontWeight: "bold",
      color: "white",
      bg: "primary",
      "&:hover": {
        bg: "dark",
      },
    },
  },
  textStyles: {
    caps: {
      textTransform: "uppercase",
      letterSpacing: ".2em",
    },
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    display: {
      variant: "textStyles.heading",
      fontSize: [5, 6],
      fontWeight: "display",
      letterSpacing: "-0.03em",
      mt: 3,
    },
    centered: {
      textAlign: 'center'
    }
  },
  links: {
    nav:   {
      px: 2,
      py: 1,
      fontWeight: "bold",
      color: "text",
      textDecoration: "none",
       "&:hover": {
        color: "secondary",
        textDecoration: 'none'
      },
    },
     menu: {
      fontWeight: "bold",
      color: "text",
      textDecoration: "none",
       "&:hover": {
        color: "secondary",
        textDecoration: 'none'
      },
    },
  },
  images: {
    logo: {
      width: "auto",
      height: "2.75rem",
    },
  },
  icons: {
    iconQuote: {
      display: 'block',
      height: '3rem',
      width: '3rem',
      fontSize: '1.5rem',
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    container: 'sizes.container',
    largeContainer: 'sizes.largeContainer',
    fullWidthContainer: 'sizes.fullWidthContainer',
    icons: {
      iconQuote: 'icons.iconQuote',
    },
    h1: {
      variant: "textStyles.display",
    },
    h2: {
      variant: "textStyles.heading",
      fontSize: 5,
    },
    h3: {
      variant: "textStyles.heading",
      fontSize: 4,
    },
    h4: {
      variant: "textStyles.heading",
      fontSize: 3,
    },
    h5: {
      variant: "textStyles.heading",
      fontSize: 2,
    },
    h6: {
      variant: "textStyles.heading",
      fontSize: 1,
    },
    a: {
      color: "primary",
      textDecoration: 'none',
      "&:hover": {
        color: "primary",
        textDecoration: 'underline',
      },
    },
    pre: {
      variant: "prism",
      fontFamily: "monospace",
      fontSize: 1,
      p: 3,
      color: "text",
      bg: "muted",
      overflow: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      color: "secondary",
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "secondary",
      bg: "muted",
    },
    table: {
      width: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
      "th,td": {
        textAlign: "left",
        py: "4px",
        pr: "4px",
        pl: 0,
        borderColor: "muted",
        borderBottomStyle: "solid",
      },
    },
    th: {
      verticalAlign: "bottom",
      borderBottomWidth: "2px",
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: "1px",
    },
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "muted",
    },
    img: {
      maxWidth: "100%",
    },
  },
};
