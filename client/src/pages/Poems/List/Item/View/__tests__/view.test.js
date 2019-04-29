import React from 'react';
import View from '../';
import {HashRouter} from 'react-router-dom';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

const props = {
	data: {
		_id: '1',
		views: ['1', '2', '3'],
		favorites: ['1', 'USER_ID'],
	},

	currentUserId: 'USER_ID',
	updatePoems: () => {},
};

describe('View', () => {
	it('should return component', async () => {
		const instance = renderer.create(
			<HashRouter>
				<View {...props} />
			</HashRouter>
		).toJSON();

		expect(instance).toMatchSnapshot();
	});

	it('should return correct count of views. In the case expected views.length', () => {
		const instance = mount(
			<HashRouter>
				<View {...props} />
			</HashRouter>
		);

		expect(instance.find('span')).toHaveLength(1);
		expect(instance.find('span').contains(props.data.views.length)).toEqual(true);
	});
});