//@flow
const strings = {
  title: "Set New Password",
  buttonText: "Change Password",
  currentPasswordLabel: "Current Password",
  newPasswordLabel: "New Password",
  verifyPasswordLabel: "Verify Password",
  passwordPlaceholder: "Password",
};

export default strings;

export type stringTypes = { [$Keys<typeof strings>]: string };
