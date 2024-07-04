export async function signInService({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await fetch("/api/auth/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error(response.message);
  }

  return response;
}
