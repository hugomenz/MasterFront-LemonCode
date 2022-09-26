import React from "react";

export const Demo = () => {
  const [user, setUser] = React.useState({
    name: "",
    lastname: "",
    address: "",
  });

  const [fullname, setFullname] = React.useState("");

  // en este caso solo entraria si cambia el user.name
  /*   React.useEffect(() => {
    console.log("Entro en el useEffect");
    setFullname(`${user.name} ${user.lastname}`);
  }, [user.name]); */

  React.useEffect(() => {
    console.log("Entro en el useEffect");
    setFullname(`${user.name} ${user.lastname}`);
  }, [user.name, user.lastname]);

  return (
    <>
      <div>Hello {fullname}</div>
      <input
        value={user.name}
        onChange={(e) => {
          setUser({
            ...user,
            name: e.target.value,
          });
        }}
      />
      <input
        value={user.lastname}
        onChange={(e) => {
          setUser({
            ...user,
            lastname: e.target.value,
          });
        }}
      />
      <input
        value={user.address}
        onChange={(e) => {
          setUser({
            ...user,
            address: e.target.value,
          });
        }}
      />
    </>
  );
};
