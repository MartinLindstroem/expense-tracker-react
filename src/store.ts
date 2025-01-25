import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { callApi } from "./hooks/useApi";

interface User {
  email: string;
  username: string;
}

interface ApiResponse {
  msg: string;
  status: number;
  user?: User;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<ApiResponse | void>;
  logout: () => Promise<ApiResponse | void>;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        isAuthenticated: false,
        login: async (email: string, password: string) => {
          try {
            const response = await callApi("auth/login", "POST", {
              email,
              password,
            });

            if (response.status === 200 && response.user) {
              set({ user: response.user, isAuthenticated: true });
            }

            return response;
          } catch (error) {
            console.error("Login error:", error);
          }
        },
        logout: async () => {
          try {
            const response = await callApi("auth/logout", "POST");

            if (response.status === 200) {
              set({ user: null, isAuthenticated: false });
            }

            return response;
          } catch (error) {
            console.error("Logout error:", error);
          }
        },
      }),
      { name: "authStore" }
    )
  )
);
