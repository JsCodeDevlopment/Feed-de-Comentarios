import { MainContainer } from "./assets/Styles";
import { ResetCSS } from "./assets/GlobalStyles";
import { ViewPort } from "./assets/Styles";
import { LabelForm, Button } from "./assets/FormStyles";
import { MainTitle, Paragraph } from "./assets/FontStyles";
import { useState, FormEvent } from "react";

interface IComment {
  id: number,
  mail: string,
  comment: string,
  date: Date
}

export function App() {

  const [mail, setMail] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<IComment[]>([]);
  
  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    const newComment: IComment = {
      id: Math.floor(Math.random() * 1000),
      mail: mail,
      comment: comment,
      date: new Date(),
    };
    setComments((state) => [newComment, ...state]);
    setMail("");
    setComment("");
  };

  return (
    <ViewPort>
      <ResetCSS />
      <MainContainer>
        <MainTitle>Feed de Comentários</MainTitle>
        <form onSubmit={handleSubmit}>
          <LabelForm htmlFor="email">Email:</LabelForm>
          <input
            id="email"
            type="email"
            required
            value={mail}
            onChange={(ev) => setMail(ev.target.value)} // vai pegar o evento e atualizar sempre que houver mudança //
          />
          <LabelForm htmlFor="comment">Comentário:</LabelForm>
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
            <div key={comment.id}>
              <Paragraph>{comment.mail}</Paragraph>
              <Paragraph>{comment.comment}</Paragraph>
              <Paragraph>{comment.date.toDateString()}</Paragraph>
            </div>
          ))
        ) : (
          <Paragraph>Seja o primeiro a comentar!</Paragraph>
        )}
      </MainContainer>
    </ViewPort>
  );
}
