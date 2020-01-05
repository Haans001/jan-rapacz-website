import React from 'react';

const TransitionContext = React.createContext({});

export const TransitionProvider = TransitionContext.Provider;
export const TransitionConsumer = TransitionContext.Consumer;
export default TransitionContext;
