"use client";

import { createGlobalStyle } from 'styled-components';
import { colors } from './vars';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #627A8B;
        --foreground: #ffffff;
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --background: #627A8B;
            --foreground: #ededed;
        }
    }

    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
    }

    body {
        color: var(--foreground);
        background: var(--background);
        font-family: Arial, Helvetica, sans-serif;
		min-height: 100svh;
		line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

	button,
	input,
	textarea,
	select {
		font: inherit;
	}

	::selection {
		background: ${colors.accent};
		color: ${colors.text.onAccent};
	}

	:focus-visible {
		outline: 3px solid ${colors.accentHover};
		outline-offset: 3px;
	}

    @media (prefers-color-scheme: dark) {
        html {
            color-scheme: dark;
        }
    }

	@media (prefers-reduced-motion: reduce) {
		*,
		*::before,
		*::after {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			scroll-behavior: auto !important;
			transition-duration: 0.01ms !important;
		}
	}
`;
