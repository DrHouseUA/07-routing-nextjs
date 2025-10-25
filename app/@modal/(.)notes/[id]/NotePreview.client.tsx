import { Note } from "@/types/note";
import css from "./NotePreview.module.css";

interface NotePreviewProps {
  note: Note;
}
export default function NotePreview({ note }: NotePreviewProps) {
  const { tag, title, content, createdAt, updatedAt } = note;
  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <div className={css.tag}>{tag}</div>
          <div className={css.title}>{title}</div>
        </div>
        <p>{content}</p>
        <div className={css.date}>Date: {updatedAt || createdAt}</div>
      </div>
    </div>
  );
}
