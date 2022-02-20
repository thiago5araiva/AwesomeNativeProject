export type InputTypes = {
  type:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  inputAutoFocus?: boolean | false;
  inputChange: React.Dispatch<string>;
  inputDefaultValue: string;
  inputPlaceholder: string;
  customStyle?: object;
  success?: boolean;
  error?: boolean;
};

export type InputStateTypes = {
  label: boolean;
  placeholder: string;
};
