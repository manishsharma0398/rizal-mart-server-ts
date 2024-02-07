export const PORT = process.env.PORT;
export const ENVIRONMENT = process.env.ENVIRONMENT;

export const serverMessage: string = `${ENVIRONMENT === 'prd' ? 'Production' : 'Staging'} Server running on PORT:${PORT}`;
