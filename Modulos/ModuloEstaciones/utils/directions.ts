import polyline from "polyline";

const decode = (t: string) => {
    return polyline.decode(t).map(([latitude, longitude]) => ({ latitude, longitude }));
};
export const getDirections = async (origin: string, destination: string) => {
    const apiKey = "AIzaSyBb6Sn4hzr7ECHSXTOaURnog7akHnAopi8"; // Reemplaza con tu clave API
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.routes.length === 0) {
        throw new Error("No se encontró una ruta.");
    }

    const points = data.routes[0].overview_polyline.points;
    return decode(points);
};
