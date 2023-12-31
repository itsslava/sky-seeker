import autoprefixer from 'autoprefixer';
import customProperties from 'postcss-custom-properties';

export const plugins = [
  customProperties({ preserve: false }),
  autoprefixer({
    overrideBrowserslist: ['last 2 versions', 'IE 11'],
  }),
];
