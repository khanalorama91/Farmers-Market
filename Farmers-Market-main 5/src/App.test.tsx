import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { expect } from 'chai';
import App from './App';

describe('App', () => {
	it('Renders hello World', () => {
		render(<App />);

		expect(
			screen.getByRole('heading', {
				level: 1,
			})
		);
	});
});
