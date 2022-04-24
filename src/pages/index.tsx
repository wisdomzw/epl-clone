import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="EPL"
          description="EPL Clone"
        />
      }
    >

    <p>index page</p>
    </Main>
  );
};

export default Index;
