export const PORT: number = parseInt(process.env.PORT!);

const ENVIRONMENT: { [index: number]: string } = {
  8000: 'Production',
  8001: 'Staging',
};

export const serverMessage: string = `${ENVIRONMENT[PORT]} server running on PORT:${PORT}`;
