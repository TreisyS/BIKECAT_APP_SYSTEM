//Modulos/ModuloUsuarios/Interfaces/RegisterPart2Props.tsx

export interface RegisterPart2Props {
  onBack: () => void;
  onRegister: (data: {
    address: string;
    city: string;
    idNumber: string;
    sex: string;
    birthdate: string;
  }) => void;
}
