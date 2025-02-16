import type { StateCreator } from 'zustand';
import type { AdditionalInfoFormSlice } from './AdditionalInfoFormSlice';
import type { BasicInfoFormSlice } from './BasicInfoFormSlice';
import type { PrivacyPolicyFormSlice } from './PrivacyPolicyFormSlice';

export interface FormStepSlice {
	step: number;
	resetStep: () => void;
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
> = (set) => ({
	...INITIAL_STATE,
	resetStep: () => set(() => ({ ...INITIAL_STATE })),
});
