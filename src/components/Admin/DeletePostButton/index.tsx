"use client";

import { deletePostAction } from "@/actions/delete-post-action";
import { Dialog } from "@/components/Dialog";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { toast } from "react-toastify";

type DeletePostButtonProps = {
  id: string;
  title: string;
};
export function DeletePostButton({ id, title }: DeletePostButtonProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [showDialog, setShowDialog] = useState(false);
  async function HandleClick() {
    setShowDialog(true);
  }

  function handleConfirm() {
    toast.dismiss()
    startTransition(async () => {
      const result = await deletePostAction(id);
      setShowDialog(false);
      if(result.error){
        toast.error(result.error)
      }else{
        router.refresh()
      }
      toast.success('Post apagado com sucesso!')
    });
  }
  useEffect(()=>{

  },[])

  return (
    <>
      <button
        key={id}
        aria-label={`Apagar post: ${title}`}
        title={`Apagar post: ${title}`}
        className={clsx(
          "text-red-500",
          "cursor-pointer transition",
          "[&_svg]:w-4 [&_svg]:h-4",
          "hover:scale-120 hover:text-red-700",
          "disabled:text-slate-300  disabled:cursor-not-allowed"
        )}
        onClick={HandleClick}
        disabled={isPending}
      >
        <Trash2Icon />
      </button>
      {showDialog && (
        <Dialog
          isVisible={showDialog}
          title="Apagar post?"
          content={`Tem certeza que deseja apagar o post: ${title}`}
          onCancel={() => setShowDialog(false)}
          onConfirm={handleConfirm}
          disabled={isPending}
        />
      )}
    </>
  );
}
