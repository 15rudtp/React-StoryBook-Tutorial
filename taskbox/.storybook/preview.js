// /** @type { import('@storybook/react').Preview } */
// const preview = {
//   parameters: {
//     actions: { argTypesRegex: "^on[A-Z].*" },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//   },
// };

// export default preview;


import '../src/index.css';

// Registers the msw addon
import { initialize, mswDecorator } from 'msw-storybook-addon';
// 설명 : 모의 API라이브러리 세팅

//Initialize MSW
initialize();
// 설명 : 모의 API라이브러리 세팅

// Provide the MSW addon decorator globally
export const decorator = [mswDecorator];
// 설명 : 모의 API라이브러리 세팅

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};