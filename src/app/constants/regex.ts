export const INTERNATIONAL_PHONE_PATTERN = /^\+\d{1,3}-\d{4,14}$/;

export const COUNTRY_CODE_PATTERN = /^\+\d{1,4}$/;

export const PHONE_NUMBER_PATTERN = /^\d{4,14}$/;

export const INTEGER_STRING_RE = /^\d+$/;

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const URL_REGEX = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/;

export const DURATION_REGEX = /^[1-9](\.\d{1,2})?$/;

export const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
