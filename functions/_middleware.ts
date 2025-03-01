export const onRequest = async ({ params }: {params: any}) => {
  return new Response(`Ruta dinámica funcionando para: ${params?.country || 'desconocido'}`);
};
