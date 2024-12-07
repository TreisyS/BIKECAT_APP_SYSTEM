//Modulos/ModuloEstaciones/InterfacesEstaciones/BottomPanelProps.tsx

export interface BottomPanelProps {
  origin: string;
  destination: string;
  setOrigin: (origin: string) => void;
  setDestination: (destination: string) => void;
  onCalculateRoute: () => void;
}
