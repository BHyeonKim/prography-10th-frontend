import type { StateCreator } from 'zustand';
import type { AdditionalInfoFormSlice } from './AdditionalInfoFormSlice';
import type { BasicInfoFormSlice } from './BasicInfoFormSlice';
import type { FormStepSlice } from './FormStepSlice';

export interface PrivacyPolicyFormSlice {
	granted?: boolean;
	setGrant: (isGranted: boolean) => void;
}

const INITIAL_STATE = {
	granted: undefined,
};

export const createPrivacyPolicyFormSlice: StateCreator<
	PrivacyPolicyFormSlice &
		BasicInfoFormSlice &
		AdditionalInfoFormSlice &
		FormStepSlice,
	[],
	[],
	PrivacyPolicyFormSlice
> = (set) => ({
	...INITIAL_STATE,
	setGrant: (isGranted) => set(() => ({ granted: isGranted, step: 2 })),
});
