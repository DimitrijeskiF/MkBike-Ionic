export interface Feature {
    type: string;
    geometry: {
        type: string,
        coordinates: any[]

    };
    properties: { title: string, description: string }
}