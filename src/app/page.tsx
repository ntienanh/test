"use client";
import React from "react";

export default function Home() {
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/students`,
      { method: "GET", headers: { "Content-Type": "application/json" } }
    )
      .then((response) => response.json())
      .catch((err) => console.log(err));
    return response?.data;
  };

  React.useEffect(() => {
    fetchData().then((users) => setData(users));
  }, []);

  return (
    <>
      {data?.map((item: any) => (
        <p key={item.id}>{item.attributes.name}</p>
      ))}
      <p>123123</p>
    </>
  );
}
