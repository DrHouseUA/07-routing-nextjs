"use client";

import Modal from "@/components/Modal/Modal";
import { getNoteById } from "@/lib/api";
import { Note } from "@/types/note";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotePreview() {
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
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Modal>
  );
}
