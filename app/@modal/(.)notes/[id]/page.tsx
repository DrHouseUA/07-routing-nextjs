"use client";

import Modal from "@/components/Modal/Modal";
import { getNoteById } from "@/lib/api";
import { Note } from "@/types/note";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import NotePreview from "./NotePreview.client";

export default function NotePreviewPage() {
  const [note, setNote] = useState<Note | null>(null);

  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    setNote(null);
    const noteId = id?.toString();
    if (noteId) {
      getNoteById(noteId).then(setNote);
    }
  }, [id]);

  if (!note) return null;

  const handleClosePreview = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClosePreview}>
      <NotePreview note={note} />
    </Modal>
  );
}
