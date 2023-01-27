import React from 'react';
import Provider from './src/Provider';

const Wrapper = ({ element }) => <Provider>{element}</Provider>;

export const wrapRootElement = Wrapper;
