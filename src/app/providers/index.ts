import compose from 'compose-function';

import { withTheme } from './theme-provider';
import { withRouter } from './router-provider';

export const withProviders = compose(withTheme, withRouter);

export { ErrorProvider } from './error-provider';
