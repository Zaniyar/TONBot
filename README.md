# twa-template

> Starter template for a new TWA interacting with the TON blockchain

# Overview

The project is highly-opinionated, and there are many other alternate routes it could have taken. Some examples:

- Supports Ton Connect 2 wallets
- Uses vite with react (alternative to create-react-app)
- Uses the `ton` npm package

# Prerequesities

- Node.js v16 (other versions may work, needs more testing)
- A TON Connect compatible wallet (e.g. [Tonkeeper](https://tonkeeper.com/))

# What does this repo contain?

- A react-based TWA-ready app, interacting with TON
- Github actions set to deploy app to github pages
- A script to connect a telegram bot to the deployed app

# How to use

1. Create a template from this repo with the "Use this template" button

   1. Choose a name for your repo
   2. `**IMPORTANT!!**` mark "Include all branches", otherwise github pages deployment will not work.
      ![image](https://user-images.githubusercontent.com/5641469/191731317-14e742fd-accb-47d4-a794-fad01148a377.png)

2. Clone this repo and run `yarn`

3. Create a new bot with [botfather](https://t.me/botfather)
   1. Type `/newbot`
   2. Choose a name for your bot, e.g. `My Ton TWA`
   3. Choose a username for your bot, e.g. `my_ton_twa_482765_bot`
   4. Take note of the access token, e.g. `5712441624:AAHmiHvwrrju1F3h29rlVOZLRLnv-B8ZZZ`
   5. Run `yarn configbot` to link your bot to the webapp

# Development

1. Run `npm run dev` and edit the code as needed
2. On push to the `main` branch, the app will be automatically deployed via github actions.

# Roadmap

- [ ] Jetton transfer support

# License

MIT

Drag to Interact ↓
```stl
  solid
  facet normal  9.957718e-01 -3.217079e-02  8.604468e-02
    outer loop
      vertex  -2.302598e+03  3.846235e+03 -1.514766e+03
      vertex  -2.335357e+03  3.736728e+02 -2.433984e+03
      vertex  -2.302598e+03  4.980353e+02 -2.766607e+03
    endloop
  endfacet
  facet normal  9.957718e-01 -3.217079e-02  8.604467e-02
    outer loop
      vertex  -2.335357e+03  3.736728e+02 -2.433984e+03
      vertex  -2.302598e+03  3.846235e+03 -1.514766e+03
      vertex  -2.335357e+03  3.721873e+03 -1.182143e+03
    endloop
  endfacet
  facet normal  9.856174e-01  5.918236e-02 -1.582904e-01
    outer loop
      vertex  -2.362864e+03  3.969330e+03 -1.843997e+03
      vertex  -2.302598e+03  4.980353e+02 -2.766607e+03
      vertex  -2.362864e+03  6.211296e+02 -3.095837e+03
    endloop
  endfacet
  facet normal  9.856174e-01  5.918235e-02 -1.582904e-01
    outer loop
      vertex  -2.302598e+03  4.980353e+02 -2.766607e+03
      vertex  -2.362864e+03  3.969330e+03 -1.843997e+03
      vertex  -2.302598e+03  3.846235e+03 -1.514766e+03
    endloop
  endfacet
  facet normal  5.774407e-01  2.859208e-01 -7.647298e-01
    outer loop
      vertex  -2.739985e+03  4.178817e+03 -2.404297e+03
      vertex  -3.031140e+03  9.027340e+02 -3.849023e+03
      vertex  -3.031140e+03  4.250934e+03 -2.597182e+03
    endloop
  endfacet
  facet normal  5.774409e-01  2.859206e-01 -7.647296e-01
    outer loop
      vertex  -3.031140e+03  9.027340e+02 -3.849023e+03
      vertex  -2.739985e+03  4.178817e+03 -2.404297e+03
      vertex  -2.739985e+03  8.306171e+02 -3.656137e+03
    endloop
  endfacet
  facet normal  9.082947e-01  1.465026e-01 -3.918391e-01
    outer loop
      vertex  -2.512048e+03  4.082767e+03 -2.147399e+03
      vertex  -2.362864e+03  6.211296e+02 -3.095837e+03
      vertex  -2.512048e+03  7.345671e+02 -3.399240e+03
    endloop
  endfacet
  facet normal  9.082947e-01  1.465026e-01 -3.918391e-01
    outer loop
      vertex  -2.362864e+03  6.211296e+02 -3.095837e+03
      vertex  -2.512048e+03  4.082767e+03 -2.147399e+03
      vertex  -2.362864e+03  3.969330e+03 -1.843997e+03
    endloop
  endfacet
  facet normal  7.690733e-01  2.238388e-01 -5.986840e-01
    outer loop
      vertex  -2.739985e+03  4.178817e+03 -2.404297e+03
      vertex  -2.512048e+03  7.345671e+02 -3.399240e+03
      vertex  -2.739985e+03  8.306171e+02 -3.656137e+03
    endloop
  endfacet
  facet normal  7.690732e-01  2.238388e-01 -5.986841e-01
    outer loop
      vertex  -2.512048e+03  7.345671e+02 -3.399240e+03
      vertex  -2.739985e+03  4.178817e+03 -2.404297e+03
      vertex  -2.512048e+03  4.082767e+03 -2.147399e+03
    endloop
  endfacet
  facet normal  3.464566e-01  3.285177e-01 -8.786603e-01
    outer loop
      vertex  -3.031140e+03  4.250934e+03 -2.597182e+03
      vertex  -3.365673e+03  9.460032e+02 -3.964751e+03
      vertex  -3.365673e+03  4.294203e+03 -2.712911e+03
    endloop
  endfacet
  facet normal  3.464568e-01  3.285177e-01 -8.786603e-01
    outer loop
      vertex  -3.365673e+03  9.460032e+02 -3.964751e+03
      vertex  -3.031140e+03  4.250934e+03 -2.597182e+03
      vertex  -3.031140e+03  9.027340e+02 -3.849023e+03
    endloop
  endfacet
  facet normal -4.183312e-01  3.180914e-01 -8.507743e-01
    outer loop
      vertex  -4.072273e+03  4.284570e+03 -2.687146e+03
      vertex  -4.396188e+03  8.841247e+02 -3.799250e+03
      vertex  -4.396188e+03  4.232325e+03 -2.547409e+03
    endloop
  endfacet
  facet normal -4.183312e-01  3.180914e-01 -8.507743e-01
    outer loop
      vertex  -4.396188e+03  8.841247e+02 -3.799250e+03
      vertex  -4.072273e+03  4.284570e+03 -2.687146e+03
      vertex  -4.072273e+03  9.363703e+02 -3.938987e+03
    endloop
  endfacet
  facet normal  9.186240e-02  3.487266e-01 -9.327117e-01
    outer loop
      vertex  -3.365673e+03  4.294203e+03 -2.712911e+03
      vertex  -3.720784e+03  9.574759e+02 -3.995437e+03
      vertex  -3.720784e+03  4.305676e+03 -2.743596e+03
    endloop
  endfacet
  facet normal  9.186183e-02  3.487267e-01 -9.327117e-01
    outer loop
      vertex  -3.720784e+03  9.574759e+02 -3.995437e+03
      vertex  -3.365673e+03  4.294203e+03 -2.712911e+03
      vertex  -3.365673e+03  9.460032e+02 -3.964751e+03
    endloop
  endfacet
  facet normal -1.689926e-01  3.451705e-01 -9.232004e-01
    outer loop
      vertex  -3.720784e+03  4.305676e+03 -2.743596e+03
      vertex  -4.072273e+03  9.363703e+02 -3.938987e+03
      vertex  -4.072273e+03  4.284570e+03 -2.687146e+03
    endloop
  endfacet
  facet normal -1.689927e-01  3.451705e-01 -9.232004e-01
    outer loop
      vertex  -4.072273e+03  9.363703e+02 -3.938987e+03
      vertex  -3.720784e+03  4.305676e+03 -2.743596e+03
      vertex  -3.720784e+03  9.574759e+02 -3.995437e+03
    endloop
  endfacet
  facet normal -6.391605e-01  2.693352e-01 -7.203696e-01
    outer loop
      vertex  -4.396188e+03  4.232325e+03 -2.547409e+03
      vertex  -4.670455e+03  8.042996e+02 -3.585748e+03
      vertex  -4.670455e+03  4.152500e+03 -2.333907e+03
    endloop
  endfacet
  facet normal -6.391604e-01  2.693352e-01 -7.203697e-01
    outer loop
      vertex  -4.670455e+03  8.042996e+02 -3.585748e+03
      vertex  -4.396188e+03  4.232325e+03 -2.547409e+03
      vertex  -4.396188e+03  8.841247e+02 -3.799250e+03
    endloop
  endfacet
  facet normal -8.164326e-01  2.022241e-01 -5.408728e-01
    outer loop
      vertex  -4.876381e+03  4.050535e+03 -2.061190e+03
      vertex  -4.670455e+03  8.042996e+02 -3.585748e+03
      vertex  -4.876381e+03  7.023348e+02 -3.313031e+03
    endloop
  endfacet
  facet normal -8.164328e-01  2.022239e-01 -5.408723e-01
    outer loop
      vertex  -4.670455e+03  8.042996e+02 -3.585748e+03
      vertex  -4.876381e+03  4.050535e+03 -2.061190e+03
      vertex  -4.670455e+03  4.152500e+03 -2.333907e+03
    endloop
  endfacet
  facet normal -9.380658e-01  1.213319e-01 -3.245169e-01
    outer loop
      vertex  -4.999934e+03  3.933379e+03 -1.747843e+03
      vertex  -4.876381e+03  7.023348e+02 -3.313031e+03
      vertex  -4.999934e+03  5.851792e+02 -2.999684e+03
    endloop
  endfacet
  facet normal -9.380656e-01  1.213320e-01 -3.245170e-01
    outer loop
      vertex  -4.876381e+03  7.023348e+02 -3.313031e+03
      vertex  -4.999934e+03  3.933379e+03 -1.747843e+03
      vertex  -4.876381e+03  4.050535e+03 -2.061190e+03
    endloop
  endfacet
  facet normal -9.957718e-01  3.217078e-02 -8.604465e-02
    outer loop
      vertex  -5.032694e+03  3.809017e+03 -1.415220e+03
      vertex  -4.999934e+03  5.851792e+02 -2.999684e+03
      vertex  -5.032694e+03  4.608167e+02 -2.667061e+03
    endloop
  endfacet
  facet normal -9.957718e-01  3.217079e-02 -8.604467e-02
    outer loop
      vertex  -4.999934e+03  5.851792e+02 -2.999684e+03
      vertex  -5.032694e+03  3.809017e+03 -1.415220e+03
      vertex  -4.999934e+03  3.933379e+03 -1.747843e+03
    endloop
  endfacet
  facet normal  1.689926e-01 -3.451705e-01  9.232004e-01
    outer loop
      vertex  -3.263018e+03  2.248168e+01 -1.494681e+03
      vertex  -3.614508e+03  3.349576e+03 -1.863908e+02
      vertex  -3.614508e+03  1.376082e+00 -1.438231e+03
    endloop
  endfacet
  facet normal  1.689927e-01 -3.451704e-01  9.232004e-01
    outer loop
      vertex  -3.614508e+03  3.349576e+03 -1.863908e+02
      vertex  -3.263018e+03  2.248168e+01 -1.494681e+03
      vertex  -3.263018e+03  3.370682e+03 -2.428402e+02
    endloop
  endfacet
  facet normal -9.186215e-02 -3.487266e-01  9.327117e-01
    outer loop
      vertex  -3.614508e+03  1.376082e+00 -1.438231e+03
      vertex  -3.969619e+03  3.361049e+03 -2.170759e+02
      vertex  -3.969619e+03  1.284880e+01 -1.468917e+03
    endloop
  endfacet
  facet normal -9.186232e-02 -3.487266e-01  9.327116e-01
    outer loop
      vertex  -3.969619e+03  3.361049e+03 -2.170759e+02
      vertex  -3.614508e+03  1.376082e+00 -1.438231e+03
      vertex  -3.614508e+03  3.349576e+03 -1.863908e+02
    endloop
  endfacet
  facet normal -5.774409e-01 -2.859207e-01  7.647296e-01
    outer loop
      vertex  -4.595306e+03  1.282349e+02 -1.777531e+03
      vertex  -4.304151e+03  3.404318e+03 -3.328046e+02
      vertex  -4.595306e+03  3.476435e+03 -5.256901e+02
    endloop
  endfacet
  facet normal -5.774410e-01 -2.859206e-01  7.647296e-01
    outer loop
      vertex  -4.304151e+03  3.404318e+03 -3.328046e+02
      vertex  -4.595306e+03  1.282349e+02 -1.777531e+03
      vertex  -4.304151e+03  5.611798e+01 -1.584645e+03
    endloop
  endfacet
  facet normal -7.417111e-08  9.366730e-01  3.502052e-01
    outer loop
      vertex  -4.072273e+03  4.284570e+03 -2.687146e+03
      vertex  -3.365673e+03  4.294203e+03 -2.712911e+03
      vertex  -3.720784e+03  4.305676e+03 -2.743596e+03
    endloop
  endfacet
  facet normal -3.035809e-08  9.366726e-01  3.502063e-01
    outer loop
      vertex  -3.365673e+03  4.294203e+03 -2.712911e+03
      vertex  -4.072273e+03  4.284570e+03 -2.687146e+03
      vertex  -3.031140e+03  4.250934e+03 -2.597182e+03
    endloop
  endfacet
  facet normal -1.008346e-07  9.366723e-01  3.502070e-01
    outer loop
      vertex  -3.031140e+03  4.250934e+03 -2.597182e+03
      vertex  -4.072273e+03  4.284570e+03 -2.687146e+03
      vertex  -4.396188e+03  4.232325e+03 -2.547409e+03
    endloop
  endfacet
  facet normal -2.222674e-08  9.366716e-01  3.502088e-01
    outer loop
      vertex  -3.031140e+03  4.250934e+03 -2.597182e+03
      vertex  -4.396188e+03  4.232325e+03 -2.547409e+03
      vertex  -2.739985e+03  4.178817e+03 -2.404297e+03
    endloop
  endfacet
  facet normal  8.440436e-08  9.366720e-01  3.502078e-01
    outer loop
      vertex  -2.739985e+03  4.178817e+03 -2.404297e+03
      vertex  -4.396188e+03  4.232325e+03 -2.547409e+03
      vertex  -4.670455e+03  4.152500e+03 -2.333907e+03
    endloop
  endfacet
  facet normal  3.662614e-08  9.366724e-01  3.502066e-01
    outer loop
      vertex  -2.739985e+03  4.178817e+03 -2.404297e+03
      vertex  -4.670455e+03  4.152500e+03 -2.333907e+03
      vertex  -2.512048e+03  4.082767e+03 -2.147399e+03
    endloop
  endfacet
  facet normal -4.230477e-08  9.366722e-01  3.502074e-01
    outer loop
      vertex  -2.512048e+03  4.082767e+03 -2.147399e+03
      vertex  -4.670455e+03  4.152500e+03 -2.333907e+03
      vertex  -4.876381e+03  4.050535e+03 -2.061190e+03
    endloop
  endfacet
  facet normal -4.259138e-08  9.366722e-01  3.502074e-01
    outer loop
      vertex  -2.512048e+03  4.082767e+03 -2.147399e+03
      vertex  -4.876381e+03  4.050535e+03 -2.061190e+03
      vertex  -2.362864e+03  3.969330e+03 -1.843997e+03
    endloop
  endfacet
  facet normal -2.358573e-08  9.366722e-01  3.502072e-01
    outer loop
      vertex  -2.362864e+03  3.969330e+03 -1.843997e+03
      vertex  -4.876381e+03  4.050535e+03 -2.061190e+03
      vertex  -4.999934e+03  3.933379e+03 -1.747843e+03
    endloop
  endfacet
  facet normal -1.046590e-09  9.366720e-01  3.502078e-01
    outer loop
      vertex  -2.362864e+03  3.969330e+03 -1.843997e+03
      vertex  -4.999934e+03  3.933379e+03 -1.747843e+03
      vertex  -2.302598e+03  3.846235e+03 -1.514766e+03
    endloop
  endfacet
  facet normal  3.336063e-08  9.366722e-01  3.502074e-01
    outer loop
      vertex  -2.302598e+03  3.846235e+03 -1.514766e+03
      vertex  -4.999934e+03  3.933379e+03 -1.747843e+03
      vertex  -5.032694e+03  3.809017e+03 -1.415220e+03
    endloop
  endfacet
  facet normal  8.087427e-09  9.366724e-01  3.502068e-01
    outer loop
      vertex  -2.302598e+03  3.846235e+03 -1.514766e+03
      vertex  -5.032694e+03  3.809017e+03 -1.415220e+03
      vertex  -2.335357e+03  3.721873e+03 -1.182143e+03
    endloop
  endfacet
  facet normal -2.616475e-08  9.366723e-01  3.502072e-01
    outer loop
      vertex  -2.335357e+03  3.721873e+03 -1.182143e+03
      vertex  -5.032694e+03  3.809017e+03 -1.415220e+03
      vertex  -4.972428e+03  3.685922e+03 -1.085990e+03
    endloop
  endfacet
  facet normal  1.123129e-09  9.366720e-01  3.502078e-01
    outer loop
      vertex  -2.335357e+03  3.721873e+03 -1.182143e+03
      vertex  -4.972428e+03  3.685922e+03 -1.085990e+03
      vertex  -2.458910e+03  3.604717e+03 -8.687966e+02
    endloop
  endfacet
  facet normal  3.131720e-08  9.366721e-01  3.502075e-01
    outer loop
      vertex  -2.458910e+03  3.604717e+03 -8.687966e+02
      vertex  -4.972428e+03  3.685922e+03 -1.085990e+03
      vertex  -4.823243e+03  3.572485e+03 -7.825875e+02
    endloop
  endfacet
  facet normal  7.293930e-09  9.366723e-01  3.502069e-01
    outer loop
      vertex  -2.458910e+03  3.604717e+03 -8.687966e+02
      vertex  -4.823243e+03  3.572485e+03 -7.825875e+02
      vertex  -2.664837e+03  3.502752e+03 -5.960795e+02
    endloop
  endfacet
  facet normal -4.645265e-08  9.366721e-01  3.502075e-01
    outer loop
      vertex  -2.664837e+03  3.502752e+03 -5.960795e+02
      vertex  -4.823243e+03  3.572485e+03 -7.825875e+02
      vertex  -4.595306e+03  3.476435e+03 -5.256901e+02
    endloop
  endfacet
  facet normal -4.540371e-08  9.366721e-01  3.502075e-01
    outer loop
      vertex  -2.664837e+03  3.502752e+03 -5.960795e+02
      vertex  -4.595306e+03  3.476435e+03 -5.256901e+02
      vertex  -2.939103e+03  3.422927e+03 -3.825774e+02
    endloop
  endfacet
  facet normal -5.186237e-08  9.366722e-01  3.502076e-01
    outer loop
      vertex  -2.939103e+03  3.422927e+03 -3.825774e+02
      vertex  -4.595306e+03  3.476435e+03 -5.256901e+02
      vertex  -4.304151e+03  3.404318e+03 -3.328046e+02
    endloop
  endfacet
  facet normal -6.285799e-08  9.366722e-01  3.502073e-01
    outer loop
      vertex  -2.939103e+03  3.422927e+03 -3.825774e+02
      vertex  -4.304151e+03  3.404318e+03 -3.328046e+02
      vertex  -3.263018e+03  3.370682e+03 -2.428402e+02
    endloop
  endfacet
  facet normal  3.921252e-08  9.366726e-01  3.502063e-01
    outer loop
      vertex  -3.263018e+03  3.370682e+03 -2.428402e+02
      vertex  -4.304151e+03  3.404318e+03 -3.328046e+02
      vertex  -3.969619e+03  3.361049e+03 -2.170759e+02
    endloop
  endfacet
  facet normal  2.021161e-07  9.366711e-01  3.502102e-01
    outer loop
      vertex  -3.263018e+03  3.370682e+03 -2.428402e+02
      vertex  -3.969619e+03  3.361049e+03 -2.170759e+02
      vertex  -3.614508e+03  3.349576e+03 -1.863908e+02
    endloop
  endfacet
  facet normal  9.380661e-01 -1.213316e-01  3.245161e-01
    outer loop
      vertex  -2.335357e+03  3.721873e+03 -1.182143e+03
      vertex  -2.458910e+03  2.565172e+02 -2.120637e+03
      vertex  -2.335357e+03  3.736728e+02 -2.433984e+03
    endloop
  endfacet
  facet normal  9.380661e-01 -1.213316e-01  3.245163e-01
    outer loop
      vertex  -2.458910e+03  2.565172e+02 -2.120637e+03
      vertex  -2.335357e+03  3.721873e+03 -1.182143e+03
      vertex  -2.458910e+03  3.604717e+03 -8.687966e+02
    endloop
  endfacet
  facet normal -7.417125e-08 -9.366720e-01 -3.502078e-01
    outer loop
      vertex  -3.365673e+03  9.460032e+02 -3.964751e+03
      vertex  -4.072273e+03  9.363703e+02 -3.938987e+03
      vertex  -3.720784e+03  9.574759e+02 -3.995437e+03
    endloop
  endfacet
  facet normal -3.921248e-08 -9.366724e-01 -3.502070e-01
    outer loop
      vertex  -4.072273e+03  9.363703e+02 -3.938987e+03
      vertex  -3.365673e+03  9.460032e+02 -3.964751e+03
      vertex  -3.031140e+03  9.027340e+02 -3.849023e+03
    endloop
  endfacet
  facet normal -1.309540e-08 -9.366722e-01 -3.502072e-01
    outer loop
      vertex  -4.072273e+03  9.363703e+02 -3.938987e+03
      vertex  -3.031140e+03  9.027340e+02 -3.849023e+03
      vertex  -4.396188e+03  8.841247e+02 -3.799250e+03
    endloop
  endfacet
  facet normal -2.058030e-08 -9.366722e-01 -3.502074e-01
    outer loop
      vertex  -4.396188e+03  8.841247e+02 -3.799250e+03
      vertex  -3.031140e+03  9.027340e+02 -3.849023e+03
      vertex  -2.739985e+03  8.306171e+02 -3.656137e+03
    endloop
  endfacet
  facet normal -1.164198e-08 -9.366722e-01 -3.502075e-01
    outer loop
      vertex  -4.396188e+03  8.841247e+02 -3.799250e+03
      vertex  -2.739985e+03  8.306171e+02 -3.656137e+03
      vertex  -4.670455e+03  8.042996e+02 -3.585748e+03
    endloop
  endfacet
  facet normal -1.786641e-09 -9.366722e-01 -3.502073e-01
    outer loop
      vertex  -4.670455e+03  8.042996e+02 -3.585748e+03
      vertex  -2.739985e+03  8.306171e+02 -3.656137e+03
      vertex  -2.512048e+03  7.345671e+02 -3.399240e+03
    endloop
  endfacet
  facet normal  8.752717e-09 -9.366722e-01 -3.502073e-01
    outer loop
      vertex  -4.670455e+03  8.042996e+02 -3.585748e+03
      vertex  -2.512048e+03  7.345671e+02 -3.399240e+03
      vertex  -4.876381e+03  7.023348e+02 -3.313031e+03
    endloop
  endfacet
  facet normal  6.889782e-09 -9.366722e-01 -3.502074e-01
    outer loop
      vertex  -4.876381e+03  7.023348e+02 -3.313031e+03
      vertex  -2.512048e+03  7.345671e+02 -3.399240e+03
      vertex  -2.362864e+03  6.211296e+02 -3.095837e+03
    endloop
  endfacet
  facet normal  1.123129e-08 -9.366722e-01 -3.502074e-01
    outer loop
      vertex  -4.876381e+03  7.023348e+02 -3.313031e+03
      vertex  -2.362864e+03  6.211296e+02 -3.095837e+03
      vertex  -4.999934e+03  5.851792e+02 -2.999684e+03
    endloop
  endfacet
  facet normal  1.465226e-08 -9.366722e-01 -3.502074e-01
    outer loop
      vertex  -4.999934e+03  5.851792e+02 -2.999684e+03
      vertex  -2.362864e+03  6.211296e+02 -3.095837e+03
      vertex  -2.302598e+03  4.980353e+02 -2.766607e+03
    endloop
  endfacet
  facet normal  6.065566e-09 -9.366722e-01 -3.502072e-01
    outer loop
      vertex  -4.999934e+03  5.851792e+02 -2.999684e+03
      vertex  -2.302598e+03  4.980353e+02 -2.766607e+03
      vertex  -5.032694e+03  4.608167e+02 -2.667061e+03
    endloop
  endfacet
  facet normal -3.032785e-09 -9.366722e-01 -3.502075e-01
    outer loop
      vertex  -5.032694e+03  4.608167e+02 -2.667061e+03
      vertex  -2.302598e+03  4.980353e+02 -2.766607e+03
      vertex  -2.335357e+03  3.736728e+02 -2.433984e+03
    endloop
  endfacet
  facet normal -1.883862e-08 -9.366722e-01 -3.502074e-01
    outer loop
      vertex  -5.032694e+03  4.608167e+02 -2.667061e+03
      vertex  -2.335357e+03  3.736728e+02 -2.433984e+03
      vertex  -4.972428e+03  3.377224e+02 -2.337830e+03
    endloop
  endfacet
  facet normal -2.021633e-08 -9.366722e-01 -3.502074e-01
    outer loop
      vertex  -4.972428e+03  3.377224e+02 -2.337830e+03
      vertex  -2.335357e+03  3.736728e+02 -2.433984e+03
      vertex  -2.458910e+03  2.565172e+02 -2.120637e+03
    endloop
  endfacet
  facet normal  0.000000e+00 -9.366721e-01 -3.502076e-01
    outer loop
      vertex  -4.972428e+03  3.377224e+02 -2.337830e+03
      vertex  -2.458910e+03  2.565172e+02 -2.120637e+03
      vertex  -4.823243e+03  2.242849e+02 -2.034428e+03
    endloop
  endfacet
  facet normal  6.564538e-09 -9.366722e-01 -3.502074e-01
    outer loop
      vertex  -4.823243e+03  2.242849e+02 -2.034428e+03
      vertex  -2.458910e+03  2.565172e+02 -2.120637e+03
      vertex  -2.664837e+03  1.545524e+02 -1.847920e+03
    endloop
  endfacet
  facet normal  0.000000e+00 -9.366722e-01 -3.502074e-01
    outer loop
      vertex  -4.823243e+03  2.242849e+02 -2.034428e+03
      vertex  -2.664837e+03  1.545524e+02 -1.847920e+03
      vertex  -4.595306e+03  1.282349e+02 -1.777531e+03
    endloop
  endfacet
  facet normal  2.328395e-09 -9.366722e-01 -3.502073e-01
    outer loop
      vertex  -4.595306e+03  1.282349e+02 -1.777531e+03
      vertex  -2.664837e+03  1.545524e+02 -1.847920e+03
      vertex  -2.939103e+03  7.472727e+01 -1.634418e+03
    endloop
  endfacet
  facet normal -3.292848e-09 -9.366723e-01 -3.502073e-01
    outer loop
      vertex  -4.595306e+03  1.282349e+02 -1.777531e+03
      vertex  -2.939103e+03  7.472727e+01 -1.634418e+03
      vertex  -4.304151e+03  5.611798e+01 -1.584645e+03
    endloop
  endfacet
  facet normal -2.619083e-09 -9.366722e-01 -3.502074e-01
    outer loop
      vertex  -4.304151e+03  5.611798e+01 -1.584645e+03
      vertex  -2.939103e+03  7.472727e+01 -1.634418e+03
      vertex  -3.263018e+03  2.248168e+01 -1.494681e+03
    endloop
  endfacet
  facet normal  7.589520e-09 -9.366722e-01 -3.502075e-01
    outer loop
      vertex  -4.304151e+03  5.611798e+01 -1.584645e+03
      vertex  -3.263018e+03  2.248168e+01 -1.494681e+03
      vertex  -3.969619e+03  1.284880e+01 -1.468917e+03
    endloop
  endfacet
  facet normal  1.205281e-08 -9.366722e-01 -3.502074e-01
    outer loop
      vertex  -3.969619e+03  1.284880e+01 -1.468917e+03
      vertex  -3.263018e+03  2.248168e+01 -1.494681e+03
      vertex  -3.614508e+03  1.376082e+00 -1.438231e+03
    endloop
  endfacet
  facet normal  8.164325e-01 -2.022240e-01  5.408728e-01
    outer loop
      vertex  -2.458910e+03  3.604717e+03 -8.687966e+02
      vertex  -2.664837e+03  1.545524e+02 -1.847920e+03
      vertex  -2.458910e+03  2.565172e+02 -2.120637e+03
    endloop
  endfacet
  facet normal  8.164327e-01 -2.022240e-01  5.408726e-01
    outer loop
      vertex  -2.664837e+03  1.545524e+02 -1.847920e+03
      vertex  -2.458910e+03  3.604717e+03 -8.687966e+02
      vertex  -2.664837e+03  3.502752e+03 -5.960795e+02
    endloop
  endfacet
  facet normal -9.082948e-01 -1.465025e-01  3.918387e-01
    outer loop
      vertex  -4.823243e+03  3.572485e+03 -7.825875e+02
      vertex  -4.972428e+03  3.377224e+02 -2.337830e+03
      vertex  -4.823243e+03  2.242849e+02 -2.034428e+03
    endloop
  endfacet
  facet normal -9.082948e-01 -1.465024e-01  3.918386e-01
    outer loop
      vertex  -4.972428e+03  3.377224e+02 -2.337830e+03
      vertex  -4.823243e+03  3.572485e+03 -7.825875e+02
      vertex  -4.972428e+03  3.685922e+03 -1.085990e+03
    endloop
  endfacet
  facet normal -3.464569e-01 -3.285176e-01  8.786603e-01
    outer loop
      vertex  -4.304151e+03  5.611798e+01 -1.584645e+03
      vertex  -3.969619e+03  3.361049e+03 -2.170759e+02
      vertex  -4.304151e+03  3.404318e+03 -3.328046e+02
    endloop
  endfacet
  facet normal -3.464565e-01 -3.285176e-01  8.786604e-01
    outer loop
      vertex  -3.969619e+03  3.361049e+03 -2.170759e+02
      vertex  -4.304151e+03  5.611798e+01 -1.584645e+03
      vertex  -3.969619e+03  1.284880e+01 -1.468917e+03
    endloop
  endfacet
  facet normal -7.690731e-01 -2.238389e-01  5.986843e-01
    outer loop
      vertex  -4.595306e+03  3.476435e+03 -5.256901e+02
      vertex  -4.823243e+03  2.242849e+02 -2.034428e+03
      vertex  -4.595306e+03  1.282349e+02 -1.777531e+03
    endloop
  endfacet
  facet normal -7.690731e-01 -2.238389e-01  5.986843e-01
    outer loop
      vertex  -4.823243e+03  2.242849e+02 -2.034428e+03
      vertex  -4.595306e+03  3.476435e+03 -5.256901e+02
      vertex  -4.823243e+03  3.572485e+03 -7.825875e+02
    endloop
  endfacet
  facet normal -9.856173e-01 -5.918260e-02  1.582911e-01
    outer loop
      vertex  -4.972428e+03  3.685922e+03 -1.085990e+03
      vertex  -5.032694e+03  4.608167e+02 -2.667061e+03
      vertex  -4.972428e+03  3.377224e+02 -2.337830e+03
    endloop
  endfacet
  facet normal -9.856173e-01 -5.918260e-02  1.582911e-01
    outer loop
      vertex  -5.032694e+03  4.608167e+02 -2.667061e+03
      vertex  -4.972428e+03  3.685922e+03 -1.085990e+03
      vertex  -5.032694e+03  3.809017e+03 -1.415220e+03
    endloop
  endfacet
  facet normal  4.183310e-01 -3.180915e-01  8.507743e-01
    outer loop
      vertex  -2.939103e+03  7.472727e+01 -1.634418e+03
      vertex  -3.263018e+03  3.370682e+03 -2.428402e+02
      vertex  -3.263018e+03  2.248168e+01 -1.494681e+03
    endloop
  endfacet
  facet normal  4.183310e-01 -3.180915e-01  8.507743e-01
    outer loop
      vertex  -3.263018e+03  3.370682e+03 -2.428402e+02
      vertex  -2.939103e+03  7.472727e+01 -1.634418e+03
      vertex  -2.939103e+03  3.422927e+03 -3.825774e+02
    endloop
  endfacet
  facet normal  6.391606e-01 -2.693352e-01  7.203695e-01
    outer loop
      vertex  -2.664837e+03  1.545524e+02 -1.847920e+03
      vertex  -2.939103e+03  3.422927e+03 -3.825774e+02
      vertex  -2.939103e+03  7.472727e+01 -1.634418e+03
    endloop
  endfacet
  facet normal  6.391606e-01 -2.693352e-01  7.203696e-01
    outer loop
      vertex  -2.939103e+03  3.422927e+03 -3.825774e+02
      vertex  -2.664837e+03  1.545524e+02 -1.847920e+03
      vertex  -2.664837e+03  3.502752e+03 -5.960795e+02
    endloop
  endfacet
  facet normal  0.000000e+00  0.000000e+00 -1.000000e+00
    outer loop
      vertex  -5.182467e+03  4.288480e+03 -3.657015e+03
      vertex  -2.133716e+03  3.072240e+03 -3.657015e+03
      vertex  -5.182467e+03  3.072240e+03 -3.657015e+03
    endloop
  endfacet
  facet normal  0.000000e+00  0.000000e+00 -1.000000e+00
    outer loop
      vertex  -2.133716e+03  3.072240e+03 -3.657015e+03
      vertex  -5.182467e+03  4.288480e+03 -3.657015e+03
      vertex  -2.133716e+03  4.288480e+03 -3.657015e+03
    endloop
  endfacet
  facet normal  0.000000e+00  0.000000e+00 -1.000000e+00
    outer loop
      vertex  -2.133716e+03  4.288480e+03 -3.657015e+03
      vertex  -5.182467e+03  4.288480e+03 -3.657015e+03
      vertex  -2.133716e+03  6.110930e+03 -3.657015e+03
    endloop
  endfacet
  facet normal -0.000000e+00  0.000000e+00 -1.000000e+00
    outer loop
      vertex  -2.133716e+03  6.110930e+03 -3.657015e+03
      vertex  -5.182467e+03  4.288480e+03 -3.657015e+03
      vertex  -5.182467e+03  6.110930e+03 -3.657015e+03
    endloop
  endfacet
  facet normal  0.000000e+00 -1.000000e+00  0.000000e+00
    outer loop
      vertex  -3.658092e+03  1.856000e+03  3.646492e+02
      vertex  -2.133716e+03  1.856000e+03 -1.810471e+02
      vertex  -2.133716e+03  1.856000e+03  3.646492e+02
    endloop
  endfacet
  facet normal  0.000000e+00 -1.000000e+00  0.000000e+00
    outer loop
      vertex  -2.133716e+03  1.856000e+03 -1.810471e+02
      vertex  -3.658092e+03  1.856000e+03  3.646492e+02
      vertex  -5.182467e+03  1.856000e+03 -1.810471e+02
    endloop
  endfacet
  facet normal  0.000000e+00 -1.000000e+00  0.000000e+00
    outer loop
      vertex  -5.182467e+03  1.856000e+03 -1.810471e+02
      vertex  -3.658092e+03  1.856000e+03  3.646492e+02
      vertex  -5.182467e+03  1.856000e+03  3.646492e+02
    endloop
  endfacet
  facet normal  0.000000e+00  1.000000e+00  0.000000e+00
    outer loop
      vertex  -2.133716e+03  6.110930e+03  3.646492e+02
      vertex  -2.133716e+03  6.110930e+03 -3.657015e+03
      vertex  -5.182467e+03  6.110930e+03 -3.657015e+03
    endloop
  endfacet
  facet normal  0.000000e+00  1.000000e+00  0.000000e+00
    outer loop
      vertex  -2.133716e+03  6.110930e+03  3.646492e+02
      vertex  -5.182467e+03  6.110930e+03 -3.657015e+03
      vertex  -3.658092e+03  6.110930e+03  3.646492e+02
    endloop
  endfacet
  facet normal  0.000000e+00  1.000000e+00  0.000000e+00
    outer loop
      vertex  -3.658092e+03  6.110930e+03  3.646492e+02
      vertex  -5.182467e+03  6.110930e+03 -3.657015e+03
      vertex  -5.182467e+03  6.110930e+03  3.646492e+02
    endloop
  endfacet
  facet normal  0.000000e+00 -1.000000e+00  0.000000e+00
    outer loop
      vertex  -5.182467e+03  3.072240e+03 -1.623297e+03
      vertex  -2.133716e+03  3.072240e+03 -3.657015e+03
      vertex  -2.133716e+03  3.072240e+03 -1.623297e+03
    endloop
  endfacet
  facet normal  0.000000e+00 -1.000000e+00  0.000000e+00
    outer loop
      vertex  -2.133716e+03  3.072240e+03 -3.657015e+03
      vertex  -5.182467e+03  3.072240e+03 -1.623297e+03
      vertex  -5.182467e+03  3.072240e+03 -3.657015e+03
    endloop
  endfacet
  facet normal  0.000000e+00  0.000000e+00  1.000000e+00
    outer loop
      vertex  -2.133716e+03  5.504720e+03  3.646492e+02
      vertex  -3.658092e+03  6.110930e+03  3.646492e+02
      vertex  -3.658092e+03  5.504720e+03  3.646492e+02
    endloop
  endfacet
  facet normal -0.000000e+00  0.000000e+00  1.000000e+00
    outer loop
      vertex  -3.658092e+03  6.110930e+03  3.646492e+02
      vertex  -2.133716e+03  5.504720e+03  3.646492e+02
      vertex  -2.133716e+03  6.110930e+03  3.646492e+02
    endloop
  endfacet
  facet normal  0.000000e+00 -7.644634e-01 -6.446671e-01
    outer loop
      vertex  -2.133716e+03  1.856000e+03 -1.810471e+02
      vertex  -5.182467e+03  3.072240e+03 -1.623297e+03
      vertex  -2.133716e+03  3.072240e+03 -1.623297e+03
    endloop
  endfacet
  facet normal  0.000000e+00 -7.644634e-01 -6.446671e-01
    outer loop
      vertex  -5.182467e+03  3.072240e+03 -1.623297e+03
      vertex  -2.133716e+03  1.856000e+03 -1.810471e+02
      vertex  -5.182467e+03  1.856000e+03 -1.810471e+02
    endloop
  endfacet
  facet normal  1.000000e+00  0.000000e+00  0.000000e+00
    outer loop
      vertex  -2.133716e+03  6.110930e+03  3.646492e+02
      vertex  -2.133716e+03  4.288480e+03 -1.623297e+03
      vertex  -2.133716e+03  6.110930e+03 -1.623297e+03
    endloop
  endfacet
  facet normal  1.000000e+00  0.000000e+00  0.000000e+00
    outer loop
      vertex  -2.133716e+03  4.288480e+03 -1.623297e+03
      vertex  -2.133716e+03  6.110930e+03  3.646492e+02
      vertex  -2.133716e+03  4.288480e+03  3.646492e+02
    endloop
  endfacet
  facet normal  0.000000e+00  0.000000e+00  1.000000e+00
    outer loop
      vertex  -2.133716e+03  1.856000e+03  3.646492e+02
      vertex  -3.658092e+03  3.072240e+03  3.646492e+02
      vertex  -3.658092e+03  1.856000e+03  3.646492e+02
    endloop
  endfacet
  facet normal -0.000000e+00  0.000000e+00  1.000000e+00
    outer loop
      vertex  -3.658092e+03  3.072240e+03  3.646492e+02
      vertex  -2.133716e+03  1.856000e+03  3.646492e+02
      vertex  -2.133716e+03  3.072240e+03  3.646492e+02
    endloop
  endfacet
  facet normal  0.000000e+00  0.000000e+00  1.000000e+00
    outer loop
      vertex  -2.133716e+03  5.504720e+03  3.646492e+02
      vertex  -3.658092e+03  4.288480e+03  3.646492e+02
      vertex  -2.133716e+03  4.288480e+03  3.646492e+02
    endloop
  endfacet
  facet normal  0.000000e+00  0.000000e+00  1.000000e+00
    outer loop
      vertex  -3.658092e+03  4.288480e+03  3.646492e+02
      vertex  -2.133716e+03  5.504720e+03  3.646492e+02
      vertex  -3.658092e+03  5.504720e+03  3.646492e+02
    endloop
  endfacet
  facet normal  0.000000e+00  0.000000e+00  1.000000e+00
    outer loop
      vertex  -2.133716e+03  3.072240e+03  3.646492e+02
      vertex  -3.658092e+03  4.288480e+03  3.646492e+02
      vertex  -3.658092e+03  3.072240e+03  3.646492e+02
    endloop
  endfacet
  facet normal -0.000000e+00  0.000000e+00  1.000000e+00
    outer loop
      vertex  -3.658092e+03  4.288480e+03  3.646492e+02
      vertex  -2.133716e+03  3.072240e+03  3.646492e+02
      vertex  -2.133716e+03  4.288480e+03  3.646492e+02
    endloop
  endfacet
  facet normal  0.000000e+00  0.000000e+00  1.000000e+00
    outer loop
      vertex  -3.658092e+03  6.110930e+03  3.646492e+02
      vertex  -5.182467e+03  5.504720e+03  3.646492e+02
      vertex  -3.658092e+03  5.504720e+03  3.646492e+02
    endloop
  endfacet
  facet normal  0.000000e+00  0.000000e+00  1.000000e+00
    outer loop
      vertex  -5.182467e+03  5.504720e+03  3.646492e+02
      vertex  -3.658092e+03  6.110930e+03  3.646492e+02
      vertex  -5.182467e+03  6.110930e+03  3.646492e+02
    endloop
  endfacet
  facet normal  0.000000e+00  0.000000e+00  1.000000e+00
    outer loop
      vertex  -3.658092e+03  3.072240e+03  3.646492e+02
      vertex  -5.182467e+03  4.288480e+03  3.646492e+02
      vertex  -5.182467e+03  3.072240e+03  3.646492e+02
    endloop
  endfacet
  facet normal -0.000000e+00  0.000000e+00  1.000000e+00
    outer loop
      vertex  -5.182467e+03  4.288480e+03  3.646492e+02
      vertex  -3.658092e+03  3.072240e+03  3.646492e+02
      vertex  -3.658092e+03  4.288480e+03  3.646492e+02
    endloop
  endfacet
  facet normal  0.000000e+00  0.000000e+00  1.000000e+00
    outer loop
      vertex  -3.658092e+03  5.504720e+03  3.646492e+02
      vertex  -5.182467e+03  4.288480e+03  3.646492e+02
      vertex  -3.658092e+03  4.288480e+03  3.646492e+02
    endloop
  endfacet
  facet normal  0.000000e+00  0.000000e+00  1.000000e+00
    outer loop
      vertex  -5.182467e+03  4.288480e+03  3.646492e+02
      vertex  -3.658092e+03  5.504720e+03  3.646492e+02
      vertex  -5.182467e+03  5.504720e+03  3.646492e+02
    endloop
  endfacet
  facet normal  0.000000e+00  0.000000e+00  1.000000e+00
    outer loop
      vertex  -3.658092e+03  3.072240e+03  3.646492e+02
      vertex  -5.182467e+03  1.856000e+03  3.646492e+02
      vertex  -3.658092e+03  1.856000e+03  3.646492e+02
    endloop
  endfacet
  facet normal  0.000000e+00  0.000000e+00  1.000000e+00
    outer loop
      vertex  -5.182467e+03  1.856000e+03  3.646492e+02
      vertex  -3.658092e+03  3.072240e+03  3.646492e+02
      vertex  -5.182467e+03  3.072240e+03  3.646492e+02
    endloop
  endfacet
  facet normal -1.000000e+00  0.000000e+00  0.000000e+00
    outer loop
      vertex  -5.182467e+03  1.856000e+03 -1.810471e+02
      vertex  -5.182467e+03  3.072240e+03  3.646492e+02
      vertex  -5.182467e+03  3.072240e+03 -1.623297e+03
    endloop
  endfacet
  facet normal -1.000000e+00 -0.000000e+00  0.000000e+00
    outer loop
      vertex  -5.182467e+03  3.072240e+03  3.646492e+02
      vertex  -5.182467e+03  1.856000e+03 -1.810471e+02
      vertex  -5.182467e+03  1.856000e+03  3.646492e+02
    endloop
  endfacet
  facet normal -1.000000e+00  0.000000e+00  0.000000e+00
    outer loop
      vertex  -5.182467e+03  3.072240e+03 -1.623297e+03
      vertex  -5.182467e+03  4.288480e+03 -3.657015e+03
      vertex  -5.182467e+03  3.072240e+03 -3.657015e+03
    endloop
  endfacet
  facet normal -1.000000e+00  0.000000e+00  0.000000e+00
    outer loop
      vertex  -5.182467e+03  4.288480e+03 -3.657015e+03
      vertex  -5.182467e+03  3.072240e+03 -1.623297e+03
      vertex  -5.182467e+03  4.288480e+03 -1.623297e+03
    endloop
  endfacet
  facet normal -1.000000e+00  0.000000e+00  0.000000e+00
    outer loop
      vertex  -5.182467e+03  4.288480e+03 -1.623297e+03
      vertex  -5.182467e+03  6.110930e+03 -3.657015e+03
      vertex  -5.182467e+03  4.288480e+03 -3.657015e+03
    endloop
  endfacet
  facet normal -1.000000e+00  0.000000e+00  0.000000e+00
    outer loop
      vertex  -5.182467e+03  6.110930e+03 -3.657015e+03
      vertex  -5.182467e+03  4.288480e+03 -1.623297e+03
      vertex  -5.182467e+03  6.110930e+03 -1.623297e+03
    endloop
  endfacet
  facet normal -1.000000e+00  0.000000e+00  0.000000e+00
    outer loop
      vertex  -5.182467e+03  3.072240e+03  3.646492e+02
      vertex  -5.182467e+03  4.288480e+03 -1.623297e+03
      vertex  -5.182467e+03  3.072240e+03 -1.623297e+03
    endloop
  endfacet
  facet normal -1.000000e+00  0.000000e+00  0.000000e+00
    outer loop
      vertex  -5.182467e+03  4.288480e+03 -1.623297e+03
      vertex  -5.182467e+03  3.072240e+03  3.646492e+02
      vertex  -5.182467e+03  4.288480e+03  3.646492e+02
    endloop
  endfacet
  facet normal -1.000000e+00  0.000000e+00  0.000000e+00
    outer loop
      vertex  -5.182467e+03  4.288480e+03  3.646492e+02
      vertex  -5.182467e+03  6.110930e+03 -1.623297e+03
      vertex  -5.182467e+03  4.288480e+03 -1.623297e+03
    endloop
  endfacet
  facet normal -1.000000e+00  0.000000e+00  0.000000e+00
    outer loop
      vertex  -5.182467e+03  6.110930e+03 -1.623297e+03
      vertex  -5.182467e+03  4.288480e+03  3.646492e+02
      vertex  -5.182467e+03  6.110930e+03  3.646492e+02
    endloop
  endfacet
  facet normal  1.000000e+00  0.000000e+00  0.000000e+00
    outer loop
      vertex  -2.133716e+03  6.110930e+03 -3.657015e+03
      vertex  -2.133716e+03  4.288480e+03 -1.623297e+03
      vertex  -2.133716e+03  4.288480e+03 -3.657015e+03
    endloop
  endfacet
  facet normal  1.000000e+00 -0.000000e+00  0.000000e+00
    outer loop
      vertex  -2.133716e+03  4.288480e+03 -1.623297e+03
      vertex  -2.133716e+03  6.110930e+03 -3.657015e+03
      vertex  -2.133716e+03  6.110930e+03 -1.623297e+03
    endloop
  endfacet
  facet normal  1.000000e+00  0.000000e+00  0.000000e+00
    outer loop
      vertex  -2.133716e+03  4.288480e+03  3.646492e+02
      vertex  -2.133716e+03  3.072240e+03 -1.623297e+03
      vertex  -2.133716e+03  4.288480e+03 -1.623297e+03
    endloop
  endfacet
  facet normal  1.000000e+00  0.000000e+00 -0.000000e+00
    outer loop
      vertex  -2.133716e+03  3.072240e+03 -1.623297e+03
      vertex  -2.133716e+03  4.288480e+03  3.646492e+02
      vertex  -2.133716e+03  1.856000e+03 -1.810471e+02
    endloop
  endfacet
  facet normal  1.000000e+00  0.000000e+00  0.000000e+00
    outer loop
      vertex  -2.133716e+03  1.856000e+03 -1.810471e+02
      vertex  -2.133716e+03  4.288480e+03  3.646492e+02
      vertex  -2.133716e+03  1.856000e+03  3.646492e+02
    endloop
  endfacet
  facet normal  1.000000e+00  0.000000e+00  0.000000e+00
    outer loop
      vertex  -2.133716e+03  4.288480e+03 -3.657015e+03
      vertex  -2.133716e+03  3.072240e+03 -1.623297e+03
      vertex  -2.133716e+03  3.072240e+03 -3.657015e+03
    endloop
  endfacet
  facet normal  1.000000e+00 -0.000000e+00  0.000000e+00
    outer loop
      vertex  -2.133716e+03  3.072240e+03 -1.623297e+03
      vertex  -2.133716e+03  4.288480e+03 -3.657015e+03
      vertex  -2.133716e+03  4.288480e+03 -1.623297e+03
    endloop
  endfacet
endsolid
```