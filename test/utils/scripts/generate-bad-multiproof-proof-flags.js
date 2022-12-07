const { StandardMerkleTree } = require("@openzeppelin/merkle-tree");
const ethers = require("ethers");

const badElements = require("./multiproof-bad-elements.js");
const merkleTree = StandardMerkleTree.of(
  badElements.map((c) => [c]),
  ["string"]
);

const idx = require("./multiproof-bad-indices.js");
const { proofFlags } = merkleTree.getMultiProof(idx);

// eslint-disable-next-line no-undef
process.stdout.write(
  ethers.utils.defaultAbiCoder.encode(Array(7).fill("bool"), proofFlags)
);
