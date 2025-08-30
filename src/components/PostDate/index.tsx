import { formatDatetime } from "@/utils/format-datetime";

type PostDateProps = {
  dateTime: string;
};

export function PostDate({ dateTime }: PostDateProps) {
  return (
    <time className="text-slate-400 text-sm/tight" dateTime={dateTime}>
      {formatDatetime(dateTime)}
    </time>
  );
}
