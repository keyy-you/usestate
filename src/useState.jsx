import React, { Fragment } from "react";

const BelajarUseState = () => {
  const [counter, setCounter] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [array, setArray] = React.useState(["Ayam", "Ikan", "Labi-Labi"]);
  const [text, setText] = React.useState("");

  React.useEffect(function () {
    if (text.length) localStorage.setItem("text", text);
    console.log("text berhasil disimpan");
  });
  const HandleTambah = () => {
    setCounter((c) => c + 1);
    setLoading(true);
    setArray([...array, "Tikus"]);
  };
  const HandleKurang = () => {
    setCounter((c) => c - 1);
    setLoading(false);
  };
  return (
    <Fragment>
      <h1>Latihan useState</h1>
      <h4>{counter}</h4>
      <button onClick={HandleTambah}>{loading ? "Loading" : "Tambah"}</button>
      <button onClick={HandleKurang}>Kurang</button>

      <h3>Nama-Nama Hewan</h3>
      <ol>
        {array.map((hewan) => (
          <li>{hewan}</li>
        ))}
      </ol>
    </Fragment>
  );
};

export default BelajarUseState;
