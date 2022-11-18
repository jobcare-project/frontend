import { Buffer } from 'buffer';

export const getBase64FromFile = async (file) => {
    const data = await new Promise((resolve) => {
        let baseURL = '';
        // Make new FileReader
        let reader = new FileReader();

        // Convert the file to base64 text
        reader.readAsDataURL(file);

        // on reader load somthing...
        reader.onload = () => {
            baseURL = reader.result;
            resolve(baseURL);
        };
    });
    return data;
};

export const getBase64FromBuffer = (buffer) => {
    const data = Buffer.from(buffer).toString('base64');
    return data;
};
