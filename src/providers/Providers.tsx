'use client';

import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AppElements } from '@/providers/AppElements';

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppElements />
      {children}
    </QueryClientProvider>
  );
}
