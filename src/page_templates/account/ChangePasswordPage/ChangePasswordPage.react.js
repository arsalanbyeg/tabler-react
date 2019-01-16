// @flow

import * as React from "react";

import { FormCard, FormTextInput, StandaloneFormPage } from "../../../";
import withTouchedErrors from "../../../helpers/withTouchedErrors.react";

import defaultStrings from "./ChangePasswordPage.strings";
import type { stringTypes } from "./ChangePasswordPage.strings";
import type { FormEvents, FocusEvents } from "../../../";

type fieldTypes = {|
  currentPassword?: string,
  newPassword?: string,
  verifyPassword?: string,
|};

type touchedTypes = {|
  currentPassword?: boolean,
  newPassword?: boolean,
  verifyPassword?: boolean,
|};

type Props = {|
  ...FormEvents,
  ...FocusEvents,
  +strings?: stringTypes,
  +action?: string,
  +method?: string,
  +values?: fieldTypes,
  +errors?: fieldTypes,
  +touched?: touchedTypes,
|};

/**
 * A forgot password page
 * Can be easily wrapped with form libraries like formik and redux-form
 */
function ChangePasswordPage(props: Props): React.Node {
  const {
    action,
    method,
    onSubmit,
    onChange,
    onBlur,
    values,
    strings = {},
    errors,
  } = props;
  return (
    <StandaloneFormPage>
      <FormCard
        buttonText={strings.buttonText || defaultStrings.buttonText}
        title={strings.title || defaultStrings.title}
        onSubmit={onSubmit}
        action={action}
        method={method}
      >
        <FormTextInput
          name="currentPassword"
          type="password"
          label={
            strings.currentPasswordLabel || defaultStrings.currentPasswordLabel
          }
          placeholder={
            strings.passwordPlaceholder || defaultStrings.passwordPlaceholder
          }
          onChange={onChange}
          onBlur={onBlur}
          value={values && values.currentPassword}
          error={errors && errors.currentPassword}
        />
        <FormTextInput
          name="newPassword"
          type="password"
          label={strings.newPasswordLabel || defaultStrings.newPasswordLabel}
          placeholder={
            strings.passwordPlaceholder || defaultStrings.passwordPlaceholder
          }
          onChange={onChange}
          onBlur={onBlur}
          value={values && values.newPassword}
          error={errors && errors.newPassword}
        />
        <FormTextInput
          name="verifyPassword"
          type="password"
          label={
            strings.verifyPasswordLabel || defaultStrings.verifyPasswordLabel
          }
          placeholder={
            strings.passwordPlaceholder || defaultStrings.passwordPlaceholder
          }
          onChange={onChange}
          onBlur={onBlur}
          value={values && values.verifyPassword}
          error={errors && errors.verifyPassword}
        />
      </FormCard>
    </StandaloneFormPage>
  );
}

const ChangePasswordPageWithTouchedErrors: React.ComponentType<Props> = withTouchedErrors(
  ["currentPassword", "newPassword", "verifyPassword"]
)(ChangePasswordPage);

export default ChangePasswordPageWithTouchedErrors;
