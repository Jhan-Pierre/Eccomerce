export interface UserDetail {
    id: string;
    fullName: string;
    email: string;
    roles: string[];
    phoneNumber: string;
    twoFactorEnabled: boolean;
    phoneNumberEnabled: boolean;
    accessFailedCount: 0;
}
