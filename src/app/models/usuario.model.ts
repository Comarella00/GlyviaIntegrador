export interface Usuario {
  idUsuario?: number;
  email: string;
  senha: string;
  nome?: string;
  genero?: string;
  tipoInsulina?: string;
  viaAplicacao?: string;
  pesoAtual?: number;
  altura?: number;
  metaGlicemica?: number;
  icr?: number;
  dataNascimento?: string;
}
