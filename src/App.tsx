import { ResetCSS } from "./assets/GlobalStyles";
import {
  ViewPort,
  MainContainer,
  CommentsDiv,
  CommentInfoDiv,
} from "./assets/Styles";
import { LabelForm, Button } from "./assets/FormStyles";
import { MainTitle, Paragraph } from "./assets/FontStyles";
import Trash from "./assets/Imagens/icon-delete.svg";
import { useState, FormEvent, useEffect } from "react";

interface IComment {
  id: number;
  mail: string;
  comment: string;
  date: Date;
}

type Comment = {
  id: number;
  mail: string;
  comment: string;
  date: Date;
};

export function App() {
  const [mail, setMail] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    const localComments = localStorage.getItem("comments");
    if (!localComments) return;
    const arrayComments: Array<Comment> = JSON.parse(localComments);
    setComments(() =>
      arrayComments.map((comment) => ({
        ...comment,
        date: new Date(comment.date),
      }))
    );
  }, []);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    const newComment: IComment = {
      id: Math.floor(Math.random() * 1000),
      mail: mail,
      comment: comment,
      date: new Date(),
    };
    const newComments = [...comments, newComment];
    setComments([...newComments]);
    localStorage.setItem("comments", JSON.stringify(newComments));
    setComment("");
    setMail("");
  };
  const handleDelete = (id: number) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    localStorage.setItem('comments', JSON.stringify(updatedComments));

    setComments(updatedComments);
  };

  return (
    <ViewPort>
      <ResetCSS />
      <MainContainer>
        <MainTitle>Feed de Comentários</MainTitle>
        <form onSubmit={handleSubmit}>
          <LabelForm htmlFor="email">Email: </LabelForm>
          <input
            id="email"
            type="email"
            required
            value={mail}
            onChange={(ev) => setMail(ev.target.value)} // vai pegar o evento e atualizar sempre que houver mudança //
          />
          <LabelForm htmlFor="comment">Comentário: </LabelForm>
          <textarea
            id="comment"
            rows={6}
            cols={22}
            placeholder="Comentário aqui!"
            value={comment}
            required
            onChange={(ev) => setComment(ev.target.value)}
          ></textarea>
          <Button>Enviar Comentário</Button>
        </form>
        <hr />
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentsDiv key={comment.id}>
              <CommentInfoDiv>
                <Paragraph>User: {comment.mail}</Paragraph>
                <Paragraph>{comment.comment}</Paragraph>
                <Paragraph>Day: {comment.date.toDateString()}</Paragraph>
              </CommentInfoDiv>
              <>
                <img
                  src={Trash}
                  alt=""
                  onClick={() => handleDelete(comment.id)}
                />
              </>
            </CommentsDiv>
          ))
        ) : (
          <Paragraph>Seja o primeiro a comentar!</Paragraph>
        )}
      </MainContainer>
    </ViewPort>
  );
}
