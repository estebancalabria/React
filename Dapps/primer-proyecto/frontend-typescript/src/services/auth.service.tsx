import axios from "axios";
import { LoginResponse } from "../dto/LoginResponse";
import Registro from "../models/Registro";
import { useContext } from "react";
import SessionContext from "../context/SessionContext";
import { isContext } from "vm";

const LOGIN_URL = "http://localhost:3001/login";
const SINGUP_URL = "http://localhost:3001/register";

export class AuthService {

    isAuthorized():boolean{
        return localStorage.getItem("token") !== null;
    }

    login(email: string, password: string): Promise<void> {
        return new Promise((accept, reject) => {
            axios.post<LoginResponse>(LOGIN_URL, { email, password }).then((resp) => {
                const jwt = resp.data.accessToken;
                localStorage.setItem("token", jwt);
                accept();
            }).catch((err) => {
                reject(err);
            });
        })
    }

    logout(): Promise<void> {
        return new Promise((accept, reject) => {
            localStorage.removeItem("token");
        })
    }

    public register(reg: Registro): Promise<void> {
        return new Promise((accept, reject) => {
            axios.post(SINGUP_URL, {
                email: reg.usuario
                , password: reg.password
            }).then((resp) => {
                accept();
            }).catch((err) => {
                reject(err);
            });
        });
    }
}