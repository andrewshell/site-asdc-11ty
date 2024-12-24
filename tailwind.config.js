import formsPlugin from "@tailwindcss/forms";
import typographyPlugin from "@tailwindcss/typography";

export default {
  content: [
    './_includes/**/*.{html,njk}',
    './content/**/*.{html,njk}',
  ],
  safelist: ['ml-error'],
  theme: {
    extend: {},
  },
  plugins: [formsPlugin, typographyPlugin],
}
