import React from "react";

export const Demo = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <>
      {visible && <MyComponent />}
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Toggle
      </button>
    </>
  );
};

export const MyComponent = () => {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    console.log("Nueva ejecución del effect", value);

    return () => {
      console.log("Cleanup del anterior", value);
    };
  });

  console.log("render!");

  return (
    <>
      <p>Componente Hijo</p>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </>
  );
};
