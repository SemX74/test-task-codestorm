import axios from "axios";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Inputs, ResponseData } from "../Components/Form/Form";
import { setToken, setUserData } from "../Redux/DataSlice";
import { useAppDispatch, useAppSelector } from "../Redux/Hooks";
export interface Task {
  id: number;
  text: string;
}
export const useAuth = () => {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [responseError, setResponseError] = useState<any>();
  const [tasks, setTasks] = useState<Task[]>([]);

  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.data.token);

  const REGISTERAPI = "http://localhost:3000/register";
  const LOGINAPI = "http://localhost:3000/login";
  const TASKSAPI = "http://localhost:3000/tasks";

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const onLogin: SubmitHandler<Inputs> = async (inputsData) => {
    setResponseError("");
    setIsDataLoading(true);
    dispatch(setUserData(inputsData));
    try {
      const { data } = await axios.post<ResponseData>(LOGINAPI, inputsData);
      data && dispatch(setToken(data.accessToken));
    } catch (error: any) {
      setResponseError(error.response.data);
    } finally {
      setIsDataLoading(false);
    }
  };
  const onRegister: SubmitHandler<Inputs> = async (inputsData) => {
    setIsDataLoading(true);
    setResponseError("");
    dispatch(setUserData(inputsData));
    try {
      const { data } = await axios.post<ResponseData>(REGISTERAPI, inputsData);
      data && dispatch(setToken(data.accessToken));
    } catch (error: any) {
      setResponseError(error.response.data);
    } finally {
      setIsDataLoading(false);
    }
  };
  const onGetTasks = async () => {
    setIsDataLoading(true);
    setResponseError("");
    try {
      const { data } = await axios.get(TASKSAPI, config);
      data && setTasks([...data]);
    } catch (error: any) {
      setResponseError(error.response.data);
    } finally {
      setIsDataLoading(false);
    }
  };
  const store = {
    tasks,
    onGetTasks,
    isDataLoading,
    setResponseError,
    responseError,
    onLogin,
    onRegister,
  };
  return store;
};
