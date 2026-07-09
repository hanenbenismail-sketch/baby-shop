"use client";

import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <input
        className="form-control mb-3"
        name="address"
        placeholder="Adresse complète"
        value={form.address}
        onChange={handleChange}
      />
    </div>
  );
}