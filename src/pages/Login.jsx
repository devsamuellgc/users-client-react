import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  function handleUserChange(e) {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  async function onSubmit() {
    try {
      await axios.post("http://localhost:3000/login", user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <form>
        <div className="flex flex-col gap-4 bg-white p-6 shadow-md rounded-lg min-w-80">
          <h1 className="text-center uppercase font-semibold">
            Faça o seu login
          </h1>
          <div className="flex flex-col gap-1 border rounded-md shadow py-0.5 px-2">
            <label className="text-sm" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              className="bg-transparent outline-none"
              id="email"
              name="email"
              value={user.email}
              onChange={handleUserChange}
              placeholder="Seu e-mail aqui"
            />
          </div>
          <div className="flex flex-col gap-1 border rounded-md shadow py-0.5 px-2">
            <label className="text-sm" htmlFor="name">
              Senha
            </label>
            <input
              type="password"
              className="bg-transparent outline-none"
              id="password"
              value={user.password}
              onChange={handleUserChange}
              name="password"
              placeholder="Crie sua senha"
            />
          </div>
          <button
            type="button"
            onClick={onSubmit}
            disabled={!user.email || !user.password}
            className="w-full py-2 shadow bg-green-400 text-white font-semibold rounded-md hover:opacity-90"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
