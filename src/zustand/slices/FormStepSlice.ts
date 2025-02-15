import type { StateCreator } from 'zustand';
import type { AdditionalInfoFormSlice } from './AdditionalInfoFormSlice';
import type { BasicInfoFormSlice } from './BasicInfoFormSlice';
import type { PrivacyPolicyFormSlice } from './PrivacyPolicyFormSlice';

export interface FormStepSlice {
	step: number;
}

const INITIAL_STATE = {
	step: 1,
};

export const createFormStepSlice: StateCreator<
	PrivacyPolicyFormSlice &
		BasicInfoFormSlice &
		AdditionalInfoFormSlice &
		FormStepSlice,
	[],
	[],
	FormStepSlice
> = () => ({
	...INITIAL_STATE,
});
