import { getNotesByTag } from "@/lib/api";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string[] }>;
}
const TagPage = async ({ params }: Props) => {
  const { slug: tag } = await params;
  const searchTag = tag[0] === "all" ? undefined : tag[0];

  const { notes } = await getNotesByTag(searchTag as string);
  if (!notes) return notFound();

  return (
    <div>
      <h2>Notes filtered by tag: {tag}</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link href={`/notes/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagPage;
