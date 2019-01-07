# Uploader(仮)

## Description

- upload file from browser to S3

## Get Started

- preparation

```bash
npm i -g yarn
```

- clone & setup

```bash
git clone https://github.com/ozaki25/uploader.git
cd uploader
yarn
```

- create `.env` file

```bash
touch .env
```

```
S3_URL=xxxx
AWS_ACCESS_KEY_ID=xxxx
POLICY=xxxx
SIGNATURE=xxxx
```

- dev

```bash
yarn start
# open http://localhost:1234/
```

- prod

```bash
yarn build
# generated in `dist` dir
```

- use

```html
<!-- your html file-->

<!-- use uploader -->
<x-uploader></x-uploader>
<!-- import bundled uploader file -->
<script src="/uploader.js"></script>
```
