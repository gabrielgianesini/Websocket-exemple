export interface dataProps {
  SEQCAMPANHA: number
  CAMPANHA: string
  MIDIA: string
  INICIO: string
  FIM: string
  SEQLOJA: number
  SEQOFERTA: number
  TIPO_OFERTA: string
  SEQPRODUTO: number 
  DESCRICAO: string
  PRECO_VAREJO: number 
  PRECO_ATACADO: number | null
  PRECO_FIDELIDADE: number 
  SEQFORNECEDOR: number 
  NEGOCIACAO_ESPACO: number 
  user: string | string[] | undefined
}