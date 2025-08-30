import { formatDate, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDatetime(rawDate: string) {
  const date = new Date(rawDate);
  const formatedDate = formatDate(date, "dd/MM/yyyy 'ás' HH'h'mm", { locale: ptBR });
  return formatedDate;
}

export function formatRelativeDate(rawDate: string) {
  const date = new Date(rawDate);

  return formatDistanceToNow(date, { locale: ptBR, addSuffix: true });
}
