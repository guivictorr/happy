<h1 align="center">
  <img src="./.github/Home.png"/>
</h1>
<p align="center">
  💜 O NLW é um evento com muito código, desafios, networking e um único objetivo: te levar para o próximo nível. O que é a Next Level Week
  Um experiência online e totalmente gratuita para evoluir suas habilidades em programação e colocar mais um trabalho completo no seu portfolio.
</p>

## 🔎 Veja como ficou
- [Deploy](https://happy-blush.vercel.app/)

## 💅 Layout

- [Layout Web](https://www.figma.com/file/NgRhz5NQOBd01bw3cK0feL/Happy-Web-(Copy)?node-id=0%3A1)
- [Layout Mobile](https://www.figma.com/file/HXcHlbhxq1Eo5Cyd5aIgSQ/Happy-Mobile-(Copy))

## 🛠 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

Frontend Web
- [ReactJS](https://pt-br.reactjs.org)
- [Framer Motion](https://www.framer.com/motion/)
- [Leaflet](https://leafletjs.com)
- [React Leaflet](https://react-leaflet.js.org)
- [Toastify](https://www.npmjs.com/package/react-toastify)
- [Styled Components](styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Typescript](typescriptlang.org/)
- [React Router](https://reactrouter.com/)

Frontend Mobile
- [React Native](https://reactnative.dev)
- [Expo](https://expo.io)
- [React Navigation](https://reactnavigation.org)
- [Typescript](typescriptlang.org/)
- [Styled Components](styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [React Native Maps](https://github.com/react-native-maps/react-native-maps)

Backend
- [NodeJS](https://nodejs.org/)
- [Express](https://expressjs.com/pt-br/)
- [Typescript](https://typescriptlang.org/)
- [TypeORM](https://typeorm.io#/)
- [Postgres](https://www.postgresql.org)
- [Docker](https://www.docker.com)
- [Multer](https://www.npmjs.com/package/multer)
- [Yup](https://www.npmjs.com/package/yup)

## 📱💻 Instruções

```
## 1. Clonar repositório
git clone https://github.com/guivictorr/happy.git

## 2. Entrar na pasta
cd happy

## 3. Instalar as dependências
cd backend && yarn install
cd web && yarn install
cd mobile && yarn install

## 4. Colocar suas configurações do banco de dados
cd backend 
ormconfig.json (Mudar as configurações)

## 4. Rodar a aplicação
cd backend && yarn dev (http://localhost:1337)
cd web && yarn start (http://localhost:3000)
cd mobile && yarn start (Escanear o QR CODE com o aplicativo do Expo)
```

## 🐛 Issues
Se as imagens não carregarem no mobile, será necessário mudar 
[o link da linha 7](https://github.com/guivictorr/happy/blob/master/backend/src/views/images_view.ts)
de http://localhost:1337 para o link que está acima do QR CODE na página do Expo

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/guivictorr/happy/blob/master/LICENSE) para mais detalhes.
 
