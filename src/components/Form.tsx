import { useState} from "react";
import type { FormEvent } from "react";
import { validate } from "../utils/validate";

interface User {
  name: string;
  email: string;
  agree: boolean;
}

interface FormProps {
  onRegister: (name: string) => void;
}

const Form = ({ onRegister }: FormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<Record<string, string> | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrors(null);

    const data: User = { name, email, agree };
    const validateErrors = validate(data);

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    onRegister(name);
    setName('');
    setEmail('');
    setAgree(false);
    alert('Obrigado por se inscrever!');
  };

  return (
    <form className="flex flex-col gap-4 w-full md:w-80" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="text-sm mb-3 font-bold" htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite o seu nome"
          className="rounded-lg py-2 px-2 text-sm bg-stone-50 placeholder:text-stone-600"
        />
      </div>

        {errors?.name && <small className="text-xs text-red-500 mt-1">{errors.name}</small>}
      <div className="flex flex-col">
        <label className="text-sm mb-3 font-bold" htmlFor="email">E-mail</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite o seu e-mail"
          className="rounded-lg py-2 px-2 text-sm bg-stone-50 placeholder:text-stone-600"
        />
      </div>

        {errors?.email && <small className="text-xs text-red-500 mt-1">{errors.email}</small>}
      <div className="flex flex-col">
        <a href="#" className="text-xs underline mb-2">Leia os termos</a>
        <div className="flex gap-2 items-center">
          <input
            id="agree"
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label className="text-sm" htmlFor="agree">Concordo com os termos</label>
        </div>
        {errors?.agree && <small className="text-xs text-red-500 mt-1">{errors.agree}</small>}
      </div>

      <button
        type="submit"
        className="bg-slate-600 cursor-pointer hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white"
      >
        Cadastrar
      </button>
    </form>
  );
};

export default Form;
