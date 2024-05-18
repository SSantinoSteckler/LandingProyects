import { CardProyect } from './components/CardProyect';

export function App() {
  return (
    <>
      <div className='md:p-10'>
        <h1 className='text-center text-3xl font-bold'>
          Practice Projects by Santino Steckler{' '}
          <a
            href='https://github.com/SSantinoSteckler'
            className='underline text-blue-800'
            target='_blank'
          >
            GitHub
          </a>
        </h1>
        <div className='m-10 grid grid-cols-1 gap-6 xl:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4 '>
          <CardProyect
            children={'https://trelagency.netlify.app/'}
          ></CardProyect>
          <CardProyect
            children={'https://ssantinosteckler.github.io/Perisfericos.com/'}
          ></CardProyect>
          <CardProyect
            children={
              'https://66490b7d92f7901cb588aa8b--gentle-treacle-3db421.netlify.app/'
            }
          ></CardProyect>

          <CardProyect
            children={
              'https://66490d2d11b52520bf6c0fc2--tranquil-klepon-ea4550.netlify.app/'
            }
          ></CardProyect>
          <CardProyect
            children={
              'https://66490e46d8a3d01a6e6cbecf--cozy-bonbon-cf4bdd.netlify.app/'
            }
          ></CardProyect>
          <CardProyect
            children={'https://ssantinosteckler.github.io/TraductorJS/'}
          ></CardProyect>
          <CardProyect
            children={
              'https://66490fbb92f790207d88a766--lustrous-centaur-4854e2.netlify.app/'
            }
          ></CardProyect>
          <CardProyect
            children={
              'https://66490d9a0d17a81ab75c2df4--effortless-moonbeam-44e6a3.netlify.app/'
            }
          ></CardProyect>
          <CardProyect
            children={
              'https://66490af611b5251e986c109d--cosmic-pie-138c07.netlify.app/'
            }
          ></CardProyect>
          <CardProyect
            children={
              'https://ssantinosteckler.github.io/ViajeEspacial-Juego-JS/'
            }
          ></CardProyect>
          <CardProyect
            children={'https://ssantinosteckler.github.io/AppAnka/'}
          ></CardProyect>

          <CardProyect
            children={
              'https://66490f5b977ec61fbe15206a--capable-sunshine-4d0a46.netlify.app/'
            }
          ></CardProyect>

          <CardProyect
            children={'https://ssantinosteckler.github.io/Pokedex-PokeAPI/'}
          ></CardProyect>

          <CardProyect
            children={
              'https://66491aff977ec6280f152099--resonant-frangollo-f22f03.netlify.app/'
            }
          ></CardProyect>
          <CardProyect
            children={
              'https://66491b5e11b5252a296c0fc7--lucent-yeot-9e05ac.netlify.app/'
            }
          ></CardProyect>
          <CardProyect
            children={
              'https://66491bae5b0c792aa5326530--creative-daifuku-735f30.netlify.app/'
            }
          ></CardProyect>
          <CardProyect
            children={'https://ssantinosteckler.github.io/Entrega-Final-Coder/'}
          ></CardProyect>
          <CardProyect
            children={
              'https://66491d690d17a826235c2de3--celebrated-banoffee-2983d8.netlify.app/'
            }
          ></CardProyect>
          <CardProyect
            children={
              'https://ssantinosteckler.github.io/ValorDelDolar-EnTiempoReal-Fetch-APIs-JSON/'
            }
          ></CardProyect>
          <CardProyect
            children={'https://ssantinosteckler.github.io/Front-Works/'}
          ></CardProyect>
        </div>
      </div>
    </>
  );
}
