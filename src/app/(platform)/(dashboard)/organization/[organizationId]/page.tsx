import { db } from "@/lib/db";

import { createBoard, deleteBoard } from "@/actions";

import { Button } from "@/components/ui";
import { Form } from "./form";

export default async function OrganizationPage() {
  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <h1>Organization Page</h1>

      <Form />

      <div className="space-y-2">
        {boards.map((board) => {
          const deleteBoardWithId = deleteBoard.bind(null, board.id);
          return (
            <form
              key={board.id}
              action={deleteBoardWithId}
              className="flex items-center gap-x-2"
            >
              <p>Board name: {board.title}</p>
              <Button type="submit" size="sm" variant="destructive">
                Delete
              </Button>
            </form>
          );
        })}
      </div>
    </div>
  );
}
