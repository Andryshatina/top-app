import { useState } from 'react';
import { Htag, Button, Ptag, Tag, Rating } from '../components';
import { withLayout } from '../Layout/Layout';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(3);

  return (
    <>
      <Htag tag='h3'>abra kadabra</Htag>
      <Button appearance='primary' arrow='right'>Barash</Button>
      <Button appearance='ghoust' arrow='right'>Barash</Button>
      <Ptag size='s'>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером,
        но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами.
        Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</Ptag>
      <Tag color='primary'>Graph ql la</Tag>
      <Rating rating={rating} isAditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);