import React from "react";
import { getUserDetail } from "./api/detail.api";
import { Detail } from "./detail.component";
import { MemberDetailEntity } from "./detail.vm";
import { Link, useParams } from "react-router-dom";
import { mapMemberDetailToVm } from "./detail.mappers";
import { MyProvider } from "../../common/context/context.component";

const createDefaultMemberDetail = () => ({
  id: 0,
  login: "",
  name: "",
  company: "",
  bio: "",
});

export const DetailContainer = () => {
  const [member, setMember] = React.useState<MemberDetailEntity>(createDefaultMemberDetail());

  const { login } = useParams();

  React.useEffect(() => {
    getUserDetail(login)
      .then(mapMemberDetailToVm)
      .then((json) => setMember(json));
  }, []);

  return (
    <>
      <Detail member={member} />
      <Link to="/list">Back to list page</Link>
    </>
  );
};
