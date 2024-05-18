export interface User {
    id: number;
    email: string;
    password: string;
    phone: string;
    firstName: string;
    lastName: string;
    roleId: number;
    stateId: number;
    shiftId?: number; //el estado puede ser nulo
}
