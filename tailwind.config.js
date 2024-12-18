import formsPlugin from "@tailwindcss/forms";
import typographyPlugin from "@tailwindcss/typography";

export default {
  content: ['./*.html'],
    safelist: ['ml-error'],
  theme: {
    extend: {},
  },
  plugins: [formsPlugin, typographyPlugin],
}
