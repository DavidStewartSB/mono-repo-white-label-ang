export type LoginPayload = { email: string; password: string };

export type LoginResponse = {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    lastName: string;
    role: 'admin' | 'user';
    fotoPerfil: string | null;
    phoneNumber: string | null;
    isEmailVerified: boolean;
    lastLoginAt: string;
  };
};