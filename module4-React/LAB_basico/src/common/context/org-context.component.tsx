import React from "react";

interface OrgContext {
  org: string;
  setOrg: (org: string) => void;
}

export const OrgContext = React.createContext<OrgContext>({
  org: "",
  setOrg: () => {},
});

interface Props {
  initialOrg: string;
  children: React.ReactNode;
}

export const OrgProvider: React.FC<Props> = (props: Props) => {
  const { children, initialOrg } = props;
  const [org, setOrg] = React.useState<string>(initialOrg);

  return (
    <OrgContext.Provider
      value={{
        org,
        setOrg,
      }}
    >
      {children}
    </OrgContext.Provider>
  );
};
