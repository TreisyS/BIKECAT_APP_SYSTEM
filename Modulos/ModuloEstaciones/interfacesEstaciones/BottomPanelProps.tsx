//Modulos/ModuloEstaciones/InterfacesEstaciones/BottomPanelProps.tsx

export interface BottomPanelProps {
  origin: string;
  destination: string;
  setOrigin: (value: string) => void;
  setDestination: (value: string) => void;
  onCalculateRoute: () => void;
  onFocusUserLocation: () => void;
  onSwitchStation: () => void;
  currentStationIndex: number; // Agrega esta línea
}

