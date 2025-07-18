'use client';

import styled from 'styled-components';
import { ReactNode } from 'react';

const PageWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

interface PageProps {
	children: ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

export default function Page({ children, className, style }: PageProps) {
	return <PageWrapper className={className} style={style}>{children}</PageWrapper>;
}
