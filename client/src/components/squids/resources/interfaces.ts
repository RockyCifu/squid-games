import { FieldError } from "react-hook-form";

interface Squid {
  id: number | null | undefined;
  name: string;
  species: string;
  specialPower: string;
  experiencePoints: number;
}

interface SquidError {
  name?: FieldError;
  species?: FieldError;
  specialPower?: FieldError;
  experiencePoints?: FieldError;
}

interface SquidServerError {
  name?: Array<{ message: string }>;
  species?: Array<{ message: string }>;
  specialPower?: Array<{ message: string }>;
  experiencePoints?: Array<{ message: string }>;
}

interface Validations {
  required: { value: boolean; message: string; minLength: number; maxLength: number };
  min: { value: number; message: string };
  max: { value: number; message: string };
}

export { Squid, SquidError, SquidServerError, Validations };
