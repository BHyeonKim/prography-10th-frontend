import type { StateCreator } from 'zustand';
import type { AdditionalInfoFormSlice } from './AdditionalInfoFormSlice';
import type { FormStepSlice } from './FormStepSlice';
import type { PrivacyPolicyFormSlice } from './PrivacyPolicyFormSlice';

export interface BasicInfoFormSlice {
	name: string;
	email: string;
	phone: string;
	setName: (value: string) => void;
	setEmail: (value: string) => void;
	setPhone: (value: string) => void;
	resetBasicInfo: () => void;
}

const INITIAL_STATE = {
	name: '',
	email: '',
	phone: '',
};

export const createBasicInfoFormSlice: StateCreator<
	PrivacyPolicyFormSlice &
		BasicInfoFormSlice &
		AdditionalInfoFormSlice &
		FormStepSlice,
	[],
	[],
	BasicInfoFormSlice
> = (set) => ({
	...INITIAL_STATE,
	setName: (name) =>
		set((state) => {
			const isAllFieldsFilled = state.email && state.phone && name;

			return {
				name: name,
				step: isAllFieldsFilled ? 3 : 2,
			};
		}),
	setEmail: (email) =>
		set((state) => {
			const isAllFieldsFilled = state.name && state.phone && email;

			return {
				email,
				step: isAllFieldsFilled ? 3 : 2,
			};
		}),
	setPhone: (phone) =>
		set((state) => {
			const isAllFieldsFilled = state.name && state.email && phone;

			return {
				phone,
				step: isAllFieldsFilled ? 3 : 2,
			};
		}),
	resetBasicInfo: () => set(() => ({ ...INITIAL_STATE })),
});
