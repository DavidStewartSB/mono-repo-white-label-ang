import { OnboardingStep } from './onboarding-step.model';

export interface OnboardingTourOptions {
  steps: OnboardingStep[];
  overlayOpacity?: number;
  stagePadding?: number;
  allowClose?: boolean;
  showProgress?: boolean;
  disableActiveInteraction?: boolean;
  onDestroyed?: () => void;
}