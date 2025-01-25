import { useState } from "react";

interface User {
  email: string;
  username: string;
}

interface ApiResponse {
  msg: string;
  status: number;
  user?: User;
}

export const useApi = (): {
  data: ApiResponse | null;
  isPending: boolean;
  error: string | null;
  callApi: (
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    body?: any,
    headers?: Record<string, string>
  ) => Promise<void>;
} => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const callApi = async (
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    body?: any,
    headers: Record<string, string> = { "Content-Type": "application/json" }
  ): Promise<void> => {
    setIsPending(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}${url}`, {
        method,
        headers,
        credentials: "include",
        body: body ? JSON.stringify(body) : undefined,
      });

      const json = await response.json();
      json.status = response.status;

      console.log("JSON", json);

      // console.log("RESPONSE", res);

      setData(json);
    } catch (err) {
      setError(`Error: ${err}`);
    } finally {
      setIsPending(false);
    }
  };

  return { data, isPending, error, callApi };
};

export const callApi = async (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body?: any,
  headers: Record<string, string> = { "Content-Type": "application/json" }
): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}${url}`, {
      method,
      headers,
      credentials: "include",
      body: body ? JSON.stringify(body) : undefined,
    });

    const json = await response.json();
    json.status = response.status;

    return json;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};
