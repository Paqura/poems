import React from 'react';
import {shallow} from 'enzyme';
import Centered from '../';

describe('Centered', () => {
	it('should be correct render any child', () => {
		const instance = shallow(
			<Centered>
				<div>Test</div>
			</Centered>
		);

		expect(instance.find('div')).toHaveLength(1);
	});
});