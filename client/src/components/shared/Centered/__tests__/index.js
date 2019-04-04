import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Centered from '../';

describe('Centered', () => {
	let instance;

	beforeEach(() => {
		instance = shallow(
			<Centered>
				<div>Test</div>
			</Centered>
		);
	})
	it('should be correct render a child', () => {
		expect(instance.find('div')).toHaveLength(1);
	});

	it('should be return snapshot', () => {
		instance = renderer.create(
			<Centered>
				<div>Test 2</div>
			</Centered>
		).toJSON();

		expect(instance).toMatchSnapshot();
	});
});