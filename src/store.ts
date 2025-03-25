import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { callApi } from "./utils/callApi";

interface User {
  email: string;
  username: string;
}

interface ApiResponse {
  data: [];
  status: number;
  user?: User;
}

interface Expense {
  id: number;
  name: string;
  amount: number;
  category: string;
  date: string;
}

// interface MonthlyExpenses {
//   expense: Expense[];
// }

interface Category {
  id: number;
  name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<ApiResponse | void>;
  logout: () => Promise<ApiResponse | void>;
}

interface ExpenseState {
  selectedYear: number;
  expenses: Expense[];
  categories: Category[];
  getExpenses: (year: string) => Promise<void>;
  // setSelectedYear: (year: number) => void;
  // addExpense: (expense: Expense) => Promise<ApiResponse | void>;
  // updateExpense: (expense: Expense) => Promise<ApiResponse | void>;
  // deleteExpense: (id: number) => Promise<ApiResponse | void>;
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

export const useExpenseStore = create<ExpenseState>()(
  devtools(
    persist(
      (set) => ({
        selectedYear: new Date().getFullYear(),
        expenses: [],
        categories: [],
        getExpenses: async (year: string) => {
          try {
            const expensesResponse = await callApi(`expenses/${year}`, "GET");
            const categoriesResponse = await callApi("categories", "GET");

            if (expensesResponse.status === 200) {
              set({ expenses: expensesResponse.data as Expense[] });
            }

            if (categoriesResponse.status === 200) {
              console.log("CATS", categoriesResponse.data);

              set({ categories: categoriesResponse.data as Category[] });
            }
          } catch (error) {
            console.error("Fetch user data error:", error);
          }
        },
        // setSelectedYear: (year: number) => {
        //   set({ selectedYear: year });
        //   console.log("Selected year:", year);
        // },
      }),
      { name: "expenseStore" }
    )
  )
);
