import React from 'react';

import WindowProvider from '@context/WindowContext';

export const wrapRootElement = ({ element }) => <WindowProvider>{element}</WindowProvider>;
