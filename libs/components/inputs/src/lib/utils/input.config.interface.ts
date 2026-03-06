import { FormControl } from "@angular/forms";
import { TipoInput } from "./input.types";

export interface IInputConfig {
  type: TipoInput;
  placeholder: string;
  id: string;
  legend: string;
  mask?: string;
  control: FormControl;
  errorMessagers?: string[];
  disabled?: boolean;
  size?: number | string;
}