import { IAuthDetails } from "./IAuthDetails";

export interface IAuthContext {
    authDetails: IAuthDetails;
    setAuth: React.Dispatch<React.SetStateAction<IAuthDetails>>;
}