import { AuthLayout } from "@/layouts/auth.layout";
import { LoginContainer } from "@/pods/login";
import React from "react";

export const LoginScene: React.FC = () => {
  return (
    <AuthLayout>
      <LoginContainer />
    </AuthLayout>
  );
};
