import {
	createSlice,
	SliceCaseReducers,
	CreateSliceOptions,
	bindActionCreators,
} from '@reduxjs/toolkit';
import {useMemo} from 'react';

import useAppDispatch from './useAppDispatch';

const buildSlice = <
	State,
	CaseReducers extends SliceCaseReducers<State>,
	Name extends string = string
>(
	options: CreateSliceOptions<State, CaseReducers, Name>
) => {
	const slice = createSlice(options);
	console.log()
	const useActions = (): typeof slice.actions => {
		const dispatch = useAppDispatch();
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		return useMemo(() => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			return bindActionCreators(slice.actions, dispatch);
		}, [dispatch]);
	};

	return {
		...slice,
		useActions,
	};
};

export default buildSlice;
