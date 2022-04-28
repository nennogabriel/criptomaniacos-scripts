import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const GuruFilter: NextPage = ({ idcampanha }: any) => {
  const router = useRouter();
  const { query } = router;

  const urlData = Object.keys(query).map((key) => {
    const k = key.replace('amp;', '');
    return `${k}=${query[key]}`;
  });

  if (urlData.length === 0) {
    return <div>Loading...</div>;
  }

  const completeUrl = `https://links.criptomaniacos.com.br/form/${idcampanha}?${urlData.join(
    '&'
  )}`;

  return (
    <div>
      <Head>
        <title>Criptomaniacos: Obrigado pelo cadastro</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="refresh" content={`1; URL='${completeUrl}'`} />
      </Head>

      <h1>Obrigado pelo seu cadastro</h1>
      <p>Você deverá ser redirecionado para a plataforma em até 2 segundos.</p>
      <p>
        Caso não seja redirecionado, por favor
        <a href={completeUrl}> clique aqui</a>.
      </p>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps({ params }: any) {
  const { idcampanha } = params;
  return {
    props: { idcampanha }, // will be passed to the page component as props
  };
}

export default GuruFilter;

// https://criptomaniacos.cademi.com.br/api/postback/custom?token=25a9226459e51242a81c6e9e348a0960&codigo=000099999&produto_id=00022&cliente_email=eduardo@criptomaniacos.io&status=aprovado
