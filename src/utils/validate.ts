export const validate = (data: User): Record<string, string> => {
  const errors: Record<string, string> = {};
  if (!data.name.trim()) {
    errors.name = "O nome é obrigatório.";
  }
  if (!data.email.includes("@")) {
    errors.email = "O e-mail deve ser válido.";
  }
  if (!data.agree) {
    errors.agree = "Você precisa aceitar os termos.";
  }
  return errors;
};
