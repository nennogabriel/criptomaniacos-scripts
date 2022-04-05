import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const GuruFilter: NextPage = () => {
  const router = useRouter();
  const { query } = router;

  const urlData = Object.keys(query).map((key) => {
    const k = key.replace('amp;', '');
    return `${k}=${query[key]}`;
  });

  if (urlData.length === 0) {
    return <div>Loading...</div>;
  }

  const completeUrl = `https://links.criptomaniacos.com.br/form/95c3cfef-3fdc-477d-b8cc-7bf0b2d659d4?${urlData.join(
    '&'
  )}`;

  return (
    <div>
      <Head>
        <title>Criptomaniacos: Obrigado pelo cadastro</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="refresh" content={`5; URL='${completeUrl}'`} />
      </Head>

      <h1>Obrigado pelo seu cadastro</h1>
      <p>Você será redirecionado para a plataforma em 3 segundos.</p>
      <p>
        Caso não seja redirecionado, clique <a href={completeUrl}>aqui</a>.
      </p>
      {JSON.stringify(query)}
    </div>
  );
};

export default GuruFilter;