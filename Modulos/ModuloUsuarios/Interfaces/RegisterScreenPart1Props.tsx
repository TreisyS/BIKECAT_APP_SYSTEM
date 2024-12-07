//Modulos/ModuloUsuarios/Interfaces/RegisterPart1Props.tsx
export interface RegisterScreenPart1Props {
  onNext: (data: {
    fullName: string;
    username: string;
    password: string;
    email: string;
    phone: string;
  }) => void;
}
