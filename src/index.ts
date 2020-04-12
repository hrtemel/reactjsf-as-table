import { registerWidgets } from '@reactjsf/core';
import * as widgets from './widgets';

export const register=()=>registerWidgets(widgets);

export default register;