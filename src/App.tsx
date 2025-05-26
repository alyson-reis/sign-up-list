import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [registeredUsers, setRegisteredUsers] = useState<string[]>([]);

  const handleRegister = (name: string) => {
    setRegisteredUsers((prev) => [...prev, name]);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-400 p-6">
      <div className="flex flex-col md:flex-row gap-10 items-start bg-gray-200 p-6 rounded-lg shadow-lg">
        <Form onRegister={handleRegister} />

        <div className="w-full md:w-64 bg-stone-50 rounded-lg p-4 border border-stone-200 mt-8">
          <h2 className="text-lg font-semibold mb-3">Inscritos</h2>
          {registeredUsers.length === 0 ? (
            <p className="text-sm text-stone-500">Nenhum inscrito ainda.</p>
          ) : (
            <ul className="list-disc list-inside text-sm text-stone-700">
              {registeredUsers.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
