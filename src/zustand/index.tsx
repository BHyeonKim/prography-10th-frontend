import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
	type AdditionalInfoFormSlice,
	createAdditionalInfoFormSlice,
} from './slices/AdditionalInfoFormSlice';
import {
	type BasicInfoFormSlice,
	createBasicInfoFormSlice,
} from './slices/BasicInfoFormSlice';
import {
	type FormStepSlice,
	createFormStepSlice,
} from './slices/FormStepSlice';
import {
	type PrivacyPolicyFormSlice,
	createPrivacyPolicyFormSlice,
} from './slices/PrivacyPolicyFormSlice';

const useRootStore = create<
	PrivacyPolicyFormSlice &
		BasicInfoFormSlice &
		AdditionalInfoFormSlice &
		FormStepSlice
>()(
	persist(
		(...a) => ({
			...createPrivacyPolicyFormSlice(...a),
			...createBasicInfoFormSlice(...a),
			...createAdditionalInfoFormSlice(...a),
			...createFormStepSlice(...a),
		}),
		{ name: 'form-store' },
	),
);

export default useRootStore;
