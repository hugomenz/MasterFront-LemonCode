import React from "react";
import { MemberEntity } from "@/pods/list/list.vm";

interface MemberContext {
  memberList: MemberEntity[];
  setMemberList: (memberList: MemberEntity[]) => void;
}

export const MemberContext = React.createContext<MemberContext>({
  memberList: [],
  setMemberList: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const MemberProvider: React.FC<Props> = (props: Props) => {
  const { children } = props;
  const [memberList, setMemberList] = React.useState<MemberEntity[]>([]);

  return (
    <MemberContext.Provider
      value={{
        memberList,
        setMemberList,
      }}
    >
      {children}
    </MemberContext.Provider>
  );
};
