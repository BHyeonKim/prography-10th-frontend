import type { StateCreator } from 'zustand';
import type { BasicInfoFormSlice } from './BasicInfoFormSlice';
import type { FormStepSlice } from './FormStepSlice';
import type { PrivacyPolicyFormSlice } from './PrivacyPolicyFormSlice';

export type Major =
	| '프론트엔드'
	| '백엔드'
	| '디자인'
	| 'IOS'
	| '안드로이드'
	| 'Product Owner';

export interface AdditionalInfoFormSlice {
	major?: Major;
	setMajor: (major: Major) => void;
	resetMajor: () => void;
}

const INITIAL_STATE = {
	major: undefined,
};

export const createAdditionalInfoFormSlice: StateCreator<
	PrivacyPolicyFormSlice &
		BasicInfoFormSlice &
		AdditionalInfoFormSlice &
		FormStepSlice,
	[],
	[],
	AdditionalInfoFormSlice
> = (set) => ({
	...INITIAL_STATE,
	setMajor: (major) => set(() => ({ major, step: 4 })),
	resetMajor: () => set(() => ({ ...INITIAL_STATE })),
});
