export interface Planet {
    "name": string,
    "id": string,
    "index": number,
    "overview": {
        "content": string,
        "source": string
    },
    "structure": {
        "content": string,
        "source": string
    },
    "geology": {
        "content": string,
        "source": string
    },
    "rotation": string,
    "revolution": string,
    "radius": string,
    "temperature": string,
    "images": {
        "planet": string,
        "internal": string,
        "geology": string
    }
}
