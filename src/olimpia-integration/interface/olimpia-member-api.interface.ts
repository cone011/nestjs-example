export interface OlimpiaMemberApi {
  nombre: string;
  cedula: string;
  categoria: string;
  nroSocio: string;
  correo?: string;
  familiares?: string[];
  mora?: boolean;
}
